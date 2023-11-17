import React from 'react'

const ImageCircle = ({src,size}) => {
  return (
    <img className="shadow-lg border border-3 border-white rounded-circle" style={{
        width:`${size}rem`,
        height:`${size}rem`
    }} src={src} alt="imgCircle"/>
  )
}

export default ImageCircle