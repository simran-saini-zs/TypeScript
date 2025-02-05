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
  const [prevref,setRef] = useState<any>(null);
  
  const goToNext = () => {
    // setTimeout(() => {
    //   setIndx((prev) => (prev === data.length - 1 ? 0 : prev + 1)); 
    //   reference.current.className = "carousel-image go-away-right";
    // }, 1000);
    // setTimeout(() => {
    //   reference.current.className = "carousel-image come-rigth";
    // }, 3000);
    // prevref.current.calssName = "carousel-image go-away-right";
    // reference.current.className = "carousel-image come-rigth";
    setTimeout(() => {
      setIndx((prev) => (prev === data.length - 1 ? 0 : prev + 1)); 
      setRef(reference);
    }, 1000);
  };
  if(reference && prevref) console.log(reference.current,prevref.current);
  
  const goToPrevious = () => {
    setTimeout(() => {
      setIndx((prev) => (prev === 0 ? data.length - 1 : prev - 1)); 
      // reference.current.className = "carousel-image go-away-left";
    }, 1000);
    setTimeout(() => {
      // reference.current.className = "carousel-image come-left";
    }, 3000);
  };

  return (
    <div className="carousel">
      <div className="content">
        <button className="prev btn" onClick={goToPrevious}>
          {"<"}
        </button>
        <div className="carousel-images" >
          {/* <img src= {indx == 0? data[data.length-1]["src"]:data[indx-1]["src"]} className = "disabled"/> */}
          <img ref = {reference} className="carousel-image" src={data[indx]["src"]}  />
          {/* <img src= {indx == data.length-1?  data[0]["src"]:data[indx+1]["src"]}  className = "disabled"/> */}
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
