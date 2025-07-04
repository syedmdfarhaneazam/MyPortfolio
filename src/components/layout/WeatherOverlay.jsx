
import React, { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Particle = ({ type, style }) => {
  const animationClass = {
    snow: 'animate-snow',
    rain: 'animate-rain',
    autumn: 'animate-autumn',
  }[type];

  const content = {
    snow: '❄️',
    rain: '|',
    autumn: '🍂',
  }[type];

  return (
    <motion.div
      className={`absolute text-lg ${animationClass}`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: style.animationDuration.replace('s',''), repeat: Infinity, ease: "linear" }}
    >
      {content}
    </motion.div>
  );
};

const WeatherOverlay = () => {
  const { weather } = useTheme();

  const particles = useMemo(() => {
    if (weather === 'clear') return [];
    
    const count = weather === 'rain' ? 100 : 30;
    return Array.from({ length: count }).map((_, i) => {
      const duration = weather === 'rain' ? Math.random() * 0.5 + 0.5 : Math.random() * 10 + 10;
      const delay = Math.random() * duration;
      
      return {
        id: i,
        type: weather,
        style: {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${duration}s`,
          animationDelay: `${-delay}s`,
          opacity: weather === 'rain' ? Math.random() * 0.5 + 0.2 : Math.random() * 0.7 + 0.3,
          fontSize: weather === 'rain' ? `${Math.random() * 1 + 0.5}rem` : `${Math.random() * 1 + 0.8}rem`,
          color: weather === 'rain' ? 'rgba(173, 216, 230, 0.7)' : 'white',
        },
      };
    });
  }, [weather]);

  if (weather === 'clear') return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[60] overflow-hidden">
      {particles.map(p => (
        <Particle key={p.id} type={p.type} style={p.style} />
      ))}
    </div>
  );
};

export default WeatherOverlay;
