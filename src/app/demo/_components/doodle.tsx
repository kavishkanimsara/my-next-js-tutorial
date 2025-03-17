"use client"
import React, { useState } from 'react';

// Hand-drawn Card Component
const DoodleCard: React.FC<{ title: string; children: React.ReactNode }> = ({ 
  title, 
  children 
}) => {
  return (
    <div className="relative p-6 mx-auto my-4 max-w-md ">
      {/* Doodle background with wobble effect */}
      <div className="absolute inset-0 bg-pink-100 rounded-2xl transform rotate-1" style={{
        boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
        border: '2px solid #333',
      }}></div>
      <div className="absolute inset-0 bg-yellow-100 rounded-2xl transform -rotate-1" style={{
        boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
        border: '2px solid #333',
      }}></div>
      
      {/* Content container */}
      <div className="relative p-6 bg-blue-50 rounded-xl transform rotate-0" style={{
        border: '3px solid #333',
        boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
      }}>
        {/* Squiggly title */}
        <h2 className="mb-4 text-2xl font-bold text-center font-poppins" style={{
          color: '#6366F1',
          textShadow: '1px 1px 0 #FFF',
        }}>
          {title}
          <div className="mx-auto mt-1 h-2" style={{
            background: "url(\"data:image/svg+xml,%3Csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 C20,2 30,8 50,5 C70,2 80,8 100,5' stroke='%236366F1' fill='none' stroke-width='2' /%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat-x',
            backgroundSize: '100px 10px',
          }}></div>
        </h2>
        
        {/* Card content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

// Hand-drawn Button Component
export const DoodleButton: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'pink' | 'purple';
}> = ({ onClick, children, color = 'blue' }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const colorStyles = {
    blue: 'bg-blue-200 hover:bg-blue-300 border-blue-500',
    green: 'bg-green-200 hover:bg-green-300 border-green-500',
    pink: 'bg-pink-200 hover:bg-pink-300 border-pink-500',
    purple: 'bg-purple-200 hover:bg-purple-300 border-purple-500',
  };
  
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={` font-poppins text-black relative px-6 py-2 mx-2 my-3 font-bold text-lg rounded-lg transition-transform ${colorStyles[color]} transform ${isPressed ? 'translate-y-1' : ''}`}
      style={{
        border: '2px solid #333',
        boxShadow: isPressed ? '2px 2px 0 #333' : '4px 4px 0 #333',
        transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
      }}
    >
      {children}
    </button>
  );
};

// Hand-drawn Text Field Component
const DoodleTextField: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}> = ({ value, onChange, placeholder, label }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-black font-poppins mb-2 text-lg font-bold" style={{ 
          color: '#6366F1'
        }}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-yellow-50 rounded-lg focus:outline-none font-poppins text-sm"
          style={{
            border: '3px solid #333',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.15)',
          }}
        />
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-200 rounded-full" style={{ border: '1px solid #333' }}></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-200 rounded-full" style={{ border: '1px solid #333' }}></div>
      </div>
    </div>
  );
};

// Demo Component showing all elements together
export const DoodleUI: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
  
    return (
        <div className=' relative z-20 flex flex-col justify-center items-center h-full mt-12'>
        <DoodleCard title="Select Target Phonemes">
          <p className="mb-4 text-lg font-semibold text-gray-600 font-poppins">
          Choose the phonics sounds you want to reinforce 
          </p>
          
          <DoodleTextField 
            value={inputValue} 
            onChange={setInputValue} 
            placeholder="Type something..." 
          />
          
          <div className="flex flex-wrap justify-center">
            <DoodleButton color="green">Continue</DoodleButton>
          </div>
          
          {inputValue && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg" style={{ 
              border: '2px dashed #333',
              fontFamily: 'Comic Sans MS, cursive, sans-serif' 
            }}>
              <p>You typed: {inputValue}</p>
            </div>
          )}
        </DoodleCard>
    </div>
  );
};

export default DoodleUI;