import React from 'react'
import styles from "./feedback.module.css"

const FeedbackCard = () => {
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between'>
        <div className='col-md-6 col-lg-5 position-relative'>
            <img className='img-fluid rounded-3' src='https://booking.webestica.com/assets/images/team/02.jpg' alt='person'/>
            <div className={`${styles.emoji} position-absolute top-0 start-0 z-index-9 rounded-3 d-none d-md-flex`}>
                <img src='https://booking.webestica.com/assets/images/element/02.svg' width={44} alt=''/>
            </div>
        </div>
        <div className='col-md-6 col-lg-6 ms-md-5'>
            <div className='d-flex flex-column align-items-start justify-content-center h-100'>
                <i className='bi bi-quote display-1 fill'/>
                <h5 className='fw-light'>
                Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed in laughing
                </h5>
                <div className='d-flex my-2'>
                    <i className='bi bi-star-fill me-1'/>
                    <i className='bi bi-star-fill me-1'/>
                    <i className='bi bi-star-fill me-1'/>
                    <i className='bi bi-star-fill me-1'/>
                    <i className='bi bi-star-fill'/>
                </div>
                <h5 className='fw-bold fs-5'>
                    Carolyn Oritz
                </h5>
                <p className='p-0 m-0'>
                    Ceo of Apple
                </p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard