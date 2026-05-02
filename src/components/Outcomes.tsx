import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Less rework and fewer mistakes",
  "Clear ownership across your team",
  "Faster execution without constant follow-ups",
  "Reduced operational risk",
  "Better visibility into how your business actually runs",
];

const Outcomes = () => {
  return (
    <section id="outcomes" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Outcomes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What This<br />
            <span className="text-gradient-brand">Changes.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 bg-card border border-brand rounded-sm p-6 hover:border-brand-strong transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
