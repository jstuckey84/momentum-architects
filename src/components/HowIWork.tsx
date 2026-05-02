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
            <p>I don't come in with a playbook and force it on your business.</p>
            <p>
              I start by understanding how work actually gets done—not how it's supposed to
              work on paper.
            </p>
            <p>
              I'm not looking for what should be happening—I'm looking for where things
              are quietly breaking down.
            </p>
            <p>That's where the real issues show up:</p>
            <ul className="space-y-3 border-l-2 border-brand-strong pl-6">
              {[
                "work getting stuck",
                "too many handoffs",
                "unclear ownership",
                "problems no one has clearly defined",
              ].map((item) => (
                <li key={item} className="text-foreground">
                  {item}
                </li>
              ))}
            </ul>
            <p>Then we fix it in a way your team can actually run with.</p>
            <p className="text-foreground font-medium">
              No overcomplication. No unnecessary frameworks. Just clear, practical
              improvements your team can actually run with.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIWork;
