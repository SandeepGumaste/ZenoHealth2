import React from 'react'
import ExploreNearbyCard from './ExploreNearbyCard'
import { nearbyPlacesData } from '../../data/data'



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
                        nearbyPlacesData.map((place)=><ExploreNearbyCard key={place.name} data={place}/>)
                    }
                </div>
            </div>

        </div>
    </section>
  )
}

export default ExploreNearby