import About from "@/components/About/About";
import Slider from "@/components/CaseStudy/Slider";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact"
export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <ServiceCards />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
}
