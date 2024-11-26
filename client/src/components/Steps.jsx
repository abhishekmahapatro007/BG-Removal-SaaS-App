import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900
            to-gray-400 bg-clip-text text-transparent'>
                Steps to remove background <br />image in seconds
            </h1>
            <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded
                hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9'
                     src={assets.upload_icon} alt="" />

                    <div>
                        <p className='text-xl font-medium'>Upload image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Quickly upload your image and 
                            <br />let our tool handle the rest.
                            <br />Fast, simple, and free—give it a try now!</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded
                hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9'
                     src={assets.remove_bg_icon} alt="" />

                    <div>
                        <p className='text-xl font-medium'>Remove background</p>
                        <p className='text-sm text-neutral-500 mt-1'>Instantly remove backgrounds <br />from any image.
                        Clean, precise<br />, and hassle-free!</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded
                hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9'
                     src={assets.download_icon} alt="" />

                    <div>
                        <p className='text-xl font-medium'>Download image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Download your image <br />with a clear background in <br />seconds.
                        High-quality results, ready to use!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Steps
