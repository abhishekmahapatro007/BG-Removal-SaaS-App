import React from 'react'
import { testimonialsData } from '../assets/assets'
import quote from "/quote.png"

const Testimonials = () => {
  return (
    <div>
      
    {/* TITLE */}
    <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900
    to-gray-400 bg-clip-text text-transparent py-5'>
        Customer Testimonials
    </h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-20 max-w-4xl mx-auto px-4 py-8 mb-10'>
        {testimonialsData.map((item,index) => (
            <div className='bg-white rounded-xl p-6 drop-shadow-2xl max-w-lg m-auto hover:scale-105 transition-all duration-700' 
                key={index}
            >
                {/* <p className='text-4xl text-gray-500'>&quot;</p> */}
                <img width={17} src={quote} alt="" />
                <p className='text-sm pt-2 font-medium'>{item.text}</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='w-14 rounded-full border border-gray-800 border-opacity-50' 
                    src={item.image} alt="" />
                    <div>
                        <p className='font-semibold'>{item.author}</p>
                        <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>

    </div>
  )
}

export default Testimonials
