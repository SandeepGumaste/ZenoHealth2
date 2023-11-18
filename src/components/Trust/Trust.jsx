import React from 'react'
import TrustCard from './TrustCard'
import DownloadAppCard from './DownloadAppCard'

const trustCardsData=[
  {
    icon:"bi bi-chat-left-heart-fill",
    heading:"24x7 Help",
    content:"If we fall short of your expectation in any way, let us know"
  },
  {
    icon:"bi bi-currency-rupee",
    heading:"Payment Trust",
    content:"All refunds come with no questions asked guarantee"
  }
]

const Trust = () => {
  return (
    <section className='bg-light'>
      <div className='container'>
        <div className='row gap-4 px-3 px-md-0'>
        {
          trustCardsData.map((data)=>
            <TrustCard data={data}/>
          )
        }
        <DownloadAppCard/>
      </div>
      </div>
    </section>
  )
}

export default Trust