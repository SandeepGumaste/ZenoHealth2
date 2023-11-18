import React from 'react'
import ExploreNearbyCard from './ExploreNearbyCard'


const nearbyPlacesData=[
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/01.jpg",
        "name": "San Francisco",
        "travelTime": "13 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/02.jpg",
        "name": "Los Angeles",
        "travelTime": "25 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/03.jpg",
        "name": "Miami",
        "travelTime": "45 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/04.jpg",
        "name": "Sanjosh",
        "travelTime": "55 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/05.jpg",
        "name": "New York",
        "travelTime": "1-hour"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/06.jpg",
        "name": "North Justen",
        "travelTime": "2-hour"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/07.jpg",
        "name": "Rio",
        "travelTime": "20 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/08.jpg",
        "name": "Las Vegas",
        "travelTime": "3-hour"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/09.jpg",
        "name": "Texas",
        "travelTime": "55 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/10.jpg",
        "name": "Chicago",
        "travelTime": "13 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/11.jpg",
        "name": "New Keagan",
        "travelTime": "35 min"
    },
    {
        "imgUrl": "https://booking.webestica.com/assets/images/category/hotel/nearby/12.jpg",
        "name": "Oslo",
        "travelTime": "1 hour 13 min"
    }
]

const ExploreNearby = () => {
  return (
    <section>
        <div className='container'>
            <div className="row mb-4 justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="fw-bold display-5">Explore Nearby</h2>
                </div>
                <div className='row g-4 g-md-5 mt-0 px-0'>
                    {
                        nearbyPlacesData.map((place)=><ExploreNearbyCard data={place}/>)
                    }
                </div>
            </div>

        </div>
    </section>
  )
}

export default ExploreNearby