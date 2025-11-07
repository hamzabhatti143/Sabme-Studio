import About from "@/components/About/About";
import Slider from "@/components/CaseStudy/Slider";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact"
import LatestWork from "@/components/LatestWork/LatestWork";
export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <LatestWork />
      <ServiceCards />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}
