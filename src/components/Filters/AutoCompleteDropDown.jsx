import React, { useEffect, useRef } from 'react'
import Choices from "choices.js"


const AutoCompleteDropDown = () => {
    const selectRef = useRef(null)

    useEffect(() => {
      if(selectRef.current){
        const choices = new Choices(selectRef.current,{})
      }
    

    }, [])
    

  return (
    <div className='border rounded-4' ref={selectRef}>
    <label className='bg-white'>
        Location
    </label>
        <select className=''>
        <option>
            1
        </option>
        <option>
        2
        </option>
        <option>
        3
        </option>
        </select>
    </div>
  )
}

export default AutoCompleteDropDown