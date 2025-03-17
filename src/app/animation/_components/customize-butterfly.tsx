"use client"
import React from 'react';

const AdjustableButterfly = ({ 
  size = 100, 
  primaryColor = "#ffeb3b", 
  secondaryColor = "#fbc02d",
  bodyColor = "#795548",
  id = "butterfly",
  className = ""
}) => {
  // Scale all dimensions based on size prop
  const scale = size / 40; // Original butterfly was roughly 40 units wide
  
  return (
    <g
      id={id}
      className={className}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    >
      <defs>
        <linearGradient id={`wingGradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="1" />
        </linearGradient>
      </defs>
      
      {/* Enhanced Left Wing */}
      <path 
        d={`M${20*scale} ${0*scale} 
           Q${40*scale} ${20*scale} ${30*scale} ${40*scale} 
           Q${15*scale} ${30*scale} ${10*scale} ${40*scale}
           Q${0*scale} ${25*scale} ${10*scale} ${10*scale}
           Q${15*scale} ${0*scale} ${20*scale} ${0*scale}`} 
        fill={`url(#wingGradient-${id})`}
      />
      
      {/* Enhanced Right Wing */}
      <path 
        d={`M${20*scale} ${0*scale} 
           Q${40*scale} ${20*scale} ${30*scale} ${40*scale} 
           Q${15*scale} ${30*scale} ${10*scale} ${40*scale}
           Q${0*scale} ${25*scale} ${10*scale} ${10*scale}
           Q${15*scale} ${0*scale} ${20*scale} ${0*scale}`} 
        fill={`url(#wingGradient-${id})`}
        transform={`scale(-1 1) translate(-${40*scale} 0)`}
      />
      
      {/* Enhanced Body */}
      <path 
        d={`M${18*scale} ${5*scale} 
           C${20*scale} ${10*scale} ${22*scale} ${10*scale} ${22*scale} ${5*scale} 
           L${21*scale} ${50*scale} 
           L${19*scale} ${50*scale} 
           L${18*scale} ${5*scale}`} 
        fill={bodyColor}
      />
      
      {/* Antennae */}
      <path 
        d={`M${18*scale} ${5*scale} 
           Q${10*scale} ${-5*scale} ${5*scale} ${-10*scale}`} 
        stroke={bodyColor} 
        strokeWidth={scale} 
        fill="none"
      />
      <path 
        d={`M${22*scale} ${5*scale} 
           Q${30*scale} ${-5*scale} ${35*scale} ${-10*scale}`} 
        stroke={bodyColor} 
        strokeWidth={scale} 
        fill="none"
      />
      
      {/* Small dots at antenna tips */}
      <circle cx={`${5*scale}`} cy={`${-10*scale}`} r={`${scale}`} fill={bodyColor} />
      <circle cx={`${35*scale}`} cy={`${-10*scale}`} r={`${scale}`} fill={bodyColor} />
    </g>
  );
};

export default AdjustableButterfly;

// Example usage:
// <svg viewBox="0 0 400 400">
//   <AdjustableButterfly 
//     size={150} 
//     primaryColor="#ff9800" 
//     secondaryColor="#e65100" 
//     id="myButterfly" 
//   />
// </svg>