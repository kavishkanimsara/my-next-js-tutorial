"use client";

import React, { useState, useEffect } from 'react';
import AnimatedDoodleCard from '../_components/animated-doodle';


// Sample data for the cards
const cardData = [
  {
    id: 1,
    title: "Welcome to My Site",
    content: "This is a fun, animated card that brings personality to your website!"
  },
  {
    id: 2,
    title: "About Me",
    content: "I'm a developer who loves creating playful UI components."
  },
  {
    id: 3,
    title: "My Projects",
    content: "Check out my portfolio of creative web experiences."
  }
];

const DoodleCardCarousel: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Function to move to the next card
  const handleNext = () => {
    setActiveCardIndex((prev) => (prev + 1) % cardData.length);
  };

  // Function to move to the previous card
  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

  return (
    <div className="relative flex flex-col items-center py-12">
      {/* Cards container */}
      <div className="relative h-80 w-full max-w-2xl">
        {/* Map through cards and render each one */}
        {cardData.map((card, index) => (
          <AnimatedDoodleCard
            key={card.id}
            title={card.title}
            isVisible={index === activeCardIndex}
            index={index}
          >
            <p className="text-lg text-gray-700">{card.content}</p>
            <button className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
              Learn More
            </button>
          </AnimatedDoodleCard>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg 
            className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Dots for indicating which card is active */}
        <div className="flex gap-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === activeCardIndex ? 'bg-purple-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg 
            className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Autoplay toggle */}
      <button 
        onClick={() => setAutoPlay(!autoPlay)}
        className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          autoPlay ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
        }`}
      >
        {autoPlay ? 'Autoplay: On' : 'Autoplay: Off'}
      </button>
    </div>
  );
};

export default DoodleCardCarousel;