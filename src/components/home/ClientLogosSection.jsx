import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientLogosSection = () => {
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  const clientLogos = [
    { name: "Laldi", src: "/logos/ladli.jpg" },
    { name: "Kadmba", src: "/logos/kadmba.jpg" },
    { name: "Alcone", src: "/logos/alcone.jpg" },
    { name: "AIwala", src: "/logos/aiwala.jpg" },
    { name: "DesiXporters", src: "/logos/desixporters.jpg" },
    { name: "Dhanarthi", src: "/logos/dhanarthi.jpg" },
    { name: "AyurKhyati", src: "/logos/ayurkhyati.jpg" },
    { name: "UB Company", src: "/logos/ubcompany.jpg" },
  ];

  // Duplicate logos for continuous scroll
  const logosForScroll = [...clientLogos, ...clientLogos];

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
  className="w-full overflow-hidden py-7"  // ← increase py if needed
  onMouseEnter={() => setIsCarouselHovered(true)}
  onMouseLeave={() => setIsCarouselHovered(false)}
>
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{
            x: isCarouselHovered ? 0 : ["0%", "-50%"] // Scroll left continuously
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120, // Adjust scroll speed
              ease: "linear"
            }
          }}
        >
          {logosForScroll.map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="w-32 h-32 rounded-full object-contain hover:scale-105 hover:drop-shadow-[0_0_10px_var(--gold)] transition-all duration-300"
                // Edit w-32 h-32 here to make logos bigger or smaller
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
