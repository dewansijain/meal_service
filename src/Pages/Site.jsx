import React from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Home from '../components/Home';
import HowWeWOrk from '../components/HowWeWork';
import MenuPricing from '../components/MenuPricing';
import NavigationBar from '../components/NavigationBar';
import WhyUs from '../components/WhyUs';

export default function Site() {
  return (
    <>
      <NavigationBar />
      <Home />
      <MenuPricing />
      <HowWeWOrk />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  )
}
