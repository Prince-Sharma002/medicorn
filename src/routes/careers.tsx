import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import {
  ChevronRight, MapPin, Clock, Check, Users, Lightbulb,
  Award, Zap, BookOpen, Scale, ArrowDown
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | MocDoc — Join Our Team" },
      { name: "description", content: "Join MocDoc and make a difference in healthcare. Explore open positions." },
    ],
  }),
});

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "INNOVATION",
    desc: "We empower our team to think creatively and push boundaries. At MocDoc, your innovative ideas are not just welcomed—they are celebrated.",
    bg: "bg-[#fde8cc]", text: "text-[#c25100]", border: "border-[#f5c88a]",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "QUALITY",
    desc: "We are passionate about delivering the highest quality results. Our commitment to excellence drives us to continually improve and exceed expectations.",
    bg: "bg-[#cef0f0]", text: "text-teal-700", border: "border-teal-200",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "UNITY",
    desc: "Our people are our greatest asset. We believe in fostering a collaborative and supportive environment where every team member is valued and empowered to achieve greatness.",
    bg: "bg-[#e8e0f8]", text: "text-purple-700", border: "border-purple-200",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AGILITY",
    desc: "We thrive in a dynamic environment. Our agile approach allows us to adapt quickly and efficiently to new challenges and opportunities.",
    bg: "bg-[#fce4ec]", text: "text-pink-700", border: "border-pink-200",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "ACCOUNTABILITY",
    desc: "We believe in being accountable and transparent in all that we do. Every team member takes ownership of their work and strives for excellence.",
    bg: "bg-[#d4f5e2]", text: "text-green-700", border: "border-green-200",
  },
];

