'use client';

import React, { useState, useRef, useEffect } from 'react';

interface DoodleSingleSelectDropdownProps {
  options: string[];
  selectedOption: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
}

export const DoodleSingleSelectDropdown: React.FC<DoodleSingleSelectDropdownProps> = ({
  options,
  selectedOption,
  onChange,
  placeholder = "Select an option...",
  label,
  errorMessage
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search
  useEffect(() => {
    setFilteredOptions(
      options.filter(option => 
        option.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, options]);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchValue('');
  };

  return (
    <div className="mb-6" ref={dropdownRef}>
      {label && (
        <label
          className="block font-poppins mb-2 text-lg font-bold"
          style={{
            color: "#6366F1",
          }}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {/* Main dropdown button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-yellow-50 rounded-lg font-comicNeue text-gray-900 text-lg font-medium cursor-pointer relative"
          style={{
            border: "3px solid #333",
            boxShadow: "3px 3px 0 rgba(0,0,0,0.15)",
            minHeight: "50px"
          }}
        >
          <div className="flex items-center">
            {selectedOption ? (
              <span>{selectedOption}</span>
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
          
          {/* Dropdown arrow */}
          <div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center"
            style={{ border: "2px solid #333" }}
          >
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="M2 4L6 8L10 4" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Decorative elements */}
          <div
            className="absolute -top-1 -right-1 w-3 h-3 bg-pink-200 rounded-full"
            style={{ border: "1px solid #333" }}
          ></div>
          <div
            className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-200 rounded-full"
            style={{ border: "1px solid #333" }}
          ></div>
        </div>
        
        {/* Dropdown menu */}
        {isOpen && (
          <div 
            className="absolute z-10 mt-2 w-full bg-yellow-50 rounded-lg py-2"
            style={{
              border: "3px solid #333",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.15)",
            }}
          >
            {/* Options list */}
            <div className="max-h-48 overflow-y-auto px-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center px-3 py-2 cursor-pointer hover:bg-indigo-50 rounded-md mx-2 my-1 ${selectedOption === option ? 'bg-indigo-100' : ''}`}
                    onClick={() => handleSelect(option)}
                    style={{
                      border: selectedOption === option ? "2px dashed #333" : "none",
                      position: "relative"
                    }}
                  >
                    <span className="font-comicNeue text-gray-900">{option}</span>
                    {selectedOption === option && (
                      <div className="absolute right-3 w-5 h-5 bg-indigo-300 rounded-full flex items-center justify-center"
                        style={{ border: "1px solid #333" }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6L5 9L10 3" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-3 font-comicNeue text-gray-500">No results found</div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-200 rounded-full"
              style={{ border: "1px solid #333" }}
            ></div>
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-200 rounded-full"
              style={{ border: "1px solid #333" }}
            ></div>
          </div>
        )}
      </div>
      
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500 font-comicNeue" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default DoodleSingleSelectDropdown;