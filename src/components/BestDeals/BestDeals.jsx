import React from 'react'
import styles from "./bestDeals.module.css"
import AvatarGroup from './AvatarGroup'
import { advantages } from '../../data/data'


const BestDeals = () => {

  return (
    <section className="pb-0 pb-xl-5">
	<div className="container">
		<div className="row gap-4 justify-content-between align-items-center">
			<div className="col-lg-5 position-relative">
				<img src="https://booking.webestica.com/assets/images/about/01.jpg" className="rounded-3 position-relative img-fluid" alt=""/>
                <AvatarGroup/>
			</div>
			<div className='col-lg-6'>
                <div className="col-12 text-start">
                    <h2 className="mb-3 mb-lg-5 fw-bold display-5">The Best Holidays Start Here!</h2>
                    <p className='mb-3 mb-lg-5'>Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.</p>
                </div>
                <div className='row gap-4'>
                    {advantages.map((advantage)=>{
                        const{icon,heading,content} =advantage
                        return(
                            <div key={advantage.heading} className='col-12 col-sm-5'>
                                <div className={`${styles.iconContainer} rounded-circle`}>
                                    <i className={`bi ${icon} fs-4`}/>
                                </div>
                                <h5 className='fw-bold fs-4'>
                                {heading}
                                </h5>
                                <p>
                                {content}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
		</div>
	</div>
</section>
  )
}

export default BestDeals