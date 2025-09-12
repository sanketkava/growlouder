import React from 'react';
import { motion, useTransform } from 'framer-motion';

const HeroBackground = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const shapes = [
    {
      style: {
        width: 'clamp(100px, 30vw, 400px)',
        height: 'clamp(100px, 30vw, 400px)',
        top: '10%',
        left: '5%',
        background: 'radial-gradient(circle, rgba(181, 134, 44, 0.4) 0%, rgba(181, 134, 44, 0) 70%)',
      },
      animate: { x: [0, 20, 0], y: [0, 30, 0], scale: [1, 1.1, 1] },
      transition: { duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
    },
    {
      style: {
        width: 'clamp(80px, 20vw, 300px)',
        height: 'clamp(80px, 20vw, 300px)',
        top: '60%',
        right: '10%',
        background: 'radial-gradient(circle, rgba(255, 0, 193, 0.3) 0%, rgba(255, 0, 193, 0) 70%)',
      },
      animate: { x: [0, -25, 0], y: [0, -15, 0], rotate: [0, 15, 0] },
      transition: { duration: 10, repeat: Infinity, repeatType: 'mirror', delay: 2, ease: 'easeInOut' },
    },
    {
      style: {
        width: 'clamp(50px, 15vw, 200px)',
        height: 'clamp(50px, 15vw, 200px)',
        top: '30%',
        right: '25%',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.25) 0%, rgba(0, 242, 255, 0) 70%)',
      },
      animate: { scale: [1, 1.2, 1] },
      transition: { duration: 6, repeat: Infinity, repeatType: 'mirror', delay: 1, ease: 'easeInOut' },
    },
    {
      style: {
        width: 'clamp(60px, 18vw, 250px)',
        height: 'clamp(60px, 18vw, 250px)',
        bottom: '5%',
        left: '20%',
        background: 'radial-gradient(circle, rgba(181, 134, 44, 0.2) 0%, rgba(181, 134, 44, 0) 70%)',
      },
      animate: { y: [0, -30, 0], rotate: [0, -10, 0] },
      transition: { duration: 12, repeat: Infinity, repeatType: 'mirror', delay: 3, ease: 'easeInOut' },
    },
    {
      style: {
        width: 'clamp(120px, 25vw, 350px)',
        height: 'clamp(120px, 25vw, 350px)',
        top: '5%',
        right: '5%',
        background: 'radial-gradient(circle, rgba(255, 0, 193, 0.2) 0%, rgba(255, 0, 193, 0) 70%)',
      },
      animate: { x: [0, -20, 0], y: [0, 20, 0] },
      transition: { duration: 9, repeat: Infinity, repeatType: 'mirror', delay: 4, ease: 'easeInOut' },
    },
    {
      style: {
        width: 'clamp(70px, 15vw, 220px)',
        height: 'clamp(70px, 15vw, 220px)',
        bottom: '15%',
        right: '30%',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.2) 0%, rgba(0, 242, 255, 0) 70%)',
      },
      animate: { rotate: [0, -20, 0] },
      transition: { duration: 11, repeat: Infinity, repeatType: 'mirror', delay: 5, ease: 'easeInOut' },
    },
  ];

  return (
    <motion.div style={{ y }} className="absolute inset-0 z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full filter blur-3xl"
          style={shape.style}
          animate={shape.animate}
          transition={shape.transition}
        />
      ))}
    </motion.div>
  );
};

export default HeroBackground;