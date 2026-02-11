import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ImageSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
    {images.map((image, index) => (
      <div key={index}>
        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
  
        {/* Text overlay */}
        {index === currentImageIndex && (
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-lg">
            <p className="text-lg sm:text-3xl text-white text-center">{image.text}</p>
          </div>
        )}
      </div>
    ))}
  
    {/* Navigation Arrows */}
    <div className="absolute inset-0 flex items-center justify-between p-4">
      <button
        onClick={goToPrevImage}
        className="p-2 rounded-full bg-white/50 backdrop-blur text-gray-800 hover:bg-white/75 transition"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNextImage}
        className="p-2 rounded-full bg-white/50 backdrop-blur text-gray-800 hover:bg-white/75 transition"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  
    {/* Dots */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
  );
};

export default ImageSlideshow;
