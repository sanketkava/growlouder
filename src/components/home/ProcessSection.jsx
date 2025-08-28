import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ProcessSection = () => {
  const processStages = [
    { name: "Content Strategy" },
    { name: "Writing" },
    { name: "Promotion" },
    { name: "Conversions" },
  ];

  const oldWay = [
    "Chase high traffic keywords",
    "Ask writers to self-research articles",
    "No promotion",
    "Don't track conversions",
  ];

  const newWay = [
    "Chase high converting topics",
    "Interview your employees to inform articles",
    "Paid ads and link building",
    "Measure and report on conversions",
  ];

  return (
    <section className="py-24 bg-soft-lavender text-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
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
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/4 relative pt-2">
            <div className="absolute left-2.5 top-4 h-[calc(100%-2rem)] border-l-2 border-dashed border-gray-300 hidden md:block"></div>
            <div className="space-y-16">
              {processStages.map((stage, index) => (
                <motion.div 
                  key={stage.name} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                >
                  <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full z-10 flex-shrink-0"></div>
                  <div className="ml-4">
                    <p className="font-bold text-lg">{stage.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
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

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-400"
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
      </div>
    </section>
  );
};

export default ProcessSection;