import { motion } from "framer-motion";
import { Search, Settings, Handshake } from "lucide-react";

const packages = [
  {
    icon: Search,
    name: "The Clarity Diagnostic™",
    tagline:
      "A focused operational assessment to identify where your processes are slowing down, breaking, or creating risk.",
    deliverables: [
      "Clear visibility into how work actually flows",
      "Top breakdowns and friction points",
      "A prioritized plan to fix what matters most",
    ],
    bestFor:
      "Teams that feel stuck, reactive, or unclear on where the real issues are.",
    note: "Most clients start here before moving into deeper work.",
  },
  {
    icon: Settings,
    name: "Process Breakdown → Rebuild",
    tagline: "We take one critical process and fix it end-to-end.",
    deliverables: [
      "Root cause analysis—what's actually causing the problem",
      "Redesigned workflow your team can follow",
      "Built-in controls and ownership clarity",
      "Simple KPIs to track performance",
    ],
    bestFor: "A specific process that's slowing everything down.",
  },
  {
    icon: Handshake,
    name: "Trusted Operations Advisor",
    tagline:
      "Ongoing support to help you continuously improve operations as your business grows.",
    deliverables: [
      "Monthly deep dives",
      "Real-time problem solving",
      "Process and risk guidance",
      "Decision support when things get complex",
    ],
    bestFor: "Leaders who want a trusted partner, not just a one-time project.",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            How To Work With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Start Where It<br />
            <span className="text-muted-foreground">Makes Sense.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Every business is different—but most clients start in one of three places.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-gradient border border-brand rounded-sm p-8 md:p-10 hover:border-brand-strong transition-colors group glow-brand flex flex-col"
            >
              <pkg.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">{pkg.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{pkg.tagline}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {pkg.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-foreground/90 leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary"
                  >
                    {d}
                  </li>
                ))}
              </ul>

              <div className="border-t border-brand pt-4 space-y-2">
                <p className="text-xs text-primary font-medium tracking-wide uppercase">
                  Best for
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.bestFor}
                </p>
                {pkg.note && (
                  <p className="text-xs text-muted-foreground/80 italic pt-2">
                    {pkg.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
