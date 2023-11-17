import React from 'react'
import styles from "./exploreNearbyCard.module.css"

const ExploreNearbyCard = ({data}) => {

    const{imgUrl,name,travelTime} =data
  return (
    <div className={`${styles.placeCard} col-6 col-sm-4 col-lg-3 col-xl-2 text-center`}>
        <img className='w-100 rounded-pill' src={imgUrl} alt='place'/>
        <h5 className={`${styles.placeName} fw-bold  mt-3`}>{name}</h5>
        <p>{travelTime} drive</p>
    </div>
  )
}

export default ExploreNearbyCard