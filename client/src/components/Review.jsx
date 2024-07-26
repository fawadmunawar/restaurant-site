import React from 'react'
import { REVIEW } from '../constants'
import xaviour from "../assets/xaviour.jpeg"

const Review = () => {
  return (
    <section className='container mx-auto mb-8 mt12 ' id='review'>
        <div className='flex flex-col'>
            <p className='mb-10 text-3xl font-light leading-none tracking-tighter lg:mx-40 lg:mt-40 lg:text[3.5rem]'>
                {REVIEW.content}
            </p>
            <div className='flex items-center justify-center gap-6'>
                <img src={xaviour} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Review