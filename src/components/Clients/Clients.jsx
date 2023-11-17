import React from 'react'
import styles from "./clients.module.css"

const clientImages = [
    "https://booking.webestica.com/assets/images/client/01.svg",
    "https://booking.webestica.com/assets/images/client/02.svg",
    "https://booking.webestica.com/assets/images/client/03.svg",
    "https://booking.webestica.com/assets/images/client/04.svg",
    "https://booking.webestica.com/assets/images/client/05.svg",
    "https://booking.webestica.com/assets/images/client/06.svg",
]

const Clients = () => {
  return (
    <section>
        <div className='container'>
            <div className='row g-4 g-lg-5 justify-content-center align-items-center'>
                {
                    clientImages.map((client)=>{
                        return (
                            <div className="col-5 col-sm-3 col-xl-2">
                                <img src={client} className={`${styles.greyscale} w-100`} alt="client"/>
			                </div>
                        )
                    })
                }
            </div>    
        </div>
    </section>
  )
}

export default Clients