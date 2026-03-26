import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <TrustedBy />
    <Stats />
    <About />
    <Services />
    <Portfolio />
    <Process />
    <Testimonials />
    <CtaSection />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default Index;
