import React, { useState, useRef, useEffect } from 'react';

interface DoodleSubmitFieldProps {
  value?: string;
  placeholder: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage?: string;
  loading?: boolean;
  minHeight?: number;
  maxHeight?: number;
  label?: string;
}

export const DoodleSubmitField: React.FC<DoodleSubmitFieldProps> = ({
  value = '',
  placeholder,
  onChangeInput,
  errorMessage = '',
  loading = false,
  minHeight = 52,
  maxHeight = 200,
  label
}) => {
  // Reference to the textarea element
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Store the full value internally
  const [fullValue, setFullValue] = useState(value);
  
  // Track focus state
  const [isFocused, setIsFocused] = useState(false);
  
  // Calculate the display value (limited to 25 characters with "..." when not focused)
  const displayValue = isFocused ? fullValue :
    (fullValue.length > 25 ? fullValue.substring(0, 25) + '...' : fullValue);
  
  // Update internal value when prop changes
  useEffect(() => {
    setFullValue(value);
  }, [value]);
  
  // Adjust the height of the textarea based on its content
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    // Reset the height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate the new height (bounded by min and max)
    const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
    
    // Set the new height
    textarea.style.height = `${newHeight}px`;
  };
  
  // Adjust height when the display value changes or focus state changes
  useEffect(() => {
    adjustHeight();
  }, [displayValue, isFocused]);
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update internal full value
    setFullValue(e.target.value);
    
    // Call the original onChange handler with the full value
    if (onChangeInput) {
      // Create a new event with the full value
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: e.target.value
        }
      } as React.ChangeEvent<HTMLTextAreaElement>;
      onChangeInput(newEvent);
    }
  };
  
  // Handle focus events
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="w-full">
      <div 
        className="w-full h-12 rounded-lg bg-yellow-100 animate-pulse"
        style={{
          border: "3px solid #333",
          boxShadow: "3px 3px 0 rgba(0,0,0,0.15)",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="h-2 w-2 bg-indigo-300 rounded-full mx-1 animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="h-2 w-2 bg-pink-300 rounded-full mx-1 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-2 w-2 bg-blue-300 rounded-full mx-1 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="mb-6">
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
      
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="flex flex-col gap-2">
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={displayValue}
              placeholder={placeholder}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows={1}
              style={{
                minHeight: `${minHeight}px`,
                maxHeight: `${maxHeight}px`,
                resize: 'none',
                overflow: fullValue.length > 100 ? 'auto' : 'hidden',
                border: "3px solid #333",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.15)",
              }}
              className="w-full px-4 py-3 bg-yellow-50 rounded-lg focus:outline-none font-comicNeue text-gray-900 text-lg"
            />
            
            {/* Decorative elements */}
            <div
              className="absolute -top-1 -right-1 w-3 h-3 bg-pink-200 rounded-full"
              style={{ border: "1px solid #333" }}
            ></div>
            <div
              className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-200 rounded-full"
              style={{ border: "1px solid #333" }}
            ></div>
            
            {/* Word counter - optional
            {fullValue.length > 0 && (
              <div 
                className="absolute bottom-1 right-2 px-2 py-0.5 text-xs textb bg-indigo-100 rounded-md"
                style={{ border: "1px solid #333" }}
              >
                {fullValue.length} chars
              </div>
            )} */}
          </div>
          
          {errorMessage && (
            <p 
              className="text-sm font-comicNeue mt-1"
              style={{ color: "#ef4444" }}
            >
              {errorMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DoodleSubmitField;