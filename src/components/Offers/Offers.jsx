import React, { useEffect, useRef } from 'react'
import 'tiny-slider/dist/tiny-slider.css';
import OfferCard from './OfferCard';
import {tns} from 'tiny-slider/src/tiny-slider.js';
import { offersData } from '../../data/data';


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
            { offersData.map((offer,index)=>{
                return <OfferCard data={offer} key={offer.heading+index}/>
            })}
        </div>
      </div>
      </section>
  )
}

export default Offers