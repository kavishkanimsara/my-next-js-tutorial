"use client";

import React from 'react';
import { motion, AnimatePresence } from "motion/react";

type DoodleCardProps = {
  title: string;
  children: React.ReactNode;
  isVisible?: boolean;
  index?: number;
};

const AnimatedDoodleCard: React.FC<DoodleCardProps> = ({
  title,
  children,
  isVisible = true,
  index = 0
}) => {
  // Random rotation effect similar to testimonials
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: randomRotateY(),
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -20, 0]
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            rotate: randomRotateY(),
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="relative p-6 mx-auto my-4 max-w-xl origin-bottom"
        >
          {/* Doodle background with wobble effect */}
          <motion.div 
            className="absolute inset-0 bg-pink-100 rounded-2xl transform rotate-1" 
            style={{
              boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
              border: '2px solid #333',
            }}
            animate={{
              rotate: [1, 2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-yellow-100 rounded-2xl transform -rotate-1" 
            style={{
              boxShadow: '3px 3px 0 rgba(0,0,0,0.1)',
              border: '2px solid #333',
            }}
            animate={{
              rotate: [-1, -2, -1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          {/* Content container */}
          <div className="relative p-8 bg-gradient-to-b from-purple-50 to-[#E6CCFF] rounded-xl transform rotate-0" style={{
            border: '3px solid #333',
            boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
          }}>
            {/* Squiggly title with animated words */}
            <h2 className="mb-4 font-semibold text-5xl tracking-tight text-center font-nunito" style={{
              color: '#6366F1',
              textShadow: '1px 1px 0 #D4C9EB',
              lineHeight: '1.0',
            }}>
              {title.split(" ").map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.1 + (0.05 * idx),
                  }}
                  className="inline-block"
                >
                  {word}{" "}
                </motion.span>
              ))}
              <motion.div 
                className="mx-auto mt-1.5 h-2" 
                style={{
                  background: "url(\"data:image/svg+xml,%3Csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,5 C20,2 30,8 50,5 C70,2 80,8 100,5' stroke='%236366F1' fill='none' stroke-width='2' /%3E%3C/svg%3E\")",
                  backgroundRepeat: 'repeat-x',
                  backgroundSize: '100px 10px',
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "100px 0px"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </h2>
            
            {/* Card content with fade-in effect */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedDoodleCard;