import {useEffect, useRef, useState, useMemo} from 'react';
import './App.css';

function App() {
  const element = useRef();
  const isVisible = useIsInViewport(element);
  console.log(isVisible);

  return (
    <div className="App">
      <div className='h-screen bg-gray-500'/>
      <div className='h-screen bg-green-400'ref={element}/>
    </div>
  );
}

export default App;

function useIsInViewport(ref, time) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.5,
    });
  }, []);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [ref, observer]);

  useEffect(() => {
    if (isVisible && isFirstTime) {
      setIsFirstTime(false);
    }
  }
  , [isVisible, isFirstTime]);
  
}
