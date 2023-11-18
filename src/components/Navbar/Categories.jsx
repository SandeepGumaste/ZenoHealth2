import React from 'react'
import styles from "./categories.module.css"
const navCategoriesData=[
    {
        icon:"bi-building",
        name:"Hotel"
    },
    {
        icon:"bi-airplane-fill",
        name:"Flight"
    },
    {
        icon:"bi-globe-americas",
        name:"Tour"
    },
    {
        icon:"bi-car-front-fill",
        name:"Cab"
    },
]


const Categories = () => {
  return (
    <div className='d-flex align-items-center'>
        <div className='d-flex d-xl-none'>
            
            <div className='d-flex align-items-center ms-4 btn p-0 border-0 d-xl-none'>
                <span><i className="bi bi-grid-3x3-gap-fill fs-3"/></span><span className='d-none d-sm-flex'>Category</span>
            </div>
        </div>
        <div className='d-xl-flex d-none'>
        {
            navCategoriesData.map((cat,index)=>{
                const{icon,name} =cat
                return <button className={`me-1 btn ${styles.btn} ${index===0 && styles.btnActive}`}>
                    <span><i className={`bi ${icon} me-2`}/></span>
                    {name}
                </button>
            })
        }
        </div>
    </div>
  )
}

export default Categories