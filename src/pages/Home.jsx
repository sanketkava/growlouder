import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import ProcessSection from '@/components/home/ProcessSection';
import BlueprintSection from '@/components/home/BlueprintSection';
import ReelsSection from '@/components/home/ReelsSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GROWLOUDER - We Engineer Organic Growth</title>
        <meta name="description" content="We engineer growth, not ads. Real reach, real results through authentic social media strategy." />
      </Helmet>
      <HeroSection />
      <ClientLogosSection />
      <ProcessSection />
      <BlueprintSection />
      <ReelsSection />
    </>
  );
};

export default Home;