// animated-testimonials.tsx - Client Component
"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import DoodleUI from "./doodle-UI";

interface Testimonial {
  title: string;
  subtitle: string;
  bgColor: string;
  inputValue?: string;
  buttonColor?: "blue" | "green" | "pink" | "purple";
  onContinueAction?: string;
  src?: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [inputValues, setInputValues] = useState<string[]>(
    testimonials.map((t) => t.inputValue || "")
  );

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto py-20 font-sans antialiased">
      <div className="relative grid grid-cols-1">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <DoodleUI
                    title={testimonial.title}
                    subtitle={testimonial.subtitle}
                    bgColor={testimonial.bgColor}
                    buttonColor={testimonial.buttonColor}
                    inputValue={inputValues[index]}
                    onInputChange={(value) => handleInputChange(index, value)}
                    onContinueAction={handleNext}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
