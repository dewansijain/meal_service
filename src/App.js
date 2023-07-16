import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import HowWeWOrk from './components/HowWeWork';
import MenuPricing from './components/MenuPricing';
import NavigationBar from './components/NavigationBar';
import WhyUs from './components/WhyUs';

function App() {

  return (
    <div className="mt-28">
      <NavigationBar />
      <Home />
      <MenuPricing />
      <HowWeWOrk />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
