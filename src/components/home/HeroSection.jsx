import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import HeroBackground from '@/components/HeroBackground';
import Highlight from '@/components/home/Highlight';

const HeroSection = () => {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground scrollYProgress={scrollYProgress} />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring' }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Just Pure Organic <Highlight>Growth</Highlight>, Not Ads.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Build a Personal Brand that Speaks Louder, Organically...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: 'spring' }}
        >
          <Button 
            variant="outline"
            size="lg" 
            className="px-10 py-6"
            onClick={() => toast({
              title: "🚧 Let's Grow Louder!",
              description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            })}
          >
            → Let’s Grow Louder
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;