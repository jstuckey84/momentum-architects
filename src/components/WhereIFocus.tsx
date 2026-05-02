import { motion } from "framer-motion";
import { Building2, Headset } from "lucide-react";

const focusAreas = [
  {
    icon: Building2,
    name: "Financial Operations",
    intro: "Teams inside banks, credit unions, and financial organizations dealing with:",
    points: [
      "complex internal processes across departments",
      "delays in onboarding, servicing, or internal approvals",
      "operational risk created by handoffs and unclear ownership",
    ],
  },
  {
    icon: Headset,
    name: "Call Center & Service Operations",
    intro: "Customer support and contact center teams dealing with:",
    points: [
      "high volume and inconsistent execution",
      "repeated follow-ups and escalations",
      "unclear ownership between teams",
    ],
  },
];

const WhereIFocus = () => {
  return (
    <section id="where-i-focus" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Where I Focus
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Fixing Operational Breakdowns<br />
            <span className="text-gradient-brand">Where They Matter Most.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            I work with teams where breakdowns don't just slow things down—they create
            delays, rework, and unnecessary operational risk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-gradient border border-brand rounded-sm p-8 md:p-10 hover:border-brand-strong transition-colors glow-brand"
            >
              <area.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">{area.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{area.intro}</p>
              <ul className="space-y-2">
                {area.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-foreground/90 leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground/80 text-sm italic mt-10 text-center max-w-2xl mx-auto"
        >
          This work focuses on how operations run—not financial products or regulatory advisory.
        </motion.p>
      </div>
    </section>
  );
};

export default WhereIFocus;
