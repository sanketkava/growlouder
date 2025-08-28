import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ProcessSection = () => {
  const processStages = [
    { name: "Content Strategy" },
    { name: "Writing" },
    { name: "Shooting" },
    { name: "Managing" },
  ];

  const oldWay = [
    "Copy Others Content.",
    "Ask writers to self-research articles",
    "Only Paid Promotion",
    "Don't track conversions",
    "Performance Marketing Without Branding ",
    "Result Radio 65%"
  ];

  const newWay = [
    "Inspire From Other And Own Trends...",
    "Brainstorm With You And Make Right Decisions",
    "100% Personal Branding...",
    "Measure and Report on Growth...",
    "Performance Marketing With Personal Branding",
    "Result Radio 99%",
  ];

  return (
    <section className="py-24 bg-soft-lavender text-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          The Grow and Convert Process
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          We have a four-step process that helps us drive results for businesses we work with.
        </motion.p>

        {/* Horizontal Process Stages */}
<div className="relative flex items-center justify-between mb-16">
  {/* Horizontal connector line */}
  
  {processStages.map((stage, index) => (
    <motion.div
      key={stage.name}
      className="flex-1 flex flex-col items-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
    >
      {/* Circle */}
      <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
        <span className="font-bold">{index + 1}</span>
      </div>

      {/* Stage Name */}
      <p className="mt-4 text-center font-bold text-lg">{stage.name}</p>
    </motion.div>
  ))}
</div>

 {/* New Heading */}
  <div className="col-span-2 text-center mb-4">
    <h3 className="text-2xl font-bold text-gray-800">
      Our Verified Way.....
    </h3>
  </div>

        {/* Old Way / New Way Comparison */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Old Way */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-xl mb-6">← Old Way</h3>
            <ul className="space-y-6">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-400 flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-xl mb-6 text-blue-500">GROWLOUDER Way →</h3>
            <ul className="space-y-6">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
