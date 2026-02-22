import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Toolkits from "@/components/Toolkits";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Packages />
      <Toolkits />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
