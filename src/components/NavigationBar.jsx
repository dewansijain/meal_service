import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { AnimatePresence, motion } from 'framer-motion';

export default function NavigationBar() {
  const [show, setShow] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState([{ name: 'Home', link: '#', active_status: true }, { name: 'Menu & Pricing', link: '#', active_status: false }, { name: 'How we work?', link: '#', active_status: false }, { name: 'Why us?', link: '#', active_status: false }, { name: 'Contact Us', link: '#', active_status: false }]);
  const handleHamburger = () => {
    setShow(!show);
  }

  const handleNavlinks = (index) => {
    let temp = [...menuItems];
    temp.forEach((item, i) => {
      if (i === index) {
        item.active_status = true;
      } else {
        item.active_status = false;
      }
    })
    setMenuItems(temp);
    setShow(false);
  }


  return (
    <div className='fixed top-0 right-0 left-0'>
      <div className='bg-red-700 flex flex-row justify-center md:justify-end items-center md:gap-10 gap-3 text-white text-center px-2 md:px-20 py-2'>
        <div className="flex flex-row justify-between items-center">
          <a className="flex flex-row gap-2 justify-between items-center text-sm md:text-lg" href="mailto:info@momimeals.com" target='_blank' rel="noreferrer">
            <FiMail className="md:text-2xl hover:scale-105" />
            info@momimeals.com
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a className="text-md flex flex-row gap-2 justify-between items-center text-sm md:text-lg" href="tel:+91-6201567901" target='_blank' rel="noreferrer">
            <BsTelephoneFill className="md:text-2xl hover:scale-105" />
            +91-6201567901
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-5 md:px-20 py-4 shadow-md">
        <h1 className="text-4xl font-bold text-red-700">momimeals</h1>
        <div className=" hidden md:flex flex-col md:flex-row gap-10 items-center">
          {menuItems.map((item, index) => (
            <button key={index} className={`text-black text-xl box-border py-2 ${item.active_status ? 'active' : ''} transition-all duration-200`} onClick={() => handleNavlinks(index)}>{item.name}</button>
          ))}
        </div>
        <div className="cursor-pointer md:hidden flex flex-col gap-1.5 items-center z-50 justify-center" onClick={handleHamburger}>
          <span className={`w-8 border-b-4 border-gray-600 rounded-sm transition-all duration-700 ${show ? 'transform rotate-45 translate-y-2.5' : ''}`} />
          <span className={`w-8 border-b-4 border-gray-600 rounded-sm transition-all duration-700 ${show ? 'opacity-0' : ''}`} />
          <span className={`w-8 border-b-4 border-gray-600 rounded-sm transition-all duration-700 ${show ? 'transform -rotate-45 -translate-y-2.5' : ''}`} />
        </div>
      </div>
      <AnimatePresence className="overflow-x-hidden">
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 items-center justify-center md:hidden fixed top-0 left-0 w-full h-screen bg-white z-20">
          {menuItems.map((item, index) => (
            <button key={index} className={`text-black text-xl box-border py-2 ${item.active_status ? 'active' : ''} transition-all duration-200`} onClick={() => handleNavlinks(index)}>{item.name}</button>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}
