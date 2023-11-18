import React from 'react'
import FeaturedHotelCard from './FeaturedHotelCard'
import { featuredHotelsData } from '../../data/data'

const FeaturedHotels = () => {
  return (
    <div className='container'>
        <div className="row mb-4 justify-content-center">
			<div className="col-12 text-center">
				<h2 className="mb-0 fw-bold display-5">Featured Hotels</h2>
			</div>
            <div className='row g-4 px-0'>
                {
                    featuredHotelsData.map((hotel,index)=>{
                        return <FeaturedHotelCard key={hotel.name+index} data={hotel}/>
                    })
                }
            </div>
		</div>
    </div>
  )
}

export default FeaturedHotels