import Features1 from "@/components/features-1";
import Features10 from "@/components/features-10";
import Features12 from "@/components/features-12";
import Features4 from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import LogoCloud1 from "@/components/logo-cloud-1";
import Pricing2 from "@/components/pricing-2";
import Pricing1 from "@/components/pricing-1";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import CallToAction from "@/components/call-to-action";
import WallOfLoveSection from "@/components/testimonials";
import StatsSection from "@/components/stats";
import IntegrationsSection from "@/components/integrations-7";
import FooterSection from "@/components/footer";
import FAQsTwo from "@/components/faqs-2";
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
