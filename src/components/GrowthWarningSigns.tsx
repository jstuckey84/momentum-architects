import { motion } from "framer-motion";

const signs = [
  "Everything still flows through leadership.",
  "Training new employees takes too long.",
  "Work gets stuck between people, teams, or locations.",
  "Customers receive different experiences depending on who handles the work.",
  "The same issues keep coming back.",
  "Growth feels harder than it should.",
];

const GrowthWarningSigns = () => {
  return (
    <section id="warning-signs" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Growth Warning Signs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            The Friction You<br />
            <span className="text-gradient-brand">Work Around Every Day.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            Operational problems rarely show up as one big issue. They usually show up as
            daily friction that leaders and teams work around.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {signs.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card-gradient border border-brand rounded-sm p-5 text-foreground leading-relaxed flex gap-3"
              >
                <span className="text-primary font-bold">→</span>
                <span>{s}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-foreground text-lg font-medium leading-relaxed max-w-3xl">
            If this sounds familiar, your business may not have a people problem. It may
            have an operational infrastructure problem.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthWarningSigns;
