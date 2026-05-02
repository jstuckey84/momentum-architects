import { motion } from "framer-motion";

const symptoms = [
  "constant follow-ups",
  "work getting stuck",
  "things falling through the cracks",
  "inconsistent handling of the same request",
];

const issues = [
  "unclear ownership",
  "broken or inconsistent processes",
  "too many handoffs",
  "lack of visibility into how work actually flows",
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Identify What's Breaking<br />
            <span className="text-gradient-brand">— Then Fix It.</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>Most operational problems don't show up as one big issue. They show up as:</p>

            <ul className="space-y-3 border-l-2 border-brand-strong pl-6">
              {symptoms.map((s) => (
                <li key={s} className="text-foreground">
                  {s}
                </li>
              ))}
            </ul>

            <p>Underneath that, there are usually a few core problems:</p>

            <ul className="space-y-3 border-l-2 border-brand-strong pl-6">
              {issues.map((issue) => (
                <li key={issue} className="text-foreground">
                  {issue}
                </li>
              ))}
            </ul>

            <p>
              I focus on operational risk — the breakdowns in how work is executed that lead
              to delays, errors, and unnecessary exposure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
