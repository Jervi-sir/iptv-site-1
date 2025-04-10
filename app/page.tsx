import Features1 from "@/app/sections/features-1";
import Features10 from "@/components/features-10";
import Features12 from "@/app/sections/features-12";
import Features4 from "@/app/sections/features-4";
import HeroSection from "@/app/sections/hero-section";
import LogoCloud1 from "@/components/logo-cloud-1";
import Pricing2 from "@/components/pricing-2";
import Pricing1 from "@/app/sections/pricing-1";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import CallToAction from "@/app/sections/call-to-action";
import WallOfLoveSection from "@/app/sections/testimonials";
import StatsSection from "@/app/sections/stats";
import IntegrationsSection from "@/app/sections/integrations-7";
import FooterSection from "@/app/sections/footer";
import FAQsTwo from "@/app/sections/faqs-2";
import LogoCloud2 from "@/components/logo-cloud-2";

export default function Home() {
  return (
    <>
     <HeroSection />
     {/* <LogoCloud2 /> */}
     {/* <LogoCloud1 /> */}
     <StatsSection /> 
     <Pricing1 />
     <IntegrationsSection />
     <CallToAction />
     <WallOfLoveSection /> 
     
     {/* <Pricing2 /> */}
      <Features12 />
     {/* <Features10 /> */}
     <Features1 />
     <Features4 />
     <FAQsTwo />
     <FooterSection /> 
    </>
  );
}
