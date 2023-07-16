import React from 'react'
import image from '../assets/momimeals_website_1.png'

export default function Home() {
  return (
    <div className="px-5 py-10 lg:px-20" id='home'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-20'>
        <div className="flex flex-col gap-5 lg:gap-10 flex-1 order-2 lg:order-1">
          <h1 className=" text-3xl text-center lg:text-left lg:text-6xl font-bold text-red-700">Missing Mom's Food in the New City?</h1>
          <p className="text-xl text-center lg:text-left">Enjoy the comforting flavors of home with Momimeals.Get delicious, nutritious, and safe home-cooked food delivered right to your door, reminding you of the warmth and love of your Mom.</p>
          <a href='https://wa.me/+916201567901' rel="noreferrer" target='_blank' className="bg-red-700 hover:scale-105 active:scale-95 text-white px-10 py-2 text-2xl self-center lg:self-start rounded-full">Order Now</a>
        </div>
        <div className="flex flex-col flex-1 order-1 lg:order-2">
          <img src={image} alt="momimeals" className="w-full" />
        </div>
      </div>
    </div>
  )
}
