import React from 'react';
import './slider.css';

function Slider2() {
  return (
    <>
      <div className="slideshow">
        <div className="slideshow-image" style={{ backgroundImage: "url('./imgs/4.jpg')" }} />
        <div className="slideshow-image" style={{ backgroundImage: "url('./imgs/6.jpg')" }} />
        <div className="slideshow-image" style={{ backgroundImage: "url('./imgs/8.jpg')" }} />
        <div className="slideshow-image" style={{ backgroundImage: "url('./imgs/11.jpg')" }} />
      </div>
    </>
  );
}

export default Slider2;
