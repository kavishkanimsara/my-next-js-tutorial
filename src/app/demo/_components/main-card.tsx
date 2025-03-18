"use client";

import { AnimatedTestimonials } from "./animated-testimonials";

export default function MainCard() {
  const usages = [
    {
      title: "1. Select Target Phonemes",
      subtitle: "Choose the phonics sounds you want to reinforce",
      bgColor: "bg-gradient-to-t from-purple-50 to-[#E6CCFF]",
      inputValue: "",
      buttonColor: "purple" as "purple",
      onContinueAction: "next-step",
    },
    {
      title: "2. Share Your Story Premise",
      subtitle: "Share your thoughts",
      bgColor: "bg-gradient-to-t from-blue-50 to-[#C6DFFF]",
      inputValue: "",
      buttonColor: "blue" as "blue",
      onContinueAction: "feedback-submitted",
    },
    {
      title: "3. Select Difficulty Level",
      subtitle: "Choose the reading level appropriate for your students",
      bgColor: "bg-gradient-to-t from-[#f0fdf4] to-[#dcfce7]",
      inputValue: "",
      onContinueAction: "survey-completed",
      buttonColor: "green" as "green",
    },
  ];
  return (
    <div>
      <AnimatedTestimonials testimonials={usages} />
    </div>
  );
}
