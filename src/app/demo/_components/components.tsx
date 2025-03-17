"use client"
import styled from 'styled-components';

// ===== Base Hand-Drawn Styles =====
const sketchyFilter = `
  filter: url(#sketchy); // Apply SVG filter for hand-drawn effect
  border: 2px dashed #{props => props.color};
  border-radius: 8px;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
`;

// SVG filter for rough edges (add to root component)
export const SketchFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter id="sketchy">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
  </svg>
);

// ===== Components =====
interface PastelCardProps {
  bg?: string;
}

export const PastelCard = styled.div<PastelCardProps>`
  ${sketchyFilter}
  background: ${props => props.bg || '#f8f0fb'};
  padding: 1.5rem;
  margin: 1rem;
  font-family: 'Gochi Hand', cursive;
  color: #6b5b95;
`;

interface PastelButtonProps {
  bg?: string;
}

export const PastelButton = styled.button<PastelButtonProps>`
  ${sketchyFilter}
  background: ${props => props.bg || '#b8e0d4'};
  color: #5a4e6b;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    background: #a1d0c7;
    transform: rotate(-2deg);
  }
`;

export const PastelInput = styled.input`
  ${sketchyFilter}
  background: #fff9f9;
  padding: 0.8rem;
  margin: 0.5rem;
  font-family: 'Gochi Hand', cursive;
  min-width: 200px;

  &::placeholder {
    color: #c0b3d8;
  }
`;

const pastelPalette = {
    lavender: '#f8f0fb',
    mint: '#b8e0d4',
    peach: '#ffd1dc',
    lilac: '#e0bbff',
    parchment: '#fff9f9'
  };

// ===== Usage Example =====
export const DemoComponents = () => (
  <>
    <SketchFilter />
    <PastelCard bg="#f5f0ff">
      <h2>Welcome to Fairyland! 🧚</h2>
      <PastelInput placeholder="Magic words..." />
      <PastelButton bg={pastelPalette.mint}>Cast Spell</PastelButton>
      <PastelButton bg="#e0bbff">Make Rainbows</PastelButton>
    </PastelCard>
  </>
);