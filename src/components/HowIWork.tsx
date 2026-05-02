import { motion } from "framer-motion";

const HowIWork = () => {
  return (
    <section id="how-i-work" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            The Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            How I Work.
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I don't come in with a playbook and force it on your business.
            </p>
            <p>
              I start by understanding how things actually work day to day—where things slow
              down, where confusion happens, and where risk is hiding.
            </p>
            <p>
              Then we fix it in a way that your team can actually run with.
            </p>
            <p className="text-foreground font-medium">
              No overcomplication. No unnecessary frameworks. Just clear, practical
              improvements that stick.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
