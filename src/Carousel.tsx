import './App.css';
import './Carousel.css';
import React, { useEffect, useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  id: string;
}

interface Images {
  data: ImageData[];
  reference:any;
}

const Carousel: React.FC<Images> = ({ data,reference }) => {
  const [indx, setIndx] = useState(0);

  
  const goToNext = () => {
    setTimeout(() => {
      setIndx((prev) => (prev === data.length - 1 ? 0 : prev + 1)); 
      reference.current.className = "carousel-image come";
    }, 1000);
    reference.current.className = "carousel-image go-away-left";
  };

  
  const goToPrevious = () => {
    setTimeout(() => {
      setIndx((prev) => (prev === 0 ? data.length - 1 : prev - 1)); 
    }, 2000);
  };

  return (
    <div className="carousel">
      <div className="content">
        <button className="prev btn" onClick={goToPrevious}>
          {"<"}
        </button>
        <div className="carousel-images" >

          <img ref = {reference} className="carousel-image" src={data[indx]["src"]}  />

        </div>
        <button className="next btn" onClick={goToNext}>
          {">"}
        </button>
      </div>
      <div className="display">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndx(i)}
            className={i === indx ? "focus btn" : "btn"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
