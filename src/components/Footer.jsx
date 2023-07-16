import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={style.bgImage}>
      <div className="px-5 flex pt-32 pb-28 lg:px-20 bg-stone-900/75 flex-col lg:flex-row gap-16 justify-between" >
        <div className='flex flex-col w-7/12 gap-10 items-center justify-center'>
          <h2 className='text-white text-left text-5xl font-black self-start'>
            The Story Behind Momimeals!
          </h2>
          <p className='text-white text-xl font-normal text-justify'>
            The story behind Momimeals is rooted in the heartfelt experiences of its founder, Dewanshi Jain. Being a big foodie herself, Dewanshi deeply missed the comforting taste of her mother's home-cooked meals when she ventured into a new city for her education. She realized that she was not alone in this predicament, as many others faced the challenges of finding healthy and affordable food options that could match the love and care put into a mother's cooking. Dissatisfied with the unappealing choices of restaurant food and tasteless mess meals, Dewanshi embarked on a mission to bring the essence of a mother's wholesome and flavorsome dishes to everyone's plate. With Momimeals, she created a unique proposition, offering delicious and nutritious food at affordable prices. This brand is a loving tribute to Dewanshi's cherished mother, ensuring that the joy and nourishment of home-cooked meals are accessible to all.
          </p>
        </div>
        <div className="px-5 flex flex-col gap-16 items-center" >
          <h2 className='text-white text-3xl w-full font-black'>
            Contact Us
          </h2>
          <div className='flex flex-col gap-2 justify-center'>
            <p className='text-white w-fit text-xl font-normal'>
              <strong>Phone:</strong> +91-6201567901
            </p>
            <p className='text-white text-xl font-normal'>
              <strong>Email:</strong> info@momimeals.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
