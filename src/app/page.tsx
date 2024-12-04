import HeroSection from "@/components/HeroSection/hero";
import ProjectsSection from "@/components/Projects/projects";
import TeamSection from "@/components/Team/team";
import Tecno from "@/components/Tecno/tecno";
import TestimonialsSection from "@/components/testimonials/testimonials";

function Page() {
  return (
    <div>
      <HeroSection />
      <Tecno />
      <ProjectsSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
}

export default Page;
