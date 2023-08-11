import { Route, Routes } from 'react-router-dom';
import './App.css';
import Site from './Pages/Site';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <div className="flex justify-center items-center h-screen">
            <h1 className=" text-2xl text-transparent bg-clip-text font-bold md:text-4xl text-center bg-gradient-to-r from-red-700 via-yellow-500 to-green-700 bg-300% animate-gradient">Site is under construction. We will be back soon!</h1>
          </div>
        } />
        <Route path="/dewanshi-jain-custom" element={<Site />} />
      </Routes>
    </div>
  );
}

export default App;
