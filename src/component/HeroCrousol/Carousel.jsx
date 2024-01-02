import React, { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="carousel relative w-screen bg-neutral-300 h-4/5 bottom-1">
      <button
        className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full h-12 w-12 "
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <img
        className="h-96 w-screen object-contain p-2"
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      <button
        className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full h-12 w-12 mr-24"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
