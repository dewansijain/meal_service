import React from 'react'
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function NavigationBar() {
  const [show, setShow] = React.useState(false);
  const menuItems = [{ name: 'Home', link: 'home' }, { name: 'Menu & Pricing', link: 'menu' }, { name: 'How we work?', link: 'work' }, { name: 'Why us?', link: 'why_us' }, { name: 'Contact Us', link: 'contact' }];
  const handleHamburger = () => {
    setShow(!show);
  }

  return (
    <div className='fixed top-0 right-0 left-0 bg-white z-50'>
      <div className='bg-red-700 flex flex-row justify-center lg:justify-end items-center lg:gap-10 gap-3 text-white text-center px-2 lg:px-20 py-2'>
        <div className="flex flex-row justify-between items-center">
          <a className="flex flex-row gap-2 justify-between items-center text-sm lg:text-lg" href="mailto:info@momimeals.com" target='_blank' rel="noreferrer">
            <FiMail className="lg:text-2xl hover:scale-105" />
            info@momimeals.com
          </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <a className="text-md flex flex-row gap-2 justify-between items-center text-sm lg:text-lg" href="tel:+91-6201567901" target='_blank' rel="noreferrer">
            <BsTelephoneFill className="lg:text-2xl hover:scale-105" />
            +91-6201567901
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-5 lg:px-20 py-4 shadow-md">
        <h1 className="text-4xl font-bold text-red-700">momimeals</h1>
        <div className=" hidden lg:flex flex-col lg:flex-row gap-10 items-center">
          <Link activeClass='active' spy={true} to={menuItems[0].link} smooth={true} duration={1000} offset={-150} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[0].name}</Link>
          <Link activeClass='active' spy={true} to={menuItems[1].link} smooth={true} duration={1000} offset={-100} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[1].name}</Link>
          <Link activeClass='active' spy={true} to={menuItems[2].link} smooth={true} duration={1000} offset={-90} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[2].name}</Link>
          <Link activeClass='active' spy={true} to={menuItems[3].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[3].name}</Link>
          <Link activeClass='active' spy={true} to={menuItems[4].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[4].name}</Link>
        </div>
        <div className="cursor-pointer lg:hidden flex flex-col gap-1.5 items-center z-50 justify-center" onClick={handleHamburger}>
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
            className="flex flex-col gap-5 items-center justify-center lg:hidden fixed top-0 left-0 w-full h-screen  z-20 backdrop-blur-md">
            <Link to={menuItems[0].link} smooth={true} duration={1000} offset={-100} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[0].name}</Link>
            <Link to={menuItems[1].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[1].name}</Link>
            <Link to={menuItems[2].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[2].name}</Link>
            <Link to={menuItems[3].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[3].name}</Link>
            <Link to={menuItems[4].link} smooth={true} duration={1000} className="text-xl cursor-pointer hover:text-red-700 transition-all duration-700">{menuItems[4].name}</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
