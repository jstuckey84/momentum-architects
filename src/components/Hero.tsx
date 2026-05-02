import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/PDC_Logo_Stacked.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <img alt="Process Dream Company" className="h-40 md:h-56 lg:h-64 mx-auto mb-10" src="/lovable-uploads/e1718b16-b103-488e-a1ac-6d0f3f9fe7d5.png" />
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-8">
            Operations Advisory
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            Turn Chaos<br />
            <span className="text-gradient-brand">Into Clarity.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">

          When your team is stuck in follow-ups, rework, and unclear ownership, it's not a people problem—it's a process problem. I help you see where work actually gets stuck, handed off too many times, or quietly breaks down—and fix it in a way that actually works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#packages"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity rounded-sm">

            Start with a Clarity Diagnostic
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-brand-strong text-foreground px-8 py-4 font-semibold tracking-wide text-sm uppercase hover:bg-secondary transition-colors rounded-sm">

            Book a 20-minute intro call
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground text-sm max-w-xl mx-auto mt-6"
        >
          20 minutes. No prep needed. We'll quickly pinpoint what's breaking and whether it's worth fixing together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground/80 text-sm italic max-w-xl mx-auto mt-8"
        >
          Built from real-world experience inside complex operational environments — not theory.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>);

};

export default Hero;