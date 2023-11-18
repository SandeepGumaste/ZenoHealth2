import React, { useEffect, useRef } from 'react'
import 'tiny-slider/dist/tiny-slider.css';
import OfferCard from './OfferCard';
import {tns} from 'tiny-slider/src/tiny-slider.js';





const offersData=[
    {
        imgUrl:"https://booking.webestica.com/assets/images/offer/01.jpg",
        heading:"Book & enjoy",
        content:"Up to 3 nights free"
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/offer/02.jpg",
        heading:"Hot Summer Nights",
        content:"Up to 3 nights free"
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/offer/04.jpg",
        heading:"Up to 60% OFF",
        content:"Up to 3 nights free"
    },
    {
        imgUrl:"https://booking.webestica.com/assets/images/offer/03.jpg",
        heading:"Book & enjoy",
        content:"Up to 3 nights free"
    }
]

const Offers = () => {
    const slider = useRef(null)
    useEffect(() => {
      if(slider.current){
          tns({
            responsive: {
                768: {
                  items: 1
                },
                992: {
                  items:2
                },
                1200: {
                  items: 3,
                }
              },
            "mouseDrag": true,
            "container": ".offersSlider",
            controls:false,
            autoplay:true,
            speed: 400,
            nav:false,
          });
      }
    }, [])
  return (
      <section className={StyleSheet.offersContainer}>
      <div className='container'>
        <div className='offersSlider row mx-auto' ref={slider}>
            { offersData.map((offer)=>{
                return <OfferCard data={offer} key={offer.heading}/>
            })}
        </div>
      </div>
      </section>
  )
}

export default Offers