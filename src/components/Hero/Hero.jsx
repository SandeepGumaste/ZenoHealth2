import React from 'react'
import styles from './Hero.module.css'
import ImageCircle from './ImageCircle'

const Hero = () => {
  return (
    <section className='pt-3 pt-lg-5'>
    
      <div className='container'>
        <div className='row g-4 g-lg-5 '>
          <div className='col-lg-6 position-relative mb-4 mb-md-0'>
              <h1 className={`${styles.heading} mb-4 mt-md-5`}>Find the top
                  <span className="position-relative z-index-9"> Hotels nearby.
                  </span>
              </h1>
              <p className='mb-4'>
                  We bring you not only a stay option, but an experience in your budget to enjoy the luxury.
              </p>
              <div className="d-flex gap-4 flex-wrap align-items-center">
                  <button className={`${styles.btn} btn`}>Discover Now</button>
                </div>
          </div>
          <div className="col-lg-6 position-relative">
              <img src="https://booking.webestica.com/assets/images/bg/06.jpg" className="rounded img-fluid" alt="hero"/>
              <div className={styles.guide}>
                <div className="bg-blur border border-light rounded-4 text-center shadow-lg p-3">
                  <i className="bi bi-headset text-danger fs-1"/>
                  <h5 className="fw-bold mb-1">24 / 7</h5>
                  <h6 className="text-dark fw-light small mb-0">Guide Supports</h6>
                </div>
                </div>
                <div className={`${styles.imageCircleContainer} gap-5 align-items-center position-absolute top-0 d-none d-md-flex mt-4 flex-column`}>
                  <ImageCircle src="https://booking.webestica.com/assets/images/category/hotel/4by3/11.jpg" size={3.5}/>
                  <ImageCircle src="https://booking.webestica.com/assets/images/category/hotel/4by3/12.jpg" size={5}/>
                </div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero