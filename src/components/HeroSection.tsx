"use client";

import React, { useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Our Blog",
      description:
        "Discover insightful articles on a wide range of topics including technology, lifestyle, health, and more.",
      backgroundImage: "url('https://i.pinimg.com/736x/51/c9/40/51c9408db2caca774a37ff2735de3b5e.jpg')",
    },
    {
      title: "Latest Trends and Updates",
      description:
        "Stay up-to-date with the latest trends in tech, fashion, and entertainment.",
      backgroundImage: "url('https://i.pinimg.com/736x/38/b4/94/38b494173290520379ee59a715210261.jpg')",
    },
    {
      title: "Inspiring Stories",
      description:
        "Read stories that inspire and motivate you to achieve your goals and dreams.",
      backgroundImage: "url('https://i.pinimg.com/736x/e3/de/19/e3de19b77478c2e5fa8c6104f776c6ca.jpg')",
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: slides[currentSlide].backgroundImage,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl">{slides[currentSlide].description}</p>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 flex justify-between px-4">
          <button
            onClick={goToPrevSlide}
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
