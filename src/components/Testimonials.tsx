import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Process Dream didn't just diagnose our problems — they rebuilt our entire operational foundation. Revenue is up 40% and our team finally has clarity.",
    name: "Sarah Chen",
    title: "COO",
    company: "Meridian Manufacturing",
  },
  {
    quote:
      "Their Governance Blueprint transformed how our leadership team makes decisions. We went from reactive firefighting to proactive strategy in 90 days.",
    name: "James Okafor",
    title: "CEO",
    company: "Apex Logistics Group",
  },
  {
    quote:
      "As a growing business, we needed structure without bureaucracy. The Small Business Operating System gave us exactly that — scalable, simple, and effective.",
    name: "Maria Vasquez",
    title: "Founder",
    company: "Solara Health",
  },
];

const trustedBy = [
  "Meridian Manufacturing",
  "Apex Logistics Group",
  "Solara Health",
  "NovaTech Industries",
  "Redstone Capital",
  "Pinnacle Systems",
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients<br />
            <span className="text-gradient-brand">Say About Us.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-gradient border border-brand rounded-sm p-8 flex flex-col justify-between glow-brand hover:border-brand-strong transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/30 mb-5" />
                <p className="text-foreground leading-relaxed text-[15px] mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-brand pt-5">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {t.title}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mb-10">
            Trusted by forward-thinking organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-muted-foreground/50 font-semibold text-sm tracking-wide uppercase hover:text-muted-foreground transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
