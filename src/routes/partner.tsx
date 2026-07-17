import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  ChevronRight, Handshake, Globe, TrendingUp, ShieldCheck,
  BarChart2, Users, Check, ArrowRight, Mail, Phone
} from "lucide-react";

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Partner with Us | MocDoc — Healthcare Solutions" },
      { name: "description", content: "Partner with MocDoc to grow your business and revolutionize healthcare together." },
    ],
  }),
});

const benefits = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Revenue Growth",
    desc: "Unlock new revenue streams by reselling or integrating MocDoc's market-leading healthcare management platform.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Reach",
    desc: "Leverage MocDoc's presence across 10+ countries and 50+ cities to expand your market footprint.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Trusted Brand",
    desc: "Align with a NABH-certified, award-winning brand trusted by 1500+ healthcare organizations worldwide.",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "Co-Marketing Support",
    desc: "Get dedicated marketing collateral, co-branded campaigns, and lead generation support from our team.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Dedicated Partner Success",
    desc: "A dedicated partner success manager ensures you have everything you need to close deals and delight customers.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Flexible Models",
    desc: "Choose from Referral, Reseller, or Technology Integration partnership models tailored to your business.",
  },
];

const tiers = [
  {
    name: "Referral Partner",
    color: "border-[#ffe6d4] bg-[#fff7f0]",
    badge: "bg-[#ffe6d4] text-[#c25100]",
    perks: ["Refer leads and earn commissions", "Access to partner portal", "Co-branded marketing kit", "Dedicated support contact"],
  },
  {
    name: "Reseller Partner",
    color: "border-[#c25100] bg-white shadow-xl ring-2 ring-[#c25100]/20",
    badge: "bg-[#c25100] text-white",
    perks: ["Resell MocDoc under your brand", "Higher revenue share", "Priority onboarding & training", "Co-marketing campaigns", "Quarterly business reviews"],
    featured: true,
  },
  {
    name: "Technology Partner",
    color: "border-purple-200 bg-[#f8f3ff]",
    badge: "bg-purple-100 text-purple-700",
    perks: ["API & SDK integration access", "Joint product development", "Listed on MocDoc marketplace", "Technical co-selling support"],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export function PartnerPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", model: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#fff7f0] border-b border-[#ffe6d4]/60 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm font-semibold">
          <Link to="/" className="text-[#c25100] hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 text-[#c25100]/60" />
          <span className="text-[#c25100]/60">Partner with Us</span>
        </div>
      </div>

      <main>
        {/* ── Hero ── */}
        <section className="bg-[#fff7f0] py-20 lg:py-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-[#ffe6d4] text-[#c25100] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Grow Together
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                Partner with <span className="text-[#c25100]">MocDoc</span> &amp; <br />
                Transform <span className="text-[#c25100]">Healthcare</span>
              </h1>
              <p className="text-base text-muted-foreground font-semibold leading-relaxed mb-8 max-w-lg">
                Join MocDoc's growing partner ecosystem and unlock new revenue opportunities. Whether you're a consultant, technology provider, or healthcare organization — there's a partnership model built for you.
              </p>
              <a href="#partner-form" className="inline-flex items-center gap-2 btn-primary px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:-translate-y-0.5 transition-transform">
                Become a Partner <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Visual: Partnership Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-[#ffe6d4]/60 animate-ping opacity-20" />
                <div className="absolute inset-8 rounded-full bg-[#ffe6d4]/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-[#c25100] flex items-center justify-center shadow-xl">
                      <Handshake className="w-10 h-10 text-white" />
                    </div>
                    <span className="font-extrabold text-[#c25100] text-sm tracking-wide">MocDoc Partners</span>
                  </div>
                </div>
                {/* Orbiting dots */}
                {["💊","🏥","🔬","💻"].map((emoji, i) => {
                  const angle = (i / 4) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 40 * Math.cos(rad);
                  const y = 50 + 40 * Math.sin(rad);
                  return (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      className="absolute w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg"
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                    >
                      {emoji}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Why Partner with MocDoc ── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                Why Partner with <span className="text-[#c25100]">MocDoc?</span>
              </h2>
              <p className="text-muted-foreground font-semibold max-w-2xl mx-auto">
                Our partner program is designed to create mutual value and help you grow with the most trusted healthcare management platform in Asia.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border p-7 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#fff7f0] flex items-center justify-center text-[#c25100] mb-5">
                    {b.icon}
                  </div>
                  <h3 className="font-extrabold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-semibold leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partnership Tiers ── */}
        <section className="py-20 bg-muted/20 border-y border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                Choose Your <span className="text-[#c25100]">Partnership Model</span>
              </h2>
              <p className="text-muted-foreground font-semibold max-w-xl mx-auto">
                Flexible tiers designed to match where you are and where you want to go.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {tiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`border-2 ${tier.color} p-8 rounded-3xl flex flex-col gap-5 relative`}
                >
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c25100] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow">
                      Most Popular
                    </div>
                  )}
                  <span className={`inline-block self-start text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${tier.badge}`}>
                    {tier.name}
                  </span>
                  <ul className="space-y-3 flex-1">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-muted-foreground">
                        <Check className="w-4 h-4 text-[#c25100] shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#partner-form" className={`btn-primary w-full py-3 rounded-xl text-sm font-bold text-center block mt-auto ${!tier.featured ? "opacity-80" : ""}`}>
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner Inquiry Form ── */}
        <section id="partner-form" className="py-20 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                Start Your <span className="text-[#c25100]">Partnership Journey</span>
              </h2>
              <p className="text-muted-foreground font-semibold">Fill in your details and our partner team will reach out within 24 hours.</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-extrabold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700 font-semibold">Your partnership inquiry has been received. Our team will contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border shadow-xl rounded-3xl p-8 sm:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-foreground">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="John Smith"
                      className="px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-foreground">Company Name *</label>
                    <input required name="company" value={form.company} onChange={handleChange} placeholder="HealthTech Inc."
                      className="px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-foreground">Business Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
                      className="px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-foreground">Phone Number *</label>
                    <input required name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                      className="px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-foreground">Partnership Model *</label>
                  <select required name="model" value={form.model} onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-border bg-card focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm">
                    <option value="">Please Select</option>
                    <option>Referral Partner</option>
                    <option>Reseller Partner</option>
                    <option>Technology Partner</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-foreground">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your business and how you'd like to partner..."
                    className="px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-[#c25100] focus:outline-none text-sm resize-none" />
                </div>
                <button type="submit" className="w-full btn-primary py-4 rounded-xl font-bold text-base shadow-lg">
                  Submit Partnership Inquiry
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── Quick Contact Strip ── */}
        <section className="bg-[#fff7f0] border-t border-[#ffe6d4] py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffe6d4] flex items-center justify-center text-[#c25100]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Us</p>
                <a href="mailto:partners@mocdoc.net" className="text-sm font-extrabold text-foreground hover:text-[#c25100] transition-colors">partners@mocdoc.net</a>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffe6d4] flex items-center justify-center text-[#c25100]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Call Us</p>
                <a href="tel:+919360952112" className="text-sm font-extrabold text-foreground hover:text-[#c25100] transition-colors">+91 93609 52112</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
