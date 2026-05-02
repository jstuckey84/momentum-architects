import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhereIFocus from "@/components/WhereIFocus";
import WhatWeDo from "@/components/WhatWeDo";
import StartHere from "@/components/StartHere";
import Packages from "@/components/Packages";
import HowIWork from "@/components/HowIWork";
import WhatMakesDifferent from "@/components/WhatMakesDifferent";
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
      <WhereIFocus />
      <WhatWeDo />
      <StartHere />
      <Packages />
      <HowIWork />
      <WhatMakesDifferent />
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
