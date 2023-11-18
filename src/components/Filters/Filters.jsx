import React, { useEffect, useRef, useState } from 'react'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from "./filters.module.css"
import { DateRangePicker } from 'react-date-range';
import {format} from "date-fns"
import CommonCounter from './CommonCounter';
import AutoCompleteDropDown from './AutocompleteDropdown';

const locationOptions=["San Jacinto, USA","North Dakota, Canada","West Virginia, Paris"]

const Filters = () => {
    const[range,setRange] = useState(
        {
            startDate: new Date(),
            endDate: addDays(new Date(),2),
            key: 'selection'
        }
    )
    const [guestsAndRooms, setGuestsAndRooms] = useState({
        adults:2,
        children:0,
        totalGuests:2,
        rooms:1
    })
    const [showDateSelector, setShowDateSelector] = useState(false)
    const [showGuestSelector, setShowGuestSelector] = useState(false)
    const [showLocationSelector, setShowLocationSelector] = useState(false)
    const [location, setLocation] = useState("Select Location")
    

    const calendarRef = useRef(null)
    const guestsRef=useRef(null)
    const locationRef=useRef(null)


    const pluralUtil=(count,word)=>{
        if(count>1){
            return `${word}s`
        }else{
            return word
        }
    }
    
    useEffect(() => {
        window.addEventListener('click',(e)=>{
                    if(calendarRef.current && !calendarRef.current.contains(e.target)){
                        setShowDateSelector(false)
                    }
                    if(guestsRef.current && !guestsRef.current.contains(e.target)){
                        setShowGuestSelector(false)
                    }
                    if(locationRef.current && !locationRef.current.contains(e.target)){
                        setShowLocationSelector(false)
                    }
            
            },true)

      return () => {
        window.removeEventListener('click',()=>{})
      }
    }, [])

    const handleDateSelectorClick=()=>setShowDateSelector(true)
    const handleGuestsAndRoomsClick=()=>setShowGuestSelector(true)
    const handleLocationSelectorClick=()=>setShowLocationSelector(true)
    const handleIncrease=(name)=>{
        setGuestsAndRooms((prev)=>{
            if(name!=="rooms"){
                return {...prev,[name]:prev[name]+1, totalGuests:prev.totalGuests+1}
            }
            return {...prev,[name]:prev[name]+1}
        })
    }
    const handleDecrease=(name)=>{
        setGuestsAndRooms((prev)=>{
            if(prev[name]>0){
                if(name!=="rooms"){
                    return {...prev,[name]:prev[name]-1, totalGuests:prev.totalGuests-1}
                }
                return {...prev,[name]:prev[name]-1}
            }
            return prev
        })
    }

    const handleSelectLocation=(location)=>{
        setLocation(location)
        setTimeout(()=>setShowLocationSelector(false),0)
    }
    
    
      
  return (
    <section className='p-lg-0 m-lg-0'>
        <div className='container position-relative py-5'>
            <div className={`${styles.filters} pe-4`}>
                <button className={`${styles.searchButton} rounded-circle`}> <i className='bi bi-search fs-4'/></button>
                <div className='d-flex flex-column flex-lg-row  rounded-4 gap-4 gap-lg-0 px-4 py-4 '>
                    <div 
                        ref={locationRef}
                        className='d-flex col-lg-4 pe-lg-3'>
                        <i className='bi bi-geo-alt fs-2 me-2 mt-2'/>
                        <div className={`${showLocationSelector? "rounded-bottom-0":"rounded-bottom-3"} border rounded-top-3 px-2 py-3 position-relative w-100 ${showLocationSelector && styles.locationActive}`} onClick={handleLocationSelectorClick}>
                                <label className={`${styles.formLabel} bg-white px-2 position-absolute`}>
                                Location
                                </label>
                                <span className='ps-2'>{location}</span>
                                {
                                    showLocationSelector && <div className=''>
                                    <AutoCompleteDropDown handleSelect={handleSelectLocation} options={locationOptions}/>
                                    </div>
                                }
                        </div>
                    </div>
                    <div 
                        ref={calendarRef}
                        className='d-flex col-lg-4 px-lg-3'>
                        <i className='bi bi-calendar fs-2 me-2 mt-2'/>
                        <div className={`${showDateSelector? "rounded-bottom-0":"rounded-bottom-3"} ${showDateSelector && styles.calActive} border rounded-top-3 px-2 py-3 position-relative w-100`} onClick={handleDateSelectorClick}>
                                <label htmlFor='#dates' className={`${styles.formLabel} bg-white px-2 position-absolute`}>
                                Check in - out
                                </label>
                                <span className='ps-2'>{`${format(range.startDate, 'dd MMM')} to ${format(range.endDate, 'dd MMM')}`}</span>
                                {showDateSelector && <div>
                                    <DateRangePicker
                                    editableDateInputs={true}
                                    onChange={item => {
                                        setRange(item.selection)}}
                                    moveRangeOnFirstSelection={false}
                                    ranges={[range]}
                                    minDate={new Date()}
                                    />
                                </div>}
                        </div>
                    </div>
                    <div 
                        className='d-flex col-lg-4 ps-lg-3'>
                        <i className='bi bi-person fs-2 me-2 mt-2'/>
                        <div className={`${showGuestSelector? "rounded-bottom-0":"rounded-bottom-3"} border rounded-top-3 px-2 py-3 position-relative w-100 ${showGuestSelector && styles.guestActive}`} onClick={handleGuestsAndRoomsClick}>
                            <label className={`${styles.formLabel} bg-white px-2 position-absolute`}>
                            Guests & rooms
                            </label>
                            <span className='ps-2'>
                                {guestsAndRooms.totalGuests && guestsAndRooms.totalGuests} {pluralUtil(guestsAndRooms.totalGuests,"Guest")} & {
                                    guestsAndRooms.rooms
                                } {pluralUtil(guestsAndRooms.rooms,"Room")}
                            </span>
                            {
                                showGuestSelector && <div ref={guestsRef} className={`${styles.countersContainer} px-3 py-2`}>
                                {Object.keys(guestsAndRooms).filter((item)=>item!=="totalGuests").map((item)=>{
                                    return (
                                        <CommonCounter count={guestsAndRooms[item]} name={item} handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
                                    )
                                })}
                            </div>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </div>
    </section>
  )
}

export default Filters