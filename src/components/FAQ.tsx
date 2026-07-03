import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "My business is growing, but everything still seems to depend on me. Is that normal?",
    answer:
      "It's common, but it's not sustainable. Growth shouldn't create chaos. When the business depends on a few key people to make decisions, clear blockers, or keep projects moving, you hit a ceiling fast. The real issue usually isn't talent — it's that the underlying structure hasn't caught up to the complexity. We fix what's breaking so the business can scale without burning out the people who built it.",
  },
  {
    question: "How do I know if operational friction is slowing us down?",
    answer:
      "If work keeps stalling at the same handoffs, follow-ups are multiplying, and decisions wait on the same people, friction is already costing you speed and capacity. It's not a people problem. It's a process problem. We start with a Visibility Assessment to map exactly where execution breaks down — so you see the gaps before you commit to a larger build.",
  },
  {
    question: "What types of organizations benefit most from this work?",
    answer:
      "Growth-stage companies and mid-market organizations feeling the strain of scale — typically teams from 20 to 500. If you're adding headcount but output isn't keeping pace, or if leadership is still the bottleneck for day-to-day decisions, you're in the right place. We work with founders and operators who want structure over noise.",
  },
  {
    question: "How is Process Dream Company different from traditional consulting firms?",
    answer:
      "We don't deliver slide decks and walk away. Execution over theory. We build operational infrastructure — governance, workflows, playbooks — and stay involved through implementation until it's actually adopted. Our goal is to make ourselves unnecessary, not permanent.",
  },
  {
    question: "Will this create more work for my team?",
    answer:
      "Short term, there is involvement. Long term, your team gets time back. Most operational drag comes from unclear ownership, repeated rework, and constant status-checking. We reduce that burden by building clear structure, not adding meetings and reports. When the process works, the work flows.",
  },
  {
    question: "What does an engagement typically cost?",
    answer:
      "Each engagement is scoped and priced based on complexity and what you're solving for. We offer fixed-fee packages — from the Visibility Assessment at $1,500+ to full operating system builds — so you always know the investment upfront. No hourly guessing. Reach out and we'll provide a tailored proposal within 48 hours.",
  },
  {
    question: "Do you replace our existing systems or software?",
    answer:
      "No. We integrate with what you already have. Our job is to strengthen your current workflows, tech stack, and team structure — not rip everything out and start over. Fix what's breaking, keep what's working.",
  },
  {
    question: "Are we too small for this kind of work?",
    answer:
      "If you're feeling the pain of growth, you're not too small. Early investment in operational structure prevents much bigger problems at the next stage. We scale our approach to match where you are — from a focused Visibility Assessment for lean teams to full infrastructure builds for complex organizations.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Common<br />
            <span className="text-gradient-brand">Questions.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card-gradient border border-brand rounded-sm px-6 glow-brand hover:border-brand-strong transition-colors data-[state=open]:border-brand-strong"
              >
                <AccordionTrigger className="text-foreground text-left font-semibold text-[15px] py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
