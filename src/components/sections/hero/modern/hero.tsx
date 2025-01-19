'use client';

import React, { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';
import ParallaxImage from '@/components/motion/parallax-image';
import { TextLoop } from '@/components/motion/text-loop';

const heroContent = [
  { role: 'developer', action: 'code', emoji: '💻', bgColor: 'bg-green-100' },
  { role: 'gamer', action: 'win', emoji: '🎮', bgColor: 'bg-blue-100' },
  { role: 'thinker', action: 'solve', emoji: '🤔', bgColor: 'bg-yellow-100' },
  { role: 'learner', action: 'grow', emoji: '📚', bgColor: 'bg-purple-100' },
  { role: 'creator', action: 'build', emoji: '✨', bgColor: 'bg-pink-100' },
  { role: 'teammate', action: 'collab', emoji: '🤝', bgColor: 'bg-orange-100' },
  { role: 'fixer', action: 'repair', emoji: '🛠️', bgColor: 'bg-gray-100' }
];

const textLoopVariants = {
  initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
  animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
  exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' }
};

const textLoopTransition = {
  type: 'spring',
  stiffness: 900,
  damping: 80,
  mass: 10
};

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[100dvh] md:h-[100dvh] md:min-h-[100dvh] xl:h-[100dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <span>A </span>
              <TextLoop
                className="overflow-y-clip"
                transition={textLoopTransition}
                variants={textLoopVariants}
              >
                {heroContent.map((content, index) => (
                  <span key={index}>{content.role}</span>
                ))}
              </TextLoop>
              <br />
              <span className="flex items-center gap-2 md:gap-4">
                <span>Who</span>
                <TextLoop
                  className="my-auto inline-block h-[3.25rem] overflow-hidden overflow-y-clip md:h-[7.8rem]"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span
                      key={index}
                      className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[3.25rem] overflow-hidden rounded-full md:mx-4 md:h-[7.8rem] ${content.bgColor}`}
                    >
                      <span className="absolute inset-0 flex select-none items-center justify-center text-4xl md:text-7xl">
                        {content.emoji}
                      </span>
                    </span>
                  ))}
                </TextLoop>
                <span>to</span>
                <TextLoop
                  className="overflow-y-clip"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span key={index}>{content.action}</span>
                  ))}
                </TextLoop>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
