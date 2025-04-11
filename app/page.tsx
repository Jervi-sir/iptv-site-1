import Features1 from "@/app/sections/features-1";
import Features12 from "@/app/sections/features-12";
import Features4 from "@/app/sections/features-4";
import HeroSection from "@/app/sections/hero-section";
import Pricing1 from "@/app/sections/pricing-1";
import CallToAction from "@/app/sections/call-to-action";
import WallOfLoveSection from "@/app/sections/testimonials";
import StatsSection from "@/app/sections/stats";
import IntegrationsSection from "@/app/sections/integrations-7";
import FooterSection from "@/app/sections/footer";
import FAQsTwo from "@/app/sections/faqs-2";
import { HeroHeader } from "./sections/hero5-header";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <StatsSection />
      <Pricing1 />
      <IntegrationsSection />
      <CallToAction />
      <WallOfLoveSection />
      <Features12 />
      <Features1 />
      <Features4 />
      <FAQsTwo />
      <FooterSection />
    </>
  );
}
