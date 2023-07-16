import React from 'react'
import image_1 from '../assets/why_us_1.png'
import image_2 from '../assets/why_us_2.png'
import image_3 from '../assets/why_us_3.png'
import image_4 from '../assets/why_us_4.png'
import image_5 from '../assets/why_us_5.png'
import image_6 from '../assets/why_us_6.png'

export default function WhyUs() {
  return (
    <div className="px-5 flex py-12 lg:py-24 lg:px-20 bg-red-700 flex-col gap-6 lg:gap-12 items-center justify-center" id='why_us'>
      <h2 className='text-white text-4xl font-bold text-center'>
        Why Momimeals?
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 flex-1 justify-center items-stretch">
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_1} alt="why_us_1" className="w-10 h-12 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Our USP: Eat what you like!</h3>
          </div>
          <p className='text-black text-sm'>We understand how frustrating and monotonous it can be to eat the same meals every day, especially when they're not your favorites. That's why we're here to make a difference. At Momimeals, we offer a wide range of meal options to choose from. You have the freedom to select whatever meal you desire on any given day, ensuring that each day brings a delightful and satisfying experience.</p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_2} alt="why_us_1" className="w-10 h-10 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Use of Fresh Ingredients</h3>
          </div>
          <p className='text-black text-sm'>When we promise to deliver Mom's love to you, your health becomes our top priority. We source fresh and high-quality ingredients daily to prepare your meals. From vegetables to grains, from oil to spices, we ensure that your meal is made with the freshest ingredients available. We never use preservatives, pre-cooked gravies, or artificial colours. </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_3} alt="why_us_1" className="w-10 h-10 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Hygiene & Packaging</h3>
          </div>
          <p className='text-black text-sm'>We prioritize cleanliness and hygiene, taking rigorous safety measures to eliminate any risk of contamination. Our kitchen undergoes thorough cleaning and disinfection twice a day, complemented by regular pest-control treatments. When it comes to packaging, we use disposable, BPA-free, and microwave-friendly containers to ensure the highest standards of food safety.</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-6 flex-1 justify-center items-stretch">
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_4} alt="why_us_1" className="w-10 h-12 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Easy Ordering Process</h3>
          </div>
          <p className='text-black text-sm'>We believe in keeping things uncomplicated. With our straightforward 4-step ordering process, we personally connect with you via WhatsApp and provide step-by-step guidance. Your satisfaction is our priority from start to finish.</p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_5} alt="why_us_1" className="w-10 h-10 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Personalized Support </h3>
          </div>
          <p className='text-black text-sm'>We're with you every step of the way, from the very beginning and beyond. We value your feedback and actively incorporate your suggestions. To ensure your satisfaction, we periodically release menu request forms, giving you the opportunity to have your favorite dishes included in our menu. Your experience matters to us, and we're dedicated to making it truly delightful.</p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 flex-1 bg-white p-7 rounded-semi-full items-center">
          <div className="flex flex-row gap-1 lg:gap-5 justify-center w-full items-center">
            <img src={image_6} alt="why_us_1" className="w-10 h-10 rounded-lg" />
            <h3 className='font-bold text-red-700 text-xl lg:text-2xl flex-1 lg:text-center'>Timely Delivery</h3>
          </div>
          <p className='text-black text-sm'>We understand the importance of prompt service when it comes to satisfying your hunger. That's why we ensure your meals are delivered right to your doorstep on time. Our lunchtime delivery window is from 1 PM to 3 PM, and for dinner, it's from 7 PM to 9 PM. Say goodbye to hunger pangs and enjoy timely, hassle-free meal deliveries with Momimeals.</p>
        </div>
      </div>
    </div>
  )
}
