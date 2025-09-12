import React from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";
import Highlight from "@/components/home/Highlight";
import { useNavigate } from "react-router-dom"; // ✅ Correct import

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <HeroBackground scrollYProgress={scrollYProgress} />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Just Pure{" "}
          <motion.span
            className="text-green-400 font-extrabold mx-2"
            animate={{
              textShadow: [
                "0 0 10px #00FF7F",
                "0 0 20px #00FF7F",
                "0 0 10px #00FF7F",
              ],
              y: [0, -8, 0], // up-down motion
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Organic
          </motion.span>
          <Highlight>Growth</Highlight>, Not Ads.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Build a Personal Brand that Speaks Louder, Organically...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6"
            onClick={() => navigate("/Contact")} // ✅ React Router navigation
          >
            → Let’s Grow Louder
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
