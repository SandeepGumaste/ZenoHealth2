import React, { useEffect, useRef, useState } from 'react'
import styles from "./filters.module.css"

const DropDown = ({options,handleSelect}) => {
    const inputRef = useRef(null)
    const [searchText, setSearchText] = useState("")
    const [filtered, setfiltered] = useState(options)
    const handleInputChange=(e)=>{
        setSearchText(e.target.value)
    }


    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

    useEffect(()=>{
        if(searchText){
            const filteredLocations=options.filter((option)=>option.toLowerCase().includes(searchText.toLowerCase()))
            setfiltered(filteredLocations)
        }else{
            setfiltered(options)
        }
    },[searchText,options])
  return (
    <div className={styles.locationContainer}>
        <input ref={inputRef} onChange={handleInputChange} className='fs-6 border-bottom p-2 w-100' type='text'></input>

        {
            filtered.length>0 ? filtered.map((option)=>{
                return <div key={option} className={`${styles.dropdownOption} border-bottom p-2`} onClick={()=>handleSelect(option)}>
                    {
                        option
                    }
                </div>
            }):(
                <div className={`${styles.dropdownOption} border-bottom p-2`}>
                    No results found
                </div>
            )
        }
    </div>
  )
}

export default DropDown