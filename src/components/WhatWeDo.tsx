import { motion } from "framer-motion";

const issues = [
  "Unclear ownership",
  "Broken or inconsistent processes",
  "Hidden risks that no one has fully mapped out",
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
            Fix What's Slowing<br />
            <span className="text-gradient-brand">Your Business Down.</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Most operational problems aren't obvious. They show up as delays, confusion,
              rework, and constant follow-ups.
            </p>
            <p>Underneath that, there are usually a few core issues:</p>

            <ul className="space-y-3 border-l-2 border-brand-strong pl-6">
              {issues.map((issue) => (
                <li key={issue} className="text-foreground">
                  {issue}
                </li>
              ))}
            </ul>

            <p>
              We help you identify those issues quickly—and fix them in a way your team can
              actually execute.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
