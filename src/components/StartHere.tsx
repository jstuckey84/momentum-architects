import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StartHere = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center bg-card-gradient border border-brand rounded-sm p-10 md:p-14 glow-brand"
      >
        <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">
          Start Here
        </p>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Not sure where to start?
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Most teams begin with a Clarity Diagnostic to quickly identify what's actually
          slowing things down.
        </p>
        <a
          href="#packages"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity rounded-sm"
        >
          Start with a Clarity Diagnostic
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};

export default StartHere;
