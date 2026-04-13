import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AetherContact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-wide">
              Ready to secure your AI infrastructure?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Book a demo to see how Aether provides identity, intent verification,
              and control for every AI agent in your organisation.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@aether.security"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                contact@aether.security
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Schedule via the form →</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <Label htmlFor="name" className="text-sm text-muted-foreground mb-1.5 block">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm text-muted-foreground mb-1.5 block">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your use case..."
                rows={4}
                className="bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full gradient-primary text-primary-foreground font-semibold gap-2 hover:shadow-glow"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending…" : "Book a Demo"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
