"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";


const RollingText = () => {
    useEffect(() => {
      document.querySelectorAll(".text-roll, .text-roll-down").forEach((el) => {
        const text = el.textContent;
        if (text) {
          el.innerHTML = text.split("").map(char => `<span class='inline-block'>${char}</span>`).join("");
        }
        
        gsap.to(el.querySelectorAll("span"), {
          rotationX: 360,
          duration: 1,
          repeat: 0,
          ease: "power1.inOut",
          stagger: 0.1
        });
      });
    }, []);
  

  return (
    <div className="flex flex-col items-center gap-4 p-6 text-white">
      <span className="text-7xl font-semibold text-roll">Rolling Up Text</span>
    </div>
  );
};

export default RollingText;