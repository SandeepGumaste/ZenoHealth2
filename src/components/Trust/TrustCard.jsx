import React from 'react'

const TrustCard = ({data}) => {
    const {icon,heading,content} =data 
    return (
    <div className='bg-white p-4 rounded-4 col-md-6 col-lg-5 col-xl-4'>
        <div className='d-flex align-items-start'>
        <i className={`${icon} fs-1 me-2`}/>
        <div className='mt-1'>
            <h5 className='fw-bold fs-4'>{heading}</h5>
            <p className='mb-0'>
                {content}
            </p>
        </div>
    </div>
    </div>
  )
}

export default TrustCard