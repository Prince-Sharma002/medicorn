import { motion } from "framer-motion";
import { PlayCircle, Sparkles } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-orange)]/30 bg-[color-mix(in_oklab,var(--brand-orange)_10%,white)] px-3 py-1 text-xs font-semibold text-[var(--brand-orange)]"
          >
            <Sparkles className="h-3.5 w-3.5" /> NABH Advanced Certified · HIPAA & ISO 27001
          </motion.span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
            One Stop <br />
            Digital <span className="text-gradient-brand">Healthcare</span> <br />
            Solution for Clinics <br />
            &amp; Hospitals
            <svg className="ml-3 inline-block h-6 w-16 translate-y-[-2px]" viewBox="0 0 60 20" fill="none" stroke="#e8a87c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 0 10 L 15 10 L 18 4 L 22 16 L 27 2 L 32 18 L 36 10 L 60 10" />
            </svg>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Empowering healthcare stakeholders with cutting-edge, secure and innovative software products — trusted across 10+ countries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#demo" className="btn-primary px-6 py-3 text-sm font-semibold">Book a Demo</a>
            <a href="#contact" className="btn-outline px-6 py-3 text-sm font-semibold">Contact Us</a>
            <a href="#video" className="group inline-flex items-center gap-2 rounded-lg px-2 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-[var(--brand-orange)]">
              <PlayCircle className="h-5 w-5 transition-transform group-hover:scale-110" style={{ color: "var(--brand-orange)" }} />
              Watch product tour
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-medium text-muted-foreground">
            <div className="flex -space-x-2">
              {["#FFA02E","#468432","#9AD872","#12224a"].map((c, i) => (
                <span key={i} className="h-8 w-8 rounded-full ring-2 ring-background" style={{ background: c }} />
              ))}
            </div>
            <span>1,500+ clinics & hospitals onboard</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto flex aspect-square w-full max-w-lg items-end justify-center isolate"
        >
          <div className="absolute inset-0 z-0">
            {/* Light grey/beige blob on the left */}
            <div className="absolute left-[-6%] top-[12%] h-[78%] w-[78%] rounded-[55%_45%_45%_55%/60%_50%_50%_40%] bg-[#ebebec]" />
            {/* Orange blob on the right */}
            <div className="absolute right-[-2%] top-[6%] h-[82%] w-[82%] rounded-[40%_60%_35%_65%/50%_40%_60%_50%] bg-[#e15e12]" />
          </div>
          <img src={heroDoctor} alt="Doctor holding a laptop" className="relative z-10 h-full w-full object-contain drop-shadow-2xl" />

          {/* Hand-drawn style spark lines to the right of the laptop */}
          <div className="absolute right-[12%] bottom-[20%] z-20 pointer-events-none">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="opacity-90">
              {/* Top ray */}
              <line x1="8" y1="20" x2="22" y2="10" />
              {/* Upper middle ray */}
              <line x1="6" y1="26" x2="26" y2="22" />
              {/* Lower middle ray */}
              <line x1="8" y1="32" x2="28" y2="34" />
              {/* Bottom ray */}
              <line x1="12" y1="38" x2="24" y2="44" />
            </svg>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="absolute left-0 top-8 z-20 hidden animate-floaty rounded-2xl border border-border bg-white/90 p-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[color-mix(in_oklab,var(--brand-green)_15%,white)]">
              <span className="text-lg">💚</span>
            </div>
            <div>
              <div className="text-xs font-semibold">99.99% Uptime</div>
              <div className="text-[10px] text-muted-foreground">Cloud reliability</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            style={{ animationDelay: "-2.5s" }}
            className="absolute -bottom-2 right-0 z-20 hidden animate-floaty rounded-2xl border border-border bg-white/90 p-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[color-mix(in_oklab,var(--brand-orange)_15%,white)]">
              <span className="text-lg">⚡</span>
            </div>
            <div>
              <div className="text-xs font-semibold">30k+ Doctors</div>
              <div className="text-[10px] text-muted-foreground">Trust MocDoc daily</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
