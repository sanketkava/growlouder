import React from 'react';
import { motion } from 'framer-motion';

// SVG Icons અને Scribbles જે Image માં દેખાય છે
// આ દરેક SVG સીધા કોડમાં એમ્બેડ કરેલા છે જેથી કોઈ એક્સટર્નલ ફાઇલની જરૂર ન પડે.

// Plus Icon for the title
const PlusIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
    <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M24 16V32M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Thought Leadership Underline
const ThoughtLeadershipUnderline = () => (
  <svg width="150" height="12" viewBox="0 0 142 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 9.75C26.2857 3.5 86.2 -3.5 140 9.75" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Original Content Lightbulb
const OriginalContentLightbulb = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a7 7 0 0 0-7 7c0 3.03 1.95 5.58 4.5 6.64V18a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-2.36C17.05 14.58 19 12.03 19 9a7 7 0 0 0-7-7zM8.5 21h7"/>
  </svg>
);

// Branded Newsletter Paper Plane
const BrandedNewsletterPaperPlane = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4L22 2z"/>
  </svg>
);

// Expert-led underline
const ExpertLedUnderline = () => (
  <svg width="100" height="12" viewBox="0 0 115 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 4H22M32 4H52M62 4H82M92 4H112" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Dark Social Scribble
const DarkSocialScribble = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
    <path d="M27 52C40.8071 52 52 40.8071 52 27C52 13.1929 40.8071 2 27 2C13.1929 2 2 13.1929 2 27C2 35.5264 6.22356 42.9247 12.5 47.5" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
    <path d="M27 42C35.2843 42 42 35.2843 42 27C42 18.7157 35.2843 12 27 12C18.7157 12 12 18.7157 12 27C12 32.1757 14.7171 36.6856 18.5 39.5" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

// Content Distribution Scribble
const ContentDistributionScribble = () => (
  <svg width="108" height="17" viewBox="0 0 108 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 15C18 3 42 3 54 10C66 17 88.5 15.5 106 2" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Amplification Scribble
const AmplificationScribble = () => (
  <svg width="119" height="33" viewBox="0 0 119 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 28.5C2 28.5 28 -10.5 59.5 9.5C91 29.5 117 11.5 117 11.5" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Hybrid Attribution Scribble
const HybridAttributionScribble = () => (
  <svg width="76" height="38" viewBox="0 0 76 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 20.3306C12.3333 3.66395 34.2 -7.96938 43 16.3306C51.8 40.6306 63.8333 38.664 74 27.3306" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Zero-Click Marketing Icon
const ZeroClickMarketingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="4" y1="20" x2="20" y2="4"></line>
  </svg>
);

// Owned Audience Underline
const OwnedAudienceUnderline = () => (
  <svg width="140" height="12" viewBox="0 0 162 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
    <path d="M2 9.75C30.2857 3.5 98.2 -3.5 160 9.75" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);


// ડાબી બાજુનું ઇલસ્ટ્રેશન - મગજ અને મેગાફોન
const BrainMegaphoneIllustration = () => (
  <div className="relative w-[300px] h-[300px] mx-auto scale-75 md:scale-100">
    {/* Purple background shape */}
    <div className="absolute inset-0 bg-purple-200 rounded-lg transform rotate-[-5deg]"></div>
    <div className="absolute inset-0 bg-purple-200 rounded-lg transform rotate-[10deg]"></div>

    {/* Brain (Simplified SVG for demonstration) */}
    <svg className="absolute top-1/4 left-1/4 z-10 w-32 h-32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.45.39-2.82 1.05-4.04l5.95 5.95v2.09l-3 3h4l-3-3v-2.09l5.95-5.95c.66 1.22 1.05 2.59 1.05 4.04 0 4.41-3.59 8-8 8zM12 4c1.45 0 2.82.39 4.04 1.05L12 11l-4.04-4.04C9.18 4.39 10.55 4 12 4z" fill="#D8F3DC"/> {/* Light green/yellow color */}
      <path d="M12 4c1.45 0 2.82.39 4.04 1.05L12 11l-4.04-4.04C9.18 4.39 10.55 4 12 4z" fill="#E8F8EA"/> {/* Lighter shade for highlights */}
      <circle cx="12" cy="12" r="4" fill="#D8F3DC"/>
      <path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#C3E9CA"/> {/* Darker shade for depth */}
    </svg>


    {/* Cubes (Simplified for demonstration) */}
    <div className="absolute bottom-1/4 left-1/4 bg-green-400 w-12 h-12 transform rotate-[-10deg] border-2 border-green-500"></div>
    <div className="absolute bottom-1/4 left-1/3 bg-green-500 w-12 h-12 transform rotate-[5deg] translate-x-4 border-2 border-green-600"></div>
    <div className="absolute bottom-1/2 left-1/4 bg-green-300 w-12 h-12 transform rotate-[15deg] -translate-y-8 border-2 border-green-400"></div>

    {/* Megaphone (Simplified SVG for demonstration) */}
    <svg className="absolute bottom-1/4 right-1/4 z-10 w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speaker cone */}
      <path d="M80 30L95 40L95 60L80 70V30Z" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="2"/>
      {/* Body of megaphone */}
      <path d="M80 50C80 50 60 50 50 50C40 50 20 60 20 70V30C20 40 40 50 50 50C60 50 80 50 80 50Z" fill="#D8BFD8" stroke="#A78BFA" strokeWidth="2"/> {/* Lighter purple */}
      {/* Handle */}
      <path d="M20 70L10 80L15 85L25 75L20 70Z" fill="#A78BFA" stroke="#8B5CF6" strokeWidth="2"/>
      {/* Wire from brain to megaphone */}
      <path d="M30 40C35 30 45 30 50 40C55 50 65 50 70 40" stroke="#8B5CF6" strokeWidth="3" fill="none"/>
    </svg>
  </div>
);


// ટોપિક્સનો ડેટા અને તેમની પોઝિશન (Image મુજબ)
const topicsData = [
  { name: 'Original Content', icon: OriginalContentLightbulb, underline: null, position: 'top-[8%] right-[12%]' },
  { name: 'Branded Newsletter', icon: BrandedNewsletterPaperPlane, underline: null, position: 'top-[26%] right-[3%]' },
  { name: 'Dark Social', icon: DarkSocialScribble, underline: null, position: 'top-[35%] right-[28%]', textClass: 'mt-2 text-base' },
  { name: 'Amplification', icon: AmplificationScribble, underline: null, position: 'top-[48%] right-[5%]', textClass: 'mt-4 text-lg' },
  { name: 'Zero-Click Marketing', icon: ZeroClickMarketingIcon, underline: null, position: 'bottom-[20%] right-[18%]' },
  { name: 'Owned Audience', icon: OwnedAudienceUnderline, underline: OwnedAudienceUnderline, position: 'bottom-[8%] right-[5%]' },
  { name: 'Thought Leadership', icon: ThoughtLeadershipUnderline, underline: ThoughtLeadershipUnderline, position: 'top-[15%] left-[10%]' },
  { name: 'Expert-led', icon: ExpertLedUnderline, underline: ExpertLedUnderline, position: 'top-[35%] left-[20%]' },
  { name: 'Content Distribution', icon: ContentDistributionScribble, underline: ContentDistributionScribble, position: 'top-[52%] left-[5%]' },
  { name: 'Hybrid Attribution', icon: HybridAttributionScribble, underline: HybridAttributionScribble, position: 'bottom-[18%] left-[15%]' },
];

const TopicsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // બાળકો માટે એનિમેશન ડિલે
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <section className="bg-[#F5F1FF] py-20 sm:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text and Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start lg:pr-12"
          >
            <PlusIcon />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8 leading-tight">
              Plus we know well all the things you (and your LinkedIn connections) talk about
            </h2>
            <div className="mt-12 w-full max-w-sm">
              <BrainMegaphoneIllustration />
            </div>
          </motion.div>

          {/* Right Column: Topics with Scribbles/Icons */}
          <motion.div 
            className="relative min-h-[500px] lg:min-h-[700px] hidden md:block" // Desktop પર જ એબ્સોલ્યુટ પોઝિશનિંગ
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {topicsData.map((topic, index) => (
              <motion.div 
                key={index}
                className={`absolute flex flex-col items-center group ${topic.position}`}
                variants={itemVariants}
              >
                {/* Topic's Icon (if any) */}
                {topic.icon && React.createElement(topic.icon)}
                
                {/* Topic Name with Underline/Scribble if defined */}
                <div className="relative text-gray-800 font-bold whitespace-nowrap group-hover:text-purple-600 transition-colors">
                  <span className={`relative z-10 ${topic.textClass || 'text-xl'}`}>{topic.name}</span>
                  {topic.underline && React.createElement(topic.underline, {className: "absolute top-1/2 left-0 w-full h-full -translate-y-1/2"})}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Stacked Topics for Mobile/Tablet */}
          <div className="md:hidden mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Things we know you talk about:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {topicsData.map((topic, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                >
                  {topic.icon && React.createElement(topic.icon, {className: "w-8 h-8 text-purple-500"})}
                  <p className="font-semibold text-gray-800 mt-2 text-center text-base">{topic.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopicsSection;