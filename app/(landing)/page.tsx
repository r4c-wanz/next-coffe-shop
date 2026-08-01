import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import MenuSection from "@/components/sections/home/MenuSection";
import PromoSection from "@/components/sections/home/PromoSection";
import BestSellerSection from "@/components/sections/home/BestSellerSection";
import WhyUsSection from "@/components/sections/home/WhyUsSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="pb-7.5">
      <HeroSection />
      <FeaturesSection />
      <MenuSection />
      <PromoSection />
      <BestSellerSection />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  );
}
