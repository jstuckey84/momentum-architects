import { motion } from "framer-motion";
import { Package, FileText, AlertTriangle, BarChart3 } from "lucide-react";

const toolkits = [
  {
    icon: Package,
    name: "Governance-in-a-Box™",
    description: "Pre-built governance framework ready for immediate deployment. Policies, procedures, and board-ready documentation.",
  },
  {
    icon: FileText,
    name: "Process Documentation Starter Kit",
    description: "SOP templates, workflow maps, and documentation standards to systematize any operation in weeks, not months.",
  },
  {
    icon: AlertTriangle,
    name: "Risk Mapping Templates",
    description: "Identify, categorize, and mitigate operational risks with our proprietary risk assessment framework.",
  },
  {
    icon: BarChart3,
    name: "Operational Scorecard Dashboard",
    description: "Track the metrics that matter. KPI frameworks and dashboards designed for operational leaders.",
  },
];

const Toolkits = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Digital Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Operational Toolkits<br />
            <span className="text-muted-foreground">Designed for Execution.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkits.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-6 hover:border-brand transition-colors"
            >
              <tool.icon className="w-5 h-5 text-primary mb-5" />
              <h3 className="text-base font-bold mb-2 tracking-tight">{tool.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkits;
