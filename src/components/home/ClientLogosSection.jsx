import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientLogosSection = () => {
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const clientLogos = [
    "Nike", "Apple", "Google", "Microsoft", "Amazon", "Tesla", "Netflix", "Spotify"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 inline-block"
        >
          <span className="underline-on-hover">✨ Brands That Trust GROWLOUDER</span>
        </motion.h2>
      </div>
      <div 
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        onMouseEnter={() => setIsCarouselHovered(true)}
        onMouseLeave={() => setIsCarouselHovered(false)}
      >
        <motion.div 
          className="flex items-center justify-center md:justify-start animate-infinite-scroll"
          animate={{ animationPlayState: isCarouselHovered ? "paused" : "running" }}
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0 w-48 text-center text-2xl font-bold text-gray-500 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_10px_var(--gold)] transition-all duration-300">
              {logo}
            </div>
          ))}
        </motion.div>
        <motion.div 
          className="flex items-center justify-center md:justify-start animate-infinite-scroll"
          aria-hidden="true"
          animate={{ animationPlayState: isCarouselHovered ? "paused" : "running" }}
        >
          {clientLogos.map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0 w-48 text-center text-2xl font-bold text-gray-500 hover:text-white hover:scale-105 hover:drop-shadow-[0_0_10px_var(--gold)] transition-all duration-300">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection;