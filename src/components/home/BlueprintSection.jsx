import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, BrainCircuit, GitBranch, Users, EyeOff } from 'lucide-react';
import Highlight from '@/components/home/Highlight';

const BlueprintSection = () => {
  const concepts = [
    { icon: Megaphone, title: "Amplification", description: "We don't just create content; we engineer it to spread like wildfire across networks, maximizing organic reach." },
    { icon: BrainCircuit, title: "Zero-Click Marketing", description: "Building trust and authority by providing immense value directly within social platforms, no clicks required." },
    { icon: GitBranch, title: "Hybrid Attribution", description: "We go beyond the last click, mapping the entire customer journey to understand what truly drives conversions." },
    { icon: Users, title: "Owned Audience", description: "Forget rented land. We help you build a loyal, engaged community that you can connect with directly, anytime." },
    { icon: EyeOff, title: "Dark Social", description: "Unlocking the immense potential of private shares and word-of-mouth recommendations happening behind the scenes." },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
         <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          The Blueprint for <Highlight>Authentic</Highlight> Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-center text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed"
        >
          We don't follow trends; we set them. Our strategies are built on a deep understanding of what truly captures attention and builds lasting communities.
        </motion.p>
        <div className="space-y-20">
          {concepts.map((concept, index) => (
            <motion.div 
              key={concept.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                className="w-full md:w-1/2 flex justify-center"
                whileHover={{ scale: 1.05, rotate: index % 2 === 1 ? -2 : 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-900 rounded-full flex items-center justify-center float-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                  <concept.icon className="w-24 h-24 md:w-32 md:h-32 text-[var(--gold)]" />
                </div>
              </motion.div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 gradient-text">{concept.title}</h3>
                <p className="text-gray-300 leading-relaxed">{concept.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;