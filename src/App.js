import './App.css';
import Home from './components/Home';
import HowWeWOrk from './components/HowWeWork';
import MenuPricing from './components/MenuPricing';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div className="mt-28">
      <NavigationBar />
      <Home />
      <MenuPricing />
      <HowWeWOrk />
    </div>
  );
}

export default App;
