// DoodleUI.tsx - Client Component
"use client"
import React, { useState } from 'react';
import { DoodleButton, DoodleCard, DoodleTextField } from './doodle';

interface DoodleUIProps {
  title: string;
  subtitle: string;
  bgColor: string;
  buttonColor?: 'blue' | 'green' | 'pink' | 'purple';
  inputValue?: string;
  children?: React.ReactNode;
  onInputChange?: (value: string) => void;
  onContinueAction?: () => void;
}

export const DoodleUI: React.FC<DoodleUIProps> = ({
  title,
  subtitle,
  children,
  bgColor,
  inputValue: externalInputValue,
  buttonColor,
  onInputChange,
  onContinueAction
}) => {
  const [internalInputValue, setInternalInputValue] = useState('');
  
  // Use external state if provided, otherwise use internal state
  const value = externalInputValue !== undefined ? externalInputValue : internalInputValue;
  
  const handleInputChange = (newValue: string) => {
    if (onInputChange) {
      onInputChange(newValue);
    } else {
      setInternalInputValue(newValue);
    }
  };
  
  return (
    <div className='relative z-20 flex flex-col justify-center items-center h-full mt-12'>
      <DoodleCard color={buttonColor} title={title} bgColor={bgColor}>
        <p className="mb-4 text-2xl font-semibold text-gray-800 font-comicNeue">
          {subtitle}
        </p>
        {children}
        <div className="flex flex-wrap justify-center">
          <DoodleButton onClick={onContinueAction} color={buttonColor}>Continue</DoodleButton>
        </div>
      </DoodleCard>
    </div>
  );
};

export default DoodleUI;