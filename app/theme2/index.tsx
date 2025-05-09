'use client';

import React from 'react';
import Hero from './hero';
import Testimonials from './testimonials';
import PricingPlans from './pricing';
import { Theme2Layout } from './theme2-layout';
import { MarqueeSection } from './marquee';
import { ProvidersSection } from './providers';
import { FreeTrialSection } from './free-trial';
import { LiveChannelsSection } from './live-channels';
import { WhyChooseUsSection } from './why-choose-us';
import { AnimatedSection } from './animated-section';
import Testimonials2 from './testimonials-2';

export const Theme2 = () => {
  return (
    <Theme2Layout>
      {/* Hero (1.5s animation) */}
      <AnimatedSection preset="blur-slide" duration={1}>
        <Hero />
      </AnimatedSection>
      {/* Channels Marquee (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <MarqueeSection />
      </AnimatedSection>
      {/* Channels 2 (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <LiveChannelsSection />
      </AnimatedSection>
      {/* Enjoy with Us (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <ProvidersSection />
      </AnimatedSection>
      {/* Why Us (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <WhyChooseUsSection />
      </AnimatedSection>
      {/* Free Trial (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <FreeTrialSection />
      </AnimatedSection>
      {/* Pricing (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <PricingPlans />
      </AnimatedSection>
      {/* Testimonials (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        {/* <Testimonials /> */}
        <Testimonials2 />
      </AnimatedSection>
    </Theme2Layout>
  );
};

