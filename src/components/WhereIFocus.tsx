import { motion } from "framer-motion";

const environments = [
  "multi-team workflows with frequent handoffs",
  "high-volume service or support environments",
  "operations where consistency and execution matter",
  "teams dealing with repeated follow-ups, delays, or rework",
];

const WhereIFocus = () => {
  return (
    <section id="where-i-focus" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Where This Work Applies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Fixing Operational Breakdowns<br />
            <span className="text-gradient-brand">In Complex Environments.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            This work is most valuable in environments where operations are fast-moving,
            complex, and difficult to manage.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            You'll typically see this in:
          </p>

          <ul className="space-y-3 border-l-2 border-brand-strong pl-6 mb-8">
            {environments.map((e) => (
              <li key={e} className="text-foreground leading-relaxed">
                {e}
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            Whether you're running a service team, operations group, or scaling business,
            the pattern is the same:
          </p>
          <p className="text-foreground text-lg font-medium leading-relaxed mb-2">
            Work is happening—but it's not running cleanly.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            That's what we fix.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhereIFocus;
