import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tiers = [
  { name: "Operational Assessment", qualifier: "Starting at", figure: "$1,500" },
  { name: "Implementation Projects", qualifier: "Typically", figure: "$5,000–$15,000" },
  { name: "Operational Transformation Engagements", qualifier: "Starting at", figure: "$15,000" },
  { name: "Fractional Operations Leadership", qualifier: "Starting at", figure: "$1,500 per month" },
];

const Investment = () => {
  return (
    <section id="investment" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What Engagements<br />
            <span className="text-muted-foreground">Typically Look Like.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Every engagement is shaped around your business, priorities, and level of
            operational complexity. The ranges below provide a practical starting point,
            so you can determine whether Process Dream Company is the right fit before
            scheduling a conversation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card-gradient border border-brand rounded-sm p-8 glow-brand"
            >
              <h3 className="text-lg font-bold tracking-tight mb-4 text-balance">
                {tier.name}
              </h3>
              <p className="text-xs uppercase tracking-wide text-primary font-medium mb-1">
                {tier.qualifier}
              </p>
              <p className="text-2xl md:text-3xl font-bold tracking-tight break-words">
                {tier.figure}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-muted-foreground leading-relaxed">
            After an initial discovery conversation, we will recommend the engagement that
            best fits your needs. You will receive a clear scope, defined deliverables,
            timeline, and fixed-price proposal before any work begins.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity rounded-sm mt-8"
          >
            Schedule a Discovery Conversation
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-sm text-muted-foreground mt-4">
            Not sure where to begin? We'll help you identify the most practical starting point.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;
