import React from 'react'
import styles from "./bestDeals.module.css"
// https://booking.webestica.com/assets/images/element/01.svg
const avatars = [
    "https://booking.webestica.com/assets/images/avatar/01.jpg",
    "https://booking.webestica.com/assets/images/avatar/02.jpg",
    "https://booking.webestica.com/assets/images/avatar/03.jpg",
    "https://booking.webestica.com/assets/images/avatar/04.jpg",
]
const AvatarGroup = () => {
  return (
    <div className={`${styles.avatarGroup} bg-white rounded-4 position-absolute d-flex`}>
        <img className={styles.thumb} width={40} height={40} src='https://booking.webestica.com/assets/images/element/01.svg' alt='thumbsUp'/>
        <div className='d-flex'>
            <div className='me-4'>
                <h6>
                    Client
                </h6>
                {
                    avatars.map((avatar,index)=>{
                        return <img key={avatar} width={40} height={40} src={avatar} alt="avatar" className={`rounded-circle`} style={{
                            zIndex:50*index,
                            marginRight:`-${12}px`
                        }}/>
                    })
                }
            </div>
            <div className='ms-3'>
                <h6>Rating</h6>
                <div className='d-flex align-items-center mt-3'>
                    <h6 className='fw-bold mb-0 me-1'>4.5</h6>
                    <i className='bi bi-star-fill'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvatarGroup