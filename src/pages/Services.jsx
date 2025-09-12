import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  TrendingUp,
  Users,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Instagram,
      title: "Instagram Growth",
      description:
        "Explosive organic growth strategies for Instagram. Build authentic engagement and grow your follower base naturally.",
      features: [
        "Content Strategy",
        "Hashtag Optimization",
        "Story Marketing",
        "Reels Creation",
      ],
    },
    {
      icon: Facebook,
      title: "Facebook Marketing",
      description:
        "Comprehensive Facebook marketing solutions. From page optimization to community building and engagement strategies.",
      features: [
        "Page Management",
        "Community Building",
        "Ad Optimization",
        "Analytics",
      ],
    },
    {
      icon: Twitter,
      title: "Twitter Engagement",
      description:
        "Build your Twitter presence with strategic content and engagement tactics that drive conversations and growth.",
      features: [
        "Tweet Strategy",
        "Thread Creation",
        "Engagement Tactics",
        "Trend Analysis",
      ],
    },
    {
      icon: Youtube,
      title: "YouTube Optimization",
      description:
        "Grow your YouTube channel with optimized content strategies, SEO, and audience engagement techniques.",
      features: [
        "SEO Optimization",
        "Thumbnail Design",
        "Content Planning",
        "Analytics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description:
        "Data-driven insights and analytics to track your social media performance and optimize for maximum growth.",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Growth Metrics",
        "Reporting",
      ],
    },
    {
      icon: Users,
      title: "Community Management",
      description:
        "Build and nurture engaged communities around your brand with strategic community management services.",
      features: [
        "Community Building",
        "Engagement Strategy",
        "Crisis Management",
        "Brand Voice",
      ],
    },
  ];

  const handleServiceClick = (serviceName) => {
    toast({
      title: `🚀 ${serviceName} Coming Soon`,
      description:
        "This premium service is under development — stay tuned for exclusive updates!",
    });
  };

  return (
    <>
      <Helmet>
        <title>
          GROWLOUDER Services | Social Media Marketing & Organic Growth Experts
        </title>
        <meta
          name="description"
          content="Amplify your brand with GROWLOUDER! Explore our expert social media services — Instagram growth, YouTube optimization, analytics, and more."
        />
      </Helmet>

      <div className="pt-32 pb-20 bg-black perspective">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[var(--gold)] via-yellow-400 to-[var(--gold)] bg-clip-text text-transparent animate-pulse">
                Premium Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive social media solutions designed to amplify your
              brand's voice and drive explosive organic growth across all
              platforms.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transform-3d">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                onClick={() => handleServiceClick(service.title)}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[var(--gold)] transition-all duration-300 cursor-pointer group flex flex-col shadow-lg hover:shadow-[0_0_30px_var(--gold)]"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-all duration-300">
                  <service.icon
                    size={32}
                    className="text-[var(--gold)] group-hover:text-black transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--gold)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-2 h-2 bg-[var(--gold)] rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
              Let's create a custom strategy that drives real, measurable growth
              for your business.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
              onClick={() =>
                toast({
                  title: "🚧 Get Started Feature",
                  description:
                    "This feature isn't implemented yet — request it in your next prompt! 🚀",
                })
              }
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
