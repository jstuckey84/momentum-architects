import { motion } from "framer-motion";
import { Search, Shield, Factory, Settings } from "lucide-react";

const packages = [
  {
    icon: Search,
    name: "The Clarity Diagnostic™",
    description: "A rapid operational assessment that identifies friction points, hidden risks, and structural gaps across your organization.",
    deliverable: "Executive report with prioritized action plan",
  },
  {
    icon: Shield,
    name: "The Governance Blueprint™",
    description: "A tailored governance framework designed to align decision-making, accountability, and compliance with your growth trajectory.",
    deliverable: "Custom governance architecture & implementation roadmap",
  },
  {
    icon: Factory,
    name: "The Manufacturing Momentum Model™",
    description: "Purpose-built for manufacturing leaders. We streamline production workflows, quality systems, and supply chain operations.",
    deliverable: "End-to-end operational optimization playbook",
  },
  {
    icon: Settings,
    name: "The Small Business Operating System™",
    description: "A complete operational backbone for growing businesses — from SOPs and team structure to financial controls and reporting.",
    deliverable: "Turnkey operating system with templates & training",
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
            Advisory Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Proprietary Frameworks.<br />
            <span className="text-muted-foreground">Proven Results.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-gradient border border-gold rounded-sm p-8 md:p-10 hover:border-gold-strong transition-colors group glow-gold"
            >
              <pkg.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 tracking-tight">{pkg.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
              <div className="border-t border-gold pt-4">
                <p className="text-sm text-primary font-medium tracking-wide uppercase">
                  {pkg.deliverable}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
