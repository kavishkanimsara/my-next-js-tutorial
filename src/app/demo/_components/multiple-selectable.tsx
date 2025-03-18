import React, { useState, useRef, useEffect } from 'react';

interface DoodleMultiSelectDropdownProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  label?: string;
}

export const DoodleMultiSelectDropdown: React.FC<DoodleMultiSelectDropdownProps> = ({
  options,
  selectedOptions,
  onChange,
  placeholder = "Select options...",
  label
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

  // Toggle option selection
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  // Remove selected option
  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selectedOptions.filter(item => item !== option));
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
          <div className="flex flex-wrap gap-2 items-center">
            {selectedOptions.length > 0 ? (
              selectedOptions.map(option => (
                <div 
                  key={option} 
                  className="bg-blue-100 rounded-md px-2 py-1 inline-flex items-center"
                  style={{
                    border: "2px solid #333",
                    boxShadow: "1px 1px 0 rgba(0,0,0,0.15)",
                  }}
                >
                  <span>{option}</span>
                  <button
                    type="button"
                    onClick={(e) => removeOption(option, e)}
                    className="ml-1 bg-pink-200 rounded-full w-5 h-5 flex items-center justify-center"
                    style={{ border: "1px solid #333" }}
                    aria-label={`Remove ${option}`}
                  >
                    ×
                  </button>
                </div>
              ))
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
            {/* Search input */}
            <div className="px-3 pb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search options..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full px-3 py-2 bg-white rounded-md font-comicNeue text-gray-900"
                  style={{
                    border: "2px solid #333",
                    boxShadow: "2px 2px 0 rgba(0,0,0,0.1)",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid #333" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#333" strokeWidth="2"/>
                    <path d="M16 16L21 21" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Options list */}
            <div className="max-h-48 overflow-y-auto px-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="flex items-center px-3 py-2 cursor-pointer hover:bg-indigo-50 rounded-md mx-2 my-1"
                    onClick={() => toggleOption(option)}
                    style={{border: selectedOptions.includes(option) ? "1px dashed #333" : "none"}}
                    role="checkbox"
                    aria-checked={selectedOptions.includes(option)}
                  >
                    <div 
                      className={`w-5 h-5 flex items-center justify-center rounded mr-2 ${selectedOptions.includes(option) ? 'bg-indigo-300' : 'bg-white'}`}
                      style={{ border: "2px solid #333" }}
                    >
                      {selectedOptions.includes(option) && (
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6L5 9L10 3" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="font-comicNeue text-gray-900">{option}</span>
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
    </div>
  );
};

export default DoodleMultiSelectDropdown;