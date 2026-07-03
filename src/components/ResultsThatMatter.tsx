import { motion } from "framer-motion";

const results = [
  {
    title: "Less Rework",
    description:
      "Stop solving the same problems repeatedly by fixing the underlying process issues that cause them.",
  },
  {
    title: "Clear Ownership",
    description:
      "Ensure everyone knows what they own, what comes next, and where work should go when decisions need to be made.",
  },
  {
    title: "Faster Execution",
    description:
      "Reduce delays, bottlenecks, and unnecessary follow-ups so work moves more predictably through the business.",
  },
  {
    title: "Capacity For Growth",
    description:
      "Build systems that allow the business to grow without increasing operational chaos or leadership dependency.",
  },
];

const ResultsThatMatter = () => {
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
            Outcomes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Results That<br />
            <span className="text-muted-foreground">Matter.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Businesses don't hire Process Dream Company for process maps or templates.
            They hire us to eliminate operational friction, improve execution, and create the capacity needed to grow with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-8 hover:border-brand transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 tracking-tight">{result.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{result.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            The deliverables vary by engagement and may include process maps, SOPs, dashboards, governance frameworks, ownership models, and operating routines.
          </p>
          <p className="text-foreground font-semibold text-lg leading-relaxed">
            Those aren't the product.
          </p>
          <p className="text-foreground font-semibold text-lg leading-relaxed">
            Better execution is the product.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsThatMatter;
