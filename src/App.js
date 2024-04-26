import './App.css';
import {useState} from 'react';

function App() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ]

  function handlePreviousClick(){
    setCurrent(current === 0 ? images.length - 1 : current - 1 )

  }

  function handleNextClick() {
    setCurrent(current === images.length - 1 ? 0 : current + 1 )
  }

  return (
    <>
      <div className="previousSlider" onClick={handlePreviousClick}>←</div>
        {
          images.map( (image, index) =>
            (current === index) && <img key={index} src={image} alt=""/>
            
          )
        }
      <div className="nextSlider" onClick={handleNextClick}>→</div>
      
    </>
  );
}

export default App;
