"use client"
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Subtitle = () => {
  const subtitleRef = useRef(null);
  const leftBracketRef = useRef(null);
  const rightBracketRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(subtitleRef.current, {
      opacity: 1, // Override the CSS opacity-0 since we'll control visibility
      visibility: 'hidden'
    });
    
    gsap.set([leftBracketRef.current, rightBracketRef.current], {
      xPercent: (i) => (i === 0 ? 100 : -100)
    });
    
    gsap.set(textRef.current, {
      clipPath: 'inset(0 100% 0 0)'
    });

    // Animation timeline
    tl.to(subtitleRef.current, {
      visibility: 'visible',
      duration: 0.5 
    })
    .to(subtitleRef.current, {
      opacity: 1,
      duration: 0.8
    })
    .to([leftBracketRef.current, rightBracketRef.current], {
      xPercent: 0,
      duration: 2,
      ease: 'power3.out'
    }, '<')
    .to(textRef.current, {
      clipPath: 'inset(0 0% 0 0)',
      duration: 2,
      ease: 'power3.out'
    }, '<');

  }, []);

  return (
    <div ref={subtitleRef} className='subtitle relative z-20 mt-8 flex items-center justify-center gap-4 opacity-0'>
      <svg
        ref={leftBracketRef}
        className='h-16 w-6 text-yellow-200'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 27 78'
      >
        <path
          fill='#FFFCE1'
          d='M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z'
        />
      </svg>
      <p ref={textRef} className='text-lg font-medium text-yellow-200'>
        Effortlessly generate phonics stories kids love and take you 120 seconds to make!
      </p>
      <svg
        ref={rightBracketRef}
        className='h-16 w-6 rotate-180 text-yellow-200'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 27 78'
      >
        <path
          fill='#FFFCE1'
          d='M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z'
        />
      </svg>
    </div>
  );
};

export default Subtitle;