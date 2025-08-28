import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, TrendingUp, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description: "Explosive organic growth strategies for Instagram. Build authentic engagement and grow your follower base naturally.",
      features: ["Content Strategy", "Hashtag Optimization", "Story Marketing", "Reels Creation"]
    },
    {
      icon: Facebook,
      title: "Facebook Marketing",
      description: "Comprehensive Facebook marketing solutions. From page optimization to community building and engagement strategies.",
      features: ["Page Management", "Community Building", "Ad Optimization", "Analytics"]
    },
    {
      icon: Twitter,
      title: "Twitter Engagement",
      description: "Build your Twitter presence with strategic content and engagement tactics that drive conversations and growth.",
      features: ["Tweet Strategy", "Thread Creation", "Engagement Tactics", "Trend Analysis"]
    },
    {
      icon: Youtube,
      title: "YouTube Optimization",
      description: "Grow your YouTube channel with optimized content strategies, SEO, and audience engagement techniques.",
      features: ["SEO Optimization", "Thumbnail Design", "Content Planning", "Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Data-driven insights and analytics to track your social media performance and optimize for maximum growth.",
      features: ["Performance Tracking", "ROI Analysis", "Growth Metrics", "Reporting"]
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture engaged communities around your brand with strategic community management services.",
      features: ["Community Building", "Engagement Strategy", "Crisis Management", "Brand Voice"]
    }
  ];

  const handleServiceClick = (serviceName) => {
    toast({
      title: `🚧 ${serviceName} Service`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Services - GROWLOUDER | Social Media Marketing Solutions</title>
        <meta name="description" content="Discover GROWLOUDER's comprehensive social media marketing services. From Instagram growth to YouTube optimization, we help brands amplify their digital presence." />
      </Helmet>

      <div className="pt-32 pb-20 bg-black perspective">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive social media solutions designed to amplify your brand's voice and drive explosive organic growth across all platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transform-3d">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.03, rotateX: 5, rotateY: 5 }}
                onClick={() => handleServiceClick(service.title)}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[var(--gold)] transition-all duration-300 cursor-pointer group flex flex-col transform-3d"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] group-hover:glow transition-all duration-300">
                  <service.icon size={32} className="text-[var(--gold)] group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--gold)] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create a custom strategy that drives real results for your business.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => toast({
                title: "🚧 Get Started Feature",
                description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              })}
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;