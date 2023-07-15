import './App.css';
import Home from './components/Home';
import MenuPricing from './components/MenuPricing';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div className="mt-28">
      <NavigationBar />
      <Home />
      <MenuPricing />
    </div>
  );
}

export default App;
