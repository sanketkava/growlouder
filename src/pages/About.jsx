import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clients Served" },
    { icon: TrendingUp, number: "2M+", label: "Followers Grown" },
    { icon: Award, number: "98%", label: "Success Rate" },
    { icon: Target, number: "50+", label: "Industries" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "10+ years in digital marketing with expertise in social media strategy and brand development."
    },
    {
      name: "Mike Chen",
      role: "Creative Director",
      description: "Award-winning creative professional specializing in viral content creation and visual storytelling."
    },
    {
      name: "Emily Rodriguez",
      role: "Growth Strategist",
      description: "Data-driven growth expert with a track record of scaling brands from zero to millions of followers."
    },
    {
      name: "David Kim",
      role: "Analytics Lead",
      description: "Performance marketing specialist focused on ROI optimization and conversion tracking."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - GROWLOUDER | Our Story & Mission</title>
        <meta name="description" content="Learn about GROWLOUDER's mission to revolutionize social media marketing. Meet our expert team and discover our journey in helping brands grow louder." />
      </Helmet>

      <div className="pt-24 pb-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4">
              <span>About</span>
              <span className="gradient-text">GROWLOUDER</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to revolutionize how brands connect with their audiences through authentic, organic social media growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 gradient-text">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At GROWLOUDER, we believe every brand has a unique voice that deserves to be heard. Our mission is to amplify that voice through strategic, authentic social media marketing that builds genuine connections and drives sustainable growth.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We're not just another social media agency. We're your partners in creating a digital presence that resonates, engages, and converts. Our organic-first approach ensures long-term success over quick fixes.
                </p>
              </div>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <img  
                  alt="Team collaboration in modern office"
                  className="rounded-2xl shadow-2xl"
                 src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 150 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4 glow">
                    <stat.icon size={32} className="text-black" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gray-900 p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Our Story</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2020, GROWLOUDER emerged from a simple observation: too many brands were losing their authentic voice in the noise of paid advertising and generic content strategies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our founders, frustrated with the industry's focus on vanity metrics and short-term gains, set out to create an agency that prioritized genuine engagement, community building, and sustainable growth.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we've helped over 500 brands find their voice and grow their communities organically, proving that authentic connection beats artificial amplification every time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <img  
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full rounded-full object-cover"
                     src="https://images.unsplash.com/photo-1612944095914-33fd0a85fcfc" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-[var(--gold)] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;