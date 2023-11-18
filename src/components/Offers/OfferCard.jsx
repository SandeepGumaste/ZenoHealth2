import React from 'react'
import styles from "./offerCard.module.css"

const OfferCard = ({data}) => {
  const {imgUrl,heading,content} = data
  return (
    <div className={styles.offerCard}>
      <div className='d-flex flex-column flex-lg-row border rounded-4 overflow-hidden'>
          <img src={imgUrl} alt='offer' className={styles.cardImg}/>
        <div className='px-3 text-start text-md-center py-3 my-auto'>
          <h5 className='fs-5 fw-bold'>
            {heading}
          </h5>
          <p className='p-0 m-0'>
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OfferCard