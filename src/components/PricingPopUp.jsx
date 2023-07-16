import React from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function PricingPopUp({ assignData, setPopupVisible }) {
  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
  }
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      duration={0.5}
      transition={{ type: 'spring', stiffness: 100 }}
    className='flex flex-col gap-5 items-center justify-center fixed top-0 left-0 w-full h-screen z-50 backdrop-blur-md'>
      <div className='flex relative flex-col gap-5 items-center h-screen w-screen justify-center bg-white/60 lg:bg-white/90 p-3 lg:p-10 lg:rounded-2xl'>
        <GiCrossMark className='absolute top-5 right-5 text-3xl text-red-700 cursor-pointer' onClick={() => setPopupVisible(false)} />
        <h1 className='text-2xl lg:text-5xl font-bold text-red-700'>{assignData.day}</h1>
        <div className='flex flex-col lg:flex-row gap-2 lg:gap-5 overflow-y-auto px-3'>
          <div className='flex flex-col flex-1 gap-5 bg-red-700 p-5 rounded-3xl'>
            <h2 className=' text-lg lg:text-2xl text-center font-semibold text-white'>Lunch</h2>
            <div className='flex flex-col gap-2 flex-1 justify-between'>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 1</p>
                <p className='text-md lg:text-lg text-white'>{assignData.lunch.option1}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 2</p>
                <p className='text-md lg:text-lg text-white'>{assignData.lunch.option2}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 3</p>
                <p className='text-md lg:text-lg text-white'>{assignData.lunch.option3}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 4</p>
                <p className='text-md lg:text-lg text-white'>{assignData.lunch.option4}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col flex-1 gap-5 bg-red-700 p-5 rounded-3xl'>
            <h2 className=' text-lg lg:text-2xl text-center font-semibold text-white'>Dinner</h2>
            <div className='flex flex-col gap-2 flex-1 justify-between'>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 1</p>
                <p className='text-md lg:text-lg text-white'>{assignData.dinner.option1}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 2</p>
                <p className='text-md lg:text-lg text-white'>{assignData.dinner.option2}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 3</p>
                <p className='text-md lg:text-lg text-white'>{assignData.dinner.option3}</p>
              </div>
              <div className='flex flex-col gap-0.5 lg:gap-2 border-b-2 pb-2 border-neutral-400 border-dashed'>
                <p className='text-md lg:text-lg font-bold text-white'>Option 4</p>
                <p className='text-md lg:text-lg text-white'>{assignData.dinner.option4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