const devBenefits = [
  {
    title: "Work-Life",
    bold: "Balance",
    desc: "We understand the importance of balance and offer flexible work arrangements to support your personal and professional life.",
    side: "right",
    visual: (
      <div className="relative flex items-center justify-center h-64">
        <div className="absolute w-48 h-48 bg-[#fff1e6] rounded-full" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-[#c25100] rounded-full flex items-center justify-center text-white text-2xl">🧘</div>
          <div className="flex gap-3 mt-2">
            {["💻","⏰","📧","✅","📋"].map((e,i) => (
              <motion.div key={i} animate={{ y: [0,-8,0] }} transition={{ repeat: Infinity, delay: i*0.3, duration: 1.5 }}
                className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-lg">{e}</motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Learning &",
    bold: "Development",
    desc: "We invest in your growth with continuous learning opportunities, workshops, and access to industry-leading resources.",
    side: "left",
    visual: (
      <div className="relative flex items-center justify-center h-64">
        <div className="absolute w-48 h-48 bg-[#e8e0f8] rounded-full" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl">📚</div>
          <div className="flex gap-3 mt-2">
            {["🎯","💡","🏆","📊","🚀"].map((e,i) => (
              <motion.div key={i} animate={{ y: [0,-8,0] }} transition={{ repeat: Infinity, delay: i*0.3, duration: 1.5 }}
                className="w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-lg">{e}</motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const openings = [
  {
    title: "Business Development Executive",
    type: "Full time",
    location: "Chennai",
    desc: "We're seeking candidates with 0-4 years of experience for this role, and fluency in Hindi is mandatory. The role involves mastering our products, securing new clients, maintaining existing relationships, suggesting upgrades, and negotiating deals to drive revenue. Staying updated with market trends and continuously enhancing your skills are key to success.",
  },
  {
    title: "Lead Generation Executive",
    type: "Full time",
    location: "Chennai",
    desc: "We're seeking candidates with experience in international lead generation and B2B outreach, along with strong English communication skills. The role focuses on identifying and qualifying global prospects through email, LinkedIn, and cold-calling, maintaining CRM data, and collaborating with sales to drive pipeline growth.",
  },
  {
    title: "React Developer",
    type: "Full time",
    location: "Chennai",
    desc: "We're looking for a skilled React developer with 2+ years of experience. You will build and maintain high-performance healthcare web applications, collaborate with cross-functional teams, and contribute to a modern, scalable frontend architecture.",
  },
  {
    title: "UI/UX Designer",
    type: "Full time",
    location: "Chennai",
    desc: "We need a creative UI/UX designer passionate about healthcare design. You will craft user-friendly interfaces, conduct usability testing, and ensure design consistency across all MocDoc products.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function CareersPage() {
  const [appliedId, setAppliedId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-[#fff7f0] border-b border-[#ffe6d4]/60 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm font-semibold">
          <Link to="/" className="text-[#c25100] hover:underline">Home</Link>
          <ChevronRight className="h-4 w-4 text-[#c25100]/60" />
          <span className="text-[#c25100]/60">Careers</span>
        </div>
      </div>

      <main>
        {/* ── Section 1: Hero ── */}
        <section className="bg-[#fff7f0] py-16 lg:py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
                  Join <span className="text-[#c25100]">MocDoc</span> and Make a Difference in{" "}
                  <span className="text-[#c25100]">Healthcare</span>
                </h1>
                <p className="text-base text-muted-foreground font-semibold leading-relaxed mb-8 max-w-lg">
                  At MocDoc, we are more than just a startup—we are a passionate, innovative team dedicated to revolutionizing healthcare. We take pride in our work, value diverse perspectives, and are committed to delivering exceptional solutions to our customers.
                </p>
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 btn-primary px-7 py-3.5 rounded-xl font-bold text-base shadow-lg hover:-translate-y-0.5 transition-transform"
                >
                  View Open Positions <ArrowDown className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Hero Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex justify-center items-center"
              >
                <div className="relative w-full max-w-lg">
                  {/* Dashboard panels */}
                  <div className="bg-white rounded-2xl shadow-xl p-4 border border-[#ffe6d4] mb-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 bg-[#fff7f0] rounded-xl p-3 h-28 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="h-2 w-14 bg-[#c25100]/30 rounded" />
                          <div className="h-6 w-6 rounded-full bg-[#c25100]/10" />
                        </div>
                        <svg viewBox="0 0 100 40" className="w-full text-[#c25100]">
                          <polyline points="0,35 20,20 40,28 60,10 80,18 100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <div className="bg-[#c25100] rounded-xl p-3 h-28 flex flex-col justify-between">
                        <div className="h-2 w-10 bg-white/40 rounded" />
                        <div className="text-white text-2xl font-black">40%</div>
                      </div>
                    </div>
                  </div>
                  {/* Team illustration row */}
                  <div className="flex justify-center gap-6 mt-2">
                    {[
                      { color: "bg-slate-700", accent: "bg-[#c25100]" },
                      { color: "bg-[#c25100]", accent: "bg-slate-800" },
                      { color: "bg-teal-600", accent: "bg-[#c25100]" },
                    ].map((p, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className={`w-10 h-10 rounded-full ${p.color} border-2 border-white shadow`} />
                        <div className={`w-8 h-10 ${p.accent} rounded-t-lg`} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Why MocDoc ── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-[#c25100] font-bold text-sm uppercase tracking-widest block mb-3"
              >
                Your Path to Growth
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4"
              >
                Why <span className="text-[#c25100]">MocDoc</span> is the{" "}
                <span className="text-[#c25100]">Perfect Choice</span> for Your Career
              </motion.h2>
              <p className="text-muted-foreground font-semibold max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                At MocDoc, we offer an environment where your innovative ideas can flourish and your career can reach new heights. Join us in transforming the healthcare industry with cutting-edge solutions and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className={`${v.bg} border ${v.border} rounded-2xl p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition-all`}
                >
                  <div className={`${v.text}`}>{v.icon}</div>
                  <h3 className={`font-extrabold text-sm tracking-widest ${v.text}`}>{v.title}</h3>
                  <p className={`text-sm font-semibold leading-relaxed ${v.text} opacity-80`}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3: Professional Development ── */}
        <section className="py-20 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4"
              >
                How <span className="text-[#c25100]">MocDoc</span> Supports Your{" "}
                <span className="text-[#c25100]">Professional Development</span>
              </motion.h2>
              <p className="text-muted-foreground font-semibold max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                At MocDoc, we are committed to fostering an environment where you can thrive both personally and professionally. Here's what we offer to support your success and well-being.
              </p>
            </div>

            <div className="space-y-20">
              {devBenefits.map((b, i) => (
                <motion.div
                  key={b.bold}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${b.side === "left" ? "lg:flex-row-reverse" : ""}`}
                >
                  {b.side === "right" ? (
                    <>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-light text-foreground leading-tight mb-1">{b.title}</h3>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">{b.bold}</h3>
                        <p className="text-muted-foreground font-semibold leading-relaxed max-w-md">{b.desc}</p>
                      </div>
                      {b.visual}
                    </>
                  ) : (
                    <>
                      {b.visual}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-light text-foreground leading-tight mb-1">{b.title}</h3>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-6">{b.bold}</h3>
                        <p className="text-muted-foreground font-semibold leading-relaxed max-w-md">{b.desc}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Join Our Team ── */}
        <section className="bg-[#fff7f0] py-20 border-t border-[#ffe6d4]/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-2"
              >
                Join <span className="text-[#c25100]">Our Team</span>
              </motion.h2>
              <p className="text-muted-foreground font-bold">Fuel Your Passion, Drive Change</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg font-extrabold text-foreground mb-6">
                  We are looking for passionate individuals who:
                </p>
                <ul className="space-y-4">
                  {[
                    "Go the extra mile.",
                    "Enjoy what they do.",
                    "Are eager to learn continuously.",
                    "Want to make a difference every day.",
                    "Believe that big things have small beginnings.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground font-semibold">
                      <Check className="h-5 w-5 text-[#c25100] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Photo collage grid */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { bg: "bg-blue-100", emoji: "👩‍💼👨‍💼", label: "Leadership Team" },
                  { bg: "bg-orange-100", emoji: "🙌🎉", label: "Team Celebrations" },
                  { bg: "bg-slate-100", emoji: "🧩🤝", label: "Collaboration" },
                  { bg: "bg-green-100", emoji: "📊💡", label: "Strategy" },
                ].map((tile, i) => (
                  <motion.div
                    key={i} whileHover={{ scale: 1.03 }}
                    className={`${tile.bg} rounded-2xl flex flex-col items-center justify-center gap-2 aspect-square border border-white shadow-sm`}
                  >
                    <span className="text-3xl">{tile.emoji}</span>
                    <span className="text-xs font-bold text-slate-600">{tile.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Current Openings ── */}
        <section id="openings" className="py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-2"
              >
                Current <span className="text-[#c25100]">Openings</span>
              </motion.h2>
              <p className="text-muted-foreground font-semibold">
                Explore our latest job opportunities and find the perfect role for you
              </p>
            </div>

            <div className="divide-y divide-border border border-border rounded-2xl overflow-hidden shadow-sm">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 p-6 items-center ${i % 2 === 1 ? "bg-[#fff7f0]" : "bg-white"}`}
                >
                  {/* Title + Type */}
                  <div className="md:col-span-3">
                    <p className="font-extrabold text-foreground leading-snug">{job.title}</p>
                    <span className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-muted-foreground">
                      <Clock className="w-3 h-3" /> {job.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="md:col-span-6 text-sm text-muted-foreground font-semibold leading-relaxed">
                    {job.desc}
                  </p>

                  {/* Location + Apply */}
                  <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3">
                    <span className="flex items-center gap-1 text-sm font-bold text-foreground">
                      <MapPin className="w-4 h-4 text-[#c25100]" /> {job.location}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setAppliedId(job.title)}
                      className={`btn-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow transition-all ${appliedId === job.title ? "opacity-70 cursor-default" : ""}`}
                      disabled={appliedId === job.title}
                    >
                      {appliedId === job.title ? "Applied ✓" : "Apply Now"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
