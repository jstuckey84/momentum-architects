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
            <span className="text-gradient-brand">Structure Over Noise.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-left md:text-center">
            <p className="text-muted-foreground text-lg leading-relaxed">
              This isn't traditional consulting.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I've spent years working inside organizations—identifying where processes break
              down, where risk shows up, and why teams struggle to execute.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Process Dream Company was built to bring that same level of clarity to
              businesses without the bureaucracy.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every engagement is designed to leave your operations clearer, faster, more
              structured, and easier to manage.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto border-t border-brand pt-16">
            {[
              { value: "19+", label: "Years of Experience" },
              { value: "$2.5M+", label: "In Cost Savings Identified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gradient-brand mb-2">{stat.value}</p>
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
