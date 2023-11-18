import React, { useState } from 'react'
import { addDays } from 'date-fns';
import "flatpickr/dist/themes/material_green.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from "./filters.module.css"
import { DateRangePicker } from 'react-date-range';
const Filters = () => {
    const [showDateSelector, setShowDateSelector] = useState(false)
    const[range,setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),2),
          key: 'selection'
        }
      ])
      
  return (
    <div className='container'>
        <div className='d-flex'>
            <div className='border rounded-4 px-2 py-3 position-relative' onClick={()=>setShowDateSelector((prev)=>!prev)}>
                    <label className={`${styles.formLabel} bg-white position-absolute`}>
                    Check in - out
                    </label>
                    <div>
   
                    </div>
                    {showDateSelector && <div>
                        <DateRangePicker
                        editableDateInputs={true}
                        onChange={item => {
                            console.log(range)
                            setRange([item.selection])}}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        />
                    </div>}
            </div>
        </div>
    
    </div>
  )
}

export default Filters