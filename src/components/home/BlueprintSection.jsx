import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  BrainCircuit,
  GitBranch,
  Users,
  EyeOff,
} from "lucide-react";
import Highlight from "@/components/home/Highlight";

const BlueprintSection = () => {
  const concepts = [
    {
      icon: Megaphone,
      title: "Authentic Influence",
      description:
        "We craft organic strategies that amplify your personal brand, ensuring your voice reaches the right audience without paid noise.",
    },
    {
      icon: BrainCircuit,
      title: "Content That Converts",
      description:
        "Every post is designed to educate, inspire, and engage—building authority while driving organic growth naturally.",
    },
    {
      icon: GitBranch,
      title: "Strategic Growth Mapping",
      description:
        "From awareness to loyalty, we map your audience’s journey—helping your brand grow with clarity and measurable impact.",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "We don’t just grow followers; we nurture engaged communities that trust your expertise and advocate for your brand.",
    },
    {
      icon: EyeOff,
      title: "Power of Word-of-Mouth",
      description:
        "We unlock hidden growth channels—private shares, referrals, and recommendations—that fuel true organic influence.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-black"
        >
          The Blueprint for{" "}
          <motion.span
            className="text-[var(--gold)]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Authentic
          </motion.span>{" "}
          Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-center text-gray-700 mb-24 max-w-3xl mx-auto leading-relaxed"
        >
          We don't follow trends; we set them. Our strategies are built on a deep
          understanding of what truly captures attention and builds lasting
          communities.
        </motion.p>

        {/* Concepts */}
        <div className="space-y-20">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Card */}
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-56 h-56 md:w-64 md:h-64 bg-gray-100 rounded-full flex items-center justify-center shadow-xl hover:shadow-[0_0_50px_var(--gold)] float-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <concept.icon className="w-28 h-28 md:w-32 md:h-32 text-black animate-bounce-slow" />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-black">
                  {concept.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {concept.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueprintSection;
