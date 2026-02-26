import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical engagement last?",
    answer:
      "It depends on the package. The Clarity Diagnostic™ runs 2–4 weeks, while our operating system builds can span 3–6 months. Every engagement starts with a scoping call so there are no surprises.",
  },
  {
    question: "Do you work with companies of all sizes?",
    answer:
      "We primarily serve mid-market companies and growth-stage businesses — typically teams of 20 to 500. If you're a smaller team, The Small Business Operating System™ was built specifically for you.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our roots are in manufacturing and logistics, but our frameworks are industry-agnostic. We've delivered results across healthcare, professional services, technology, and consumer goods.",
  },
  {
    question: "How is Process Dream different from traditional consulting firms?",
    answer:
      "We don't deliver slide decks and walk away. Every engagement produces actionable deliverables — governance architectures, SOPs, playbooks — and we stay involved through implementation to ensure adoption.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Each engagement is scoped and priced based on complexity and duration. We offer fixed-fee packages so you always know the investment upfront. Reach out and we'll provide a tailored proposal within 48 hours.",
  },
  {
    question: "Can you work with our existing team and tools?",
    answer:
      "Absolutely. We integrate with your current workflows, tech stack, and team structure. Our goal is to strengthen what you have — not replace it.",
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
