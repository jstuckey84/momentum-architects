import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Packages from "@/components/Packages";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Outcomes from "@/components/Outcomes";
import Toolkits from "@/components/Toolkits";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Packages />
      <HowIWork />
      <About />
      <Outcomes />
      <Toolkits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
