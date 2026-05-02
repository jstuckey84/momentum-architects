import { motion } from "framer-motion";

const points = [
  "I don't just map processes — I find where they actually break.",
  "I don't hand over reports — I help fix what's not working.",
  "I connect operations, execution, and operational risk so improvements actually stick.",
];

const WhatMakesDifferent = () => {
  return (
    <section id="what-makes-different" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            What Makes This Different
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
            Most consultants analyze<br />
            <span className="text-gradient-brand">and recommend.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I do something different.
          </p>

          <ul className="space-y-4 mb-10">
            {points.map((p) => (
              <li
                key={p}
                className="text-foreground text-lg leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-primary"
              >
                {p}
              </li>
            ))}
          </ul>

          <p className="text-foreground font-medium text-lg">
            This is about clarity you can act on — not theory that sits on a shelf.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;
