
import React from 'react';
import { useGsapTextReveal } from '@/hooks/useGsap';

const AnimatedText = ({ text, as: Component = 'h1', className }) => {
  const textRef = useGsapTextReveal();
  
  return (
    <Component ref={textRef} className={`overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </Component>
  );
};

export default AnimatedText;
