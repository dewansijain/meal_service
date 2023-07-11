
import './App.css';
import { FiMail } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";

function App() {

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className='bg-red-700 flex flex-col md:flex-row justify-end items-center gap-10 text-white text-center px-20 py-2'>
        <div className="flex flex-row justify-between items-center">
            <a className="flex flex-row gap-2 justify-between items-center" href="mailto:info@momimeals.com" target='_blank' rel="noreferrer">
            <FiMail className="text-2xl hover:scale-105" />
              info@momimeals.com
            </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
            <a className="flex flex-row gap-2 justify-between items-center" href="tel:+91-6201567901" target='_blank' rel="noreferrer">
            <BsTelephoneFill className="text-xl hover:scale-105" />
              +91-6201567901
            </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-20 py-4 shadow-md">
        <h1 className="text-4xl font-bold text-red-700">momimeals</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <button className="text-black text-xl py-2 active">Home</button>
          <button className="text-black text-xl py-2">Menu & Pricing</button>
          <button className="text-black text-xl py-2">How we work?</button>
          <button className="text-black text-xl py-2">Why us?</button>
          <button className="text-black text-xl py-2">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default App;