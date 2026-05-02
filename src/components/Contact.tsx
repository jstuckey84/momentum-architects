import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  company: z.string().trim().max(100, "Company must be under 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const subject = encodeURIComponent(`Inquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\nCompany: ${result.data.company || "N/A"}\n\n${result.data.message}`
    );
    window.location.href = `mailto:hello@processdream.com?subject=${subject}&body=${body}`;

    toast({ title: "Opening your email client…", description: "Your message details have been pre-filled." });
    setTimeout(() => setSubmitting(false), 2000);
  };

  const inputClass =
    "w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors text-sm";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Start a<br />
            <span className="text-gradient-brand">Conversation.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Most clients start with a Clarity Diagnostic to quickly identify what's not
            working and where to focus first. If something in your operations feels off,
            tell me what's going on — we'll figure out the next step.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <input
                name="name"
                placeholder="Your Name *"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                maxLength={100}
              />
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                maxLength={255}
              />
              {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div>
            <input
              name="company"
              placeholder="Company (optional)"
              value={form.company}
              onChange={handleChange}
              className={inputClass}
              maxLength={100}
            />
            {errors.company && <p className="text-destructive text-xs mt-1.5">{errors.company}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="What's not working in your operations right now? *"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              maxLength={2000}
            />
            {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold tracking-wide text-sm uppercase hover:opacity-90 transition-opacity rounded-sm disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send Message"}
            <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
