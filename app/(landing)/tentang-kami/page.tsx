import AboutHeroSection from "@/components/sections/tentang-kami/AboutHeroSection";
import OurStorySection from "@/components/sections/tentang-kami/OurStorySection";
import ValuesSection from "@/components/sections/tentang-kami/ValuesSection";
import ProcessSection from "@/components/sections/tentang-kami/ProcessSection";
import CtaSection from "@/components/sections/tentang-kami/CtaSection";
import TeamSection from "@/components/sections/tentang-kami/TeamSection";

export default function AboutPage() {
  return (
    <div className="pb-7.5">
      <AboutHeroSection />
      <OurStorySection />
      <ValuesSection />
      <ProcessSection />
      <CtaSection />
      <TeamSection />
    </div>
  );
}
