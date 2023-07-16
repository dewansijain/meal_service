import React from 'react'
import image_1 from '../assets/call.png'
import image_2 from '../assets/email.png'
import image_3 from '../assets/whatsapp.png'

export default function Contact() {
  return (
    <div className="px-5 flex py-32 lg:px-20 bg-white flex-col gap-16 items-center justify-center" id='contact'>
      <h2 className='text-red-700 text-5xl font-black text-center'>
      GET IN TOUCH
      </h2>
      <div className='flex flex-row gap-4 w-full items-center justify-center'>
        <div className='flex flex-col flex-1 gap-10 items-center justify-center'>
          <img src={image_3} alt="call" className='w-auto h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-4 px-6 rounded-full shadow-lg drop-shadow-md'>+91-6201567901</p>
        </div>
        <div className='flex flex-col flex-1 gap-10 items-center justify-center'>
          <img src={image_2} alt="call" className='w-auto h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-4 px-6 rounded-full shadow-lg drop-shadow-md'>info@momimeals.com</p>
        </div>
        <div className='flex flex-col flex-1 gap-10 items-center justify-center'>
          <img src={image_1} alt="call" className='w-auto h-52'/>
          <p className='text-xl font-normal bg-gray-300 p-4 px-6 rounded-full shadow-lg drop-shadow-md'>+91-6201567901</p>
        </div>
        </div>

    </div>
  )
}
