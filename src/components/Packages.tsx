import { motion } from "framer-motion";
import { Search, Settings, TrendingUp, Handshake } from "lucide-react";

const packages = [
  {
    icon: Search,
    name: "Visibility Assessment",
    tagline: "See what's actually happening inside the business.",
    deliverables: [
      "Current-state workflow map",
      "Bottleneck and friction analysis",
      "Prioritized opportunity report",
    ],
    bestFor:
      "Leaders who know something is slowing the business down but are not sure where the real issue starts.",
    investment: "Starting at $1,500",
  },
  {
    icon: Settings,
    name: "Control Build",
    tagline: "Create consistency in how work gets done.",
    deliverables: [
      "SOP development",
      "Process maps",
      "Ownership framework",
      "KPI recommendations",
    ],
    bestFor:
      "Businesses relying too heavily on tribal knowledge, repeated explanations, or inconsistent execution.",
    investment: "Typical engagements $5,000–$10,000",
  },
  {
    icon: TrendingUp,
    name: "Scale System",
    tagline: "Build the operating structure needed to grow with confidence.",
    deliverables: [
      "Governance model",
      "KPI dashboard",
      "Leadership routines",
      "Change management support",
    ],
    bestFor:
      "Organizations adding people, locations, volume, or complexity and needing stronger visibility and governance.",
    investment: "Typical engagements $15,000–$40,000",
  },
  {
    icon: Handshake,
    name: "Strategic Operations Advisor",
    tagline: "Ongoing operational leadership without adding a full-time executive.",
    deliverables: [
      "Monthly advisory support",
      "Operational problem solving",
      "Process and risk guidance",
      "Decision support",
    ],
    bestFor:
      "Leaders who need a trusted partner to help solve operational problems, improve execution, and stay ahead of growth-related complexity.",
    investment: "Starting at $1,500/month",
  },
];

const comparison = [
  ["Visibility Assessment", "To understand where work is breaking", "Visibility"],
  ["Control Build", "To make execution consistent", "Control"],
  ["Scale System", "To build structure for growth", "Scale"],
  ["Strategic Operations Advisor", "To add ongoing operational leadership", "Capacity"],
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
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            How We Help<br />
            <span className="text-muted-foreground">Businesses Scale.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Four ways to work together — from a focused assessment to ongoing operational
            leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
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

              <div className="border-t border-brand pt-4 space-y-3">
                <div>
                  <p className="text-xs text-primary font-medium tracking-wide uppercase mb-1">
                    Best for
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.bestFor}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-primary font-medium tracking-wide uppercase mb-1">
                    Investment
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {pkg.investment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card-gradient border border-brand rounded-sm overflow-hidden glow-brand"
        >
          <div className="p-6 md:p-8 border-b border-brand">
            <h3 className="text-2xl font-bold tracking-tight">Which one fits?</h3>
            <p className="text-muted-foreground text-sm mt-1">
              A quick way to match the right engagement to where the business is right now.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand text-left">
                  <th className="p-4 md:p-6 font-semibold text-foreground">Offer</th>
                  <th className="p-4 md:p-6 font-semibold text-foreground">Best When You Need</th>
                  <th className="p-4 md:p-6 font-semibold text-foreground">Primary Outcome</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([offer, need, outcome]) => (
                  <tr key={offer} className="border-b border-brand last:border-b-0">
                    <td className="p-4 md:p-6 font-medium text-foreground">{offer}</td>
                    <td className="p-4 md:p-6 text-muted-foreground">{need}</td>
                    <td className="p-4 md:p-6 text-primary font-medium">{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
