import React from 'react'
import styles from "./featuredHotelCard.module.css"

const FeaturedHotelCard = ({
    data
}) => {
    const {imgUrl,name,location,rating,price} = data
  return (
    <div className={`${styles.hotelCard} col-sm-6 col-xl-3`}>
        <div className="position-relative w-100">
            <div className="rounded-4 overflow-hidden">
                <img src={imgUrl} className="card-img" alt="hotel"/>
                <div className="position-absolute bottom-0 start-0 p-3">
                    <div className="badge text-bg-dark fs-6 rounded-pill"><i className="bi bi-geo-alt me-2"></i>{location}</div>
                </div>
            </div>

        </div>
        <div className="px-2 py-3">
            <h5 className={`${styles.hotelName} fw-bold fs-4`}>{name}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-success fw-bold mb-0">${price} <small className="fw-light">/starting at</small>
                </h6>
                <h6 className="mb-0 col text-end">{rating}<i className="bi bi-star-fill ms-1"/></h6>
            </div>    
        </div>                
    </div>
  )
}

export default FeaturedHotelCard