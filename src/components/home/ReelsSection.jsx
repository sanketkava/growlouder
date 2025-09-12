import React from 'react';
import { motion } from 'framer-motion';
import ReelSlider from '@/components/home/ReelSlider';

const ReelsSection = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bright-gradient-text"
        >
          See Our Work in Action
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Check out our latest viral reels. This could be your brand next.
        </motion.p>
        <ReelSlider />
      </div>
    </section>
  );
};

export default ReelsSection;