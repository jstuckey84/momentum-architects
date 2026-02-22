import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Execution Over Theory.<br />
            <span className="text-gradient-gold">Structure Over Noise.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not consultants who hand you a deck and disappear. We're operators who've built, 
              scaled, and restructured organizations from the inside out.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our frameworks are born from real operational challenges — not MBA textbooks. 
              Every engagement is designed to leave your organization stronger, faster, and more resilient.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gold pt-16">
            {[
              { value: "200+", label: "Engagements Delivered" },
              { value: "15+", label: "Years of Experience" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
