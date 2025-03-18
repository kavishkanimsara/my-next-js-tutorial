"use client";
import { useState } from "react";
import { ButterflyBackground } from "../animation/_components/butter-fly";
import { DemoComponents } from "./_components/components";
import DoodleUI from "./_components/doodle-UI";
import DoodleMultiSelectDropdown from "./_components/multiple-selectable";
import DoodleSingleSelectDropdown from "./_components/single-selectable";
import DoodleSubmitField from "./_components/doodle-textfield";

export default function page() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const phonemes = [
    "IGH",
    "SH",
    "TH",
    "CH",
    "PH",
    "WH",
    "KH",
    "GH",
    "ZH",
    "DH",
    "NG",
    "OO",
    "EE",
    "AI",
    "OU",
    "OI",
    "AW",
    "AY",
    "ER",
    "AR",
  ];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const levels = ["Level 1", "Level 2", "Level 3"];
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      {/* <DoodleUI
        title="1. Select Target Phonemes"
        subtitle="Choose the phonics sounds you want to reinforce"
        bgColor="bg-gradient-to-t from-purple-50 to-[#E6CCFF]"
        buttonColor="purple"
        onContinueAction={() => console.log("Continue clicked")}
      >
        <DoodleMultiSelectDropdown
          options={phonemes}
          selectedOptions={selectedTags}
          onChange={setSelectedTags}
          placeholder="Select technologies..."
        />
      </DoodleUI> */}
      <DoodleUI
        title="3. Select Difficulty Level"
        subtitle="Choose the reading level appropriate for your students"
        bgColor="bg-gradient-to-t from-[#f0fdf4] to-[#dcfce7]"
        buttonColor="green"
        onContinueAction={() => console.log("Continue clicked")}
      >
        <DoodleSubmitField
          value={inputValue}
          placeholder="Type your message here..."
          onChangeInput={handleChange}
        />
      </DoodleUI>
      <ButterflyBackground />
    </div>
  );
}
