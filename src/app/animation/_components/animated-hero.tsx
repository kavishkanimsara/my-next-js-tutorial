'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GSAPHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const chars = 'Phonics Maker'.split('');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial logo animation
      gsap.from('.logo', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Main text animation with staggered reveal
      gsap.from('.char', {
        y: 120,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
        stagger: { amount: 0.8 },
        delay: 0.3,
      });

      /// Special animation for the letter 'i'
const iElement = document.querySelector('.char-i');
if (iElement) {
  // Ensure transform-origin is set to the center (middle of the letter)
  gsap.set(iElement, { transformOrigin: "center center" });

  // Wait for the initial reveal animation to complete
  gsap.delayedCall(1.5, () => {
    // Create a rolling animation that loops with a delay after each cycle
    gsap.to(iElement, {
      rotateX: 360,
      duration: 0.8,
      ease: 'power1.inOut',
      repeat: -1,       // Infinite repeat
      repeatDelay: 1.0,  // Delay of 0.5 seconds between each repeat
      yoyo: false,       // Ensure the animation does not reverse
      onComplete: () => {
        gsap.set(iElement, { rotateX: 0 }); // Reset rotation after each cycle
      }
    });
  });
}


      // Windmill flair animation - rotate in 90-degree increments
      gsap.to('.windmill-flair', {
        rotate: '+=90', // Always rotate to the right
        duration: 0.9,
        ease: 'power2.inOut', // Smooth easing
        repeat: -1, // Infinite repetition
        repeatDelay: 0.5, // 0.5-second delay after each rotation
        yoyo: false, // Do not go back and forth
      });

      // Star flair animation - bouncing effect
      gsap.to('.star-flair', {
        y: -15,
        duration: 0.8,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Circle flair animation
      gsap.to('.circle-flair', {
        scale: 1.1,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Subtitle reveal animation
      gsap.to('.subtitle', {
        opacity: 1,
        duration: 1,
        delay: 1.6,
      });

      // Button animation
      gsap.from('.cta-button', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 1.8,
      });

      // Button flair elements
      gsap.from('.btn-flair', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2)',
        stagger: 0.1,
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className='flex min-h-screen items-center justify-center overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        <div className='relative mx-auto max-w-4xl pt-20'>
          {/* Main heading with character-by-character animation */}
          <h1 className='text-center text-[7rem] font-bold leading-[0.9] text-[#fffce1]'>
            {chars.map((char, i) => {
              if (char === 'i') {
                return (
                  <span
                    key={i}
                    className='char char-i inline-block origin-bottom overflow-hidden'
                    style={{
                      opacity: 1,
                      visibility: 'inherit',
                      transform: 'translate3d(0px, 0px, 0px) rotateX(0deg)',
                    }}
                  >
                    <span className='inline-block will-change-transform'>
                      {char}
                    </span>
                  </span>
                );
              }
              return (
                <span key={i} className='char inline-block overflow-hidden'>
                  <span className='inline-block will-change-transform'>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              );
            })}
          </h1>

          {/* Decorative flair elements */}
          <div className='pointer-events-none absolute inset-0'>
            {/* Windmill flair */}
            <svg
              className='windmill-flair absolute -top-10 left-1/4 w-24 origin-center'
              viewBox='0 0 137 135'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z'
                fill='url(#windmill-gradient)'
              />
              <defs>
                <linearGradient
                  id='windmill-gradient'
                  x1='-76.6791'
                  y1='-15.6157'
                  x2='165.682'
                  y2='81.0082'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.427083' stopColor='#FF8709' />
                  <stop offset='0.791667' stopColor='#F7BDF8' />
                </linearGradient>
              </defs>
            </svg>

            {/* Star flair */}
            <svg
              className='star-flair absolute right-1/4 top-16 w-20'
              viewBox='0 0 157 156'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M82.2214 104.04L105.483 143.586C108.242 148.132 114.589 149.519 119.135 146.76C123.682 144.001 125.069 137.654 122.31 133.108L99.0479 93.5612L147.248 93.5612C152.319 93.5612 156.429 89.4508 156.429 84.3805C156.429 79.3102 152.319 75.1998 147.248 75.1998L99.048 75.1998L122.31 35.653C125.069 31.1068 123.682 24.7597 119.135 22.0007C114.589 19.2417 108.242 20.6285 105.483 25.1747L82.2214 64.7215L59.0075 25.2224C56.2485 20.6763 49.9014 19.2894 45.3552 22.0484C40.809 24.8074 39.4222 31.1546 42.1812 35.7007L65.3951 75.1998L17.1429 75.1998C12.0726 75.1998 7.96216 79.3102 7.96216 84.3805C7.96216 89.4508 12.0726 93.5612 17.1429 93.5612L65.3951 93.5612L42.1812 133.06C39.4222 137.607 40.809 143.954 45.3552 146.713C49.9014 149.472 56.2485 148.085 59.0075 143.539L82.2214 104.04Z'
                fill='url(#star-gradient)'
              />
              <defs>
                <radialGradient
                  id='star-gradient'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(124.192 87.08) rotate(149.757) scale(126.034)'
                >
                  <stop stopColor='#00FFFF' />
                  <stop offset='1' stopColor='#7000FF' />
                </radialGradient>
              </defs>
            </svg>

            {/* Purple swirl for the letter "g" */}
            {/* <svg
              className="circle-flair absolute bottom-24 right-1/4 z-0 w-16"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0ZM50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50C25 36.1929 36.1929 25 50 25Z"
                fill="url(#swirl-gradient)"
              />
              <defs>
                <linearGradient
                  id="swirl-gradient"
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A020F0" />
                  <stop offset="1" stopColor="#E066FF" />
                </linearGradient>
              </defs>
            </svg> */}
          </div>

          {/* Subtitle */}
          <div className='subtitle relative z-20 mt-8 flex items-center justify-center gap-4 opacity-0'>
            <svg
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
            <p className='text-lg font-medium text-yellow-200'>
                Effortlessly generate phonics stories kids love and take you 120 seconds to make!
            </p>
            <svg
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

          {/* CTA Button */}
          <div className='mt-12 flex justify-center'>
            <button className='cta-button relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-semibold text-yellow-100 transition-colors hover:bg-blue-700'>
              <div className='pointer-events-none absolute inset-0'>
                {/* Button flair elements */}
                <svg
                  className='btn-flair absolute -right-4 -top-4 w-12'
                  viewBox='0 0 134 229'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M101.08 11C102.439 11 103.722 11.6806 104.423 12.8C105.123 13.9194 105.123 15.2806 104.423 16.4L73.7399 66H126.5C127.859 66 129.142 66.6806 129.843 67.8C130.544 68.9194 130.544 70.2806 129.843 71.4L58.1767 185.4C56.9759 187.257 54.4565 187.801 52.6001 186.6C50.7436 185.399 50.1988 182.88 51.3997 181.022L117.358 76H64.5994C63.2401 76 61.9571 75.3194 61.2567 74.2C60.5562 73.0806 60.5562 71.7194 61.2567 70.6L97.6567 12.6C98.3571 11.4806 99.6401 11 101.08 11Z'
                    stroke='#0AE448'
                    strokeWidth='4'
                  />
                </svg>

                <svg
                  className='btn-flair absolute -bottom-4 -left-4 w-12'
                  viewBox='0 0 156 156'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='78'
                    cy='78'
                    r='76'
                    stroke='#FFD700'
                    strokeWidth='4'
                  />
                </svg>
              </div>
              <span className='relative z-10 flex items-center gap-2'>
                Get GSAP
                <svg className='h-4 w-4' viewBox='0 0 10 11'>
                  <path
                    fill='#FFFCE1'
                    d='M4.055 0v7.71l-3-3L0 5.79l4.805 4.804 4.804-4.805-1.054-1.078-3 3V0h-1.5Z'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
