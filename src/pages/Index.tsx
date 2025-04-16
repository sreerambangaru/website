import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Technology from "@/components/home/Technology";
import ProductDemo from "@/components/home/ProductDemo";
import Benefits from "@/components/home/Benefits";
import Team from "@/components/home/Team";
import Contact from "@/components/home/Contact";
import CTA from "@/components/home/CTA";
import Waitlist from "@/components/home/Waitlist";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Technology /> */}
        <ProductDemo />
        {/* <Benefits /> */}
        {/* <Team /> */}
        <Waitlist />
        {/* <Contact /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </TooltipProvider>
  );
};

export default Index;
