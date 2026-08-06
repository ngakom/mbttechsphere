import Hero from "@/components/Hero";
import TrustedTech from "@/components/TrustedTech";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedTech />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Industries />
      <Testimonials />
      <Contact />
    </>
  );
}
