import React from 'react'
import image_1 from '../assets/call.png'
import image_2 from '../assets/email.png'
import image_3 from '../assets/whatsapp.png'

export default function Contact() {
  return (
    <div className="px-5 flex py-20 lg:py-32 lg:px-20 bg-white flex-col gap-12 lg:gap-16 items-center justify-center" id='contact'>
      <h2 className='text-red-700 text-3xl lg:text-5xl font-black text-center'>
      GET IN TOUCH
      </h2>
      <div className='flex flex-col lg:flex-row gap-10 w-full items-center justify-center'>
        <a href='https://wa.me/message/C4VSUMVP2AIZC1' rel="noreferrer" target='_blank' className="flex hover:scale-105 active:scale-95 flex-col flex-1 gap-10 items-center justify-center">
        <div className='flex flex-col flex-1 gap-6 lg:gap-10 items-center justify-center'>
          <img src={image_3} alt="call" className=' w-24 h-auto lg:w-auto lg:h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-2 px-4 lg:p-4 lg:px-6 rounded-full shadow-lg drop-shadow-md'>+91-8340596082</p>
        </div>
        </a>
       <a href='mailto:info@momimeals.com' rel="noreferrer" target='_blank' className="flex hover:scale-105 active:scale-95 flex-col flex-1 gap-10 items-center justify-center">
       <div className='flex flex-col flex-1 gap-6 lg:gap-10 items-center justify-center'>
          <img src={image_2} alt="call" className=' w-24 h-auto lg:w-auto lg:h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-2 px-4 lg:p-4 lg:px-6 rounded-full shadow-lg drop-shadow-md'>info@momimeals.com</p>
        </div>
        </a>
        <a href='tel:+918340596082' rel="noreferrer" target='_blank' className="flex hover:scale-105 active:scale-95 flex-col flex-1 gap-10 items-center justify-center">
        <div className='flex flex-col flex-1 gap-6 lg:gap-10 items-center justify-center'>
          <img src={image_1} alt="call" className=' w-24 h-auto lg:w-auto lg:h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-2 px-4 lg:p-4 lg:px-6 rounded-full shadow-lg drop-shadow-md'>+91-8340596082</p>
        </div>
        </a>
        </div>

    </div>
  )
}
