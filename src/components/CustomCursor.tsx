import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Increased stiffness and reduced damping for faster movement
  const springConfig = { damping: 15, stiffness: 400, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Slightly slower outer ring for elastic effect
  const outerSpringConfig = { damping: 12, stiffness: 300, mass: 0.5 };
  const cursorOuterX = useSpring(mouseX, outerSpringConfig);
  const cursorOuterY = useSpring(mouseY, outerSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      />
      <motion.div
        ref={cursorOuterRef}
        style={{
          x: cursorOuterX,
          y: cursorOuterY,
        }}
        className="fixed w-8 h-8 border-2 border-primary-400/50 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;