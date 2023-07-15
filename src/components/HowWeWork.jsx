import React from 'react'
import image_2 from '../assets/how-we-work-2.png'
import style from './HowWeWork.module.css'

export default function HowWeWork() {
  return (
    <div className="px-5 flex py-24 lg:px-20 bg-white flex-col gap-12 items-center justify-center" id='work'>
      <div className="flex flex-col gap-5 flex-1 w-7/12 self-center">
        <h2 className='text-red-700 text-4xl font-bold text-center'>
          Easily Preplan and Order Your Favourite Meals with Our Simple Ordering Process!
        </h2>
        <h3 className='text-2xl font-medium self-center'>
          Let's follow these simple steps to understand our ordering process-
        </h3>
      </div>
      <div className="flex flex-row gap-3 flex-1">
        <div className={`flex flex-col items-center justify-center w-60 h-60 gap-5 ${style.image1}`}>
          <p className='text-center text-sm p-8'>
            Click on the "<span className='text-red-700 font-semibold '>Order Now</span>" button, and you will be redirected to WhatsApp.
          </p>
        </div>
        <img src={image_2} alt="how-we-work" className="w-24 h-full self-center" />
        <div className={`flex flex-col items-center justify-center w-60 h-60 gap-5 ${style.image1}`}>
          <p className='text-center text-sm p-8'>
          Tell the <span className='text-red-700 font-semibold '>plan</span> you want to opt to us on WhatsApp.
          </p>
        </div>
        <img src={image_2} alt="how-we-work" className="w-24 h-full self-center" />
        <div className={`flex flex-col items-center justify-center w-60 h-60 gap-5 ${style.image1}`}>
          <p className='text-center text-sm p-8'>
          <span className='text-red-700 font-semibold '>Make the payment</span> by your preferred mode.
          </p>
        </div>
        <img src={image_2} alt="how-we-work" className="w-24 h-full self-center" />
        <div className={`flex flex-col items-center justify-center w-60 h-60 gap-5 ${style.image1}`}>
          <p className='text-center text-sm p-8'>
          <span className='text-red-700 font-semibold '>Choose your favourite meals </span> rom our menu and enjoy.
          </p>
        </div>
      </div>
      <button className="bg-red-700 text-white px-12 py-4 text-3xl font-bold self-center rounded-full">Order Now</button>
    </div>
  )
}
