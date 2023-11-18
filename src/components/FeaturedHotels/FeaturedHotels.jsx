import React from 'react'
import FeaturedHotelCard from './FeaturedHotelCard'
const featuredHotelsData=[
    {
        imgUrl:"https://booking.webestica.com/assets/images/category/hotel/01.jpg",
        name: "Baga Comfort",
        location:"New York",
        rating:"4.5",
        price:455,
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/category/hotel/01.jpg",
        name: "Baga Comfort",
        location:"New York",
        rating:"4.5",
        price:455,
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/category/hotel/01.jpg",
        name: "Baga Comfort",
        location:"New York",
        rating:"4.5",
        price:455,
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/category/hotel/01.jpg",
        name: "Baga Comfort",
        location:"New York",
        rating:"4.5",
        price:455,
    }
]
const FeaturedHotels = () => {
  return (
    <div className='container'>
        <div className="row mb-4 justify-content-center">
			<div className="col-12 text-center">
				<h2 className="mb-0 fw-bold display-5">Featured Hotels</h2>
			</div>
            <div className='row g-4 px-0'>
                {
                    featuredHotelsData.map((hotel)=>{
                        return <FeaturedHotelCard data={hotel}/>
                    })
                }
            </div>
		</div>
    </div>
  )
}

export default FeaturedHotels