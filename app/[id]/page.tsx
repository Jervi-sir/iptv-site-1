import { AnimatedSection } from "../theme2/animated-section";
import PricingPlans from "../theme2/pricing";
import Testimonials from "../theme2/testimonials";
import { Theme2Layout } from "../theme2/theme2-layout";

export default function Page() {
  return (
    <Theme2Layout>
      {/* Pricing (3s animation) */}
      <div className="h-10" />
      <AnimatedSection preset="blur-slide" duration={3}>
        <PricingPlans doRedirect={true} />
      </AnimatedSection>
      {/* Testimonials (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <Testimonials />
      </AnimatedSection>
    </Theme2Layout>
  );
}
