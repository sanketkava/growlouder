import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Zap, Target, TrendingUp, Users, Award, Shield } from 'lucide-react';
import HeroBackground from '@/components/HeroBackground';

const WhyUs = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = ["Strategic.", "Loud.", "Organic.", "Authentic."];
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const advantages = [
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "See measurable growth within the first 30 days of our organic strategies."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "We identify and engage your exact audience with laser-focused precision."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Build lasting success with strategies that compound over time."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We don't just grow followers, we build engaged communities around your brand."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "98% success rate with over 500 brands across 50+ industries."
    },
    {
      icon: Shield,
      title: "Risk-Free Guarantee",
      description: "We're so confident in our results, we offer a 30-day money-back guarantee."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - GROWLOUDER | Organic Growth Experts</title>
        <meta name="description" content="Discover why GROWLOUDER is the leading choice for organic social media growth. Learn about our proven strategies and commitment to authentic engagement." />
      </Helmet>

      <div className="pt-32 pb-20 bg-black relative overflow-hidden perspective">
        <HeroBackground scrollYProgress={scrollYProgress}/>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 h-20 flex items-center justify-center flex-wrap">
              <span className="mr-4">We Are</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                  className="gradient-text text-shadow"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don't just promise growth – we deliver explosive, authentic results that transform your brand's digital presence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              The GROWLOUDER Advantage
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform-3d">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.03, rotateX: 3, rotateY: -3 }}
                  className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[var(--gold)] transition-all duration-300 group transform-3d"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] group-hover:glow transition-all duration-300">
                    <advantage.icon size={32} className="text-[var(--gold)] group-hover:text-black transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[var(--gold)] transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;