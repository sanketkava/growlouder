import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "30+", label: "Brands Empowered" },
    { icon: TrendingUp, number: "100M+", label: "Organic Views Gained" },
    { icon: Award, number: "99%", label: "Client Satisfaction" },
    { icon: Target, number: "10+", label: "Industries Served" }
  ];

  const teamMembers = [
    {
      name: "Jay Balar",
      role: "Founder & CBO",
      image: "/photos/jay.png",
      description:
        "With 5+ years of experience in content creation and social media strategy, Jay specializes in crafting impactful personal branding and growth strategies that amplify authentic voices online."
    },
    {
      name: "Vansh Maniya",
      role: "CEO & Co-Founder",
      image: "/photos/vansh.jpg",
      description:
        "A creative strategist passionate about viral content and brand storytelling, Vansh drives GrowLouder’s vision of building communities and influence organically."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - GROWLOUDER | Our Story & Mission</title>
        <meta
          name="description"
          content="Discover GROWLOUDER’s mission to build authentic personal brands and organic social media growth. Meet our team and learn how we empower voices to grow louder."
        />
      </Helmet>

      <div className="pt-24 pb-20 bg-black">
        <div className="container mx-auto px-6">
          {/* Heading */}
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
              We help individuals and brands amplify their authentic voice through strategic, organic-first social media growth and personal branding.
            </p>
          </motion.div>

          {/* Mission Section */}
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
                  At GROWLOUDER PRODUCTIONS, we believe every personal brand and business carries a story worth amplifying. Our mission is to transform that story into influence—through organic, authentic, and strategy-driven social media marketing.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We don’t just chase numbers; we build communities. By focusing on engagement, trust, and long-term growth, we ensure your voice resonates with the right audience and creates a lasting impact.
                </p>
              </div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <img
                  alt="GrowLouder team collaboration"
                  className="rounded-2xl shadow-2xl border border-gray-700"
                  src="https://images.unsplash.com/photo-1682695798256-28a6a59e90b9"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Impact Section */}
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
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4 glow shadow-lg">
                    <stat.icon size={32} className="text-black" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 bg-gray-900 p-12 rounded-2xl shadow-xl border border-gray-800"
          >
            <h2 className="text-4xl font-bold mb-8 text-center gradient-text">Our Story</h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2020, GROWLOUDER was born from a vision to challenge the paid-ad-first mindset. Too many brands were losing their authentic voice in the noise of quick hacks and vanity metrics.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our founders set out to build an agency focused on authenticity, creativity, and sustainable growth. We believe real influence is built organically—through meaningful connections, consistency, and community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we’ve empowered 500+ brands and creators to find their voice, build strong communities, and grow louder without depending on heavy ad spends.
              </p>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-[0_0_40px_var(--gold)] transition-all duration-300 text-center border border-gray-800 hover:border-[var(--gold)]"
                >
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img
                      alt={`${member.name} - ${member.role}`}
                      src={member.image}
                      className="w-full h-full object-cover rounded-full border-4 border-[var(--gold)] shadow-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-[var(--gold)] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-base leading-relaxed">{member.description}</p>
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
