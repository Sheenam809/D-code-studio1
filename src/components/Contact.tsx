import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Web Design & Development",
  "Branding & Identity",
  "Photography & Videography",
  "Social Media Management",
  "SEO Optimization",
  "Performance Marketing",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }
  };

  const inputClass = "w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">Contact</span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            Let's start a <span className="gradient-text">conversation</span>
          </h2>
        </motion.div>

        {/* Contact info row */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { icon: Mail, label: "hello@dcodewebstudio.com", href: "mailto:hello@dcodewebstudio.com" },
            { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: MapPin, label: "Ahmedabad, India" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/10">
                <item.icon size={14} className="text-primary" />
              </div>
              {item.href ? (
                <a href={item.href} className="text-xs hover:text-foreground transition-colors">{item.label}</a>
              ) : (
                <span className="text-xs">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md mx-auto">
          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card rounded-2xl p-8 text-center">
              <CheckCircle size={36} className="text-primary mx-auto mb-3" />
              <h3 className="text-base font-semibold font-heading mb-1">Message Sent!</h3>
              <p className="text-xs text-muted-foreground">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-3 text-xs text-primary hover:underline">Send another message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-5 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="John Doe" />
                  {errors.name && <p className="text-[10px] text-destructive mt-0.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="john@example.com" />
                  {errors.email && <p className="text-[10px] text-destructive mt-0.5">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+1 234 567 890" />
                </div>
                <div>
                  <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${inputClass} appearance-none`}>
                    <option value="">Select</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1 block">Message *</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                {errors.message && <p className="text-[10px] text-destructive mt-0.5">{errors.message}</p>}
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-300 active:scale-[0.97] w-full justify-center" style={{ background: "var(--gradient-primary)" }}>
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
