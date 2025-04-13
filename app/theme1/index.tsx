import React from 'react';
import { HeroHeader } from './hero5-header';
import HeroSection from './hero-section';
import FooterSection from './footer';
import FAQsTwo from './faqs-2';
import Features4 from './features-4';
import Features1 from './features-1';
import WallOfLoveSection from './testimonials';
import CallToAction from './call-to-action';
import Pricing1 from './pricing-1';
import StatsSection from './stats';
import IntegrationsSection from "./integrations-7";

export const Theme1 = () => {
  return (
    <div className=''>
      <HeroHeader />
      <HeroSection />
      <StatsSection />
      <div id="pricing" >
        <Pricing1 />
      </div>
      <IntegrationsSection />
      <CallToAction />
      <div id='feedback'>
        <WallOfLoveSection />
      </div>
      <Features1 />
      <div id='why_us'>
        <Features4 />
      </div>
      <FAQsTwo />
      <FooterSection />
    </div>
  );
};