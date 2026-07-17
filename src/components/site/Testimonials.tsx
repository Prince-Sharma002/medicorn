import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    company: "Omkar Hospital",
    name: "Rajendraprasad B.",
    role: "Senior Marketing Manager",
    quote: "MocDoc is one of the best software in the Hospital management space and it is very easy to use. Regular updates keep us up to date on the latest features.",
  },
  {
    company: "Health Plus",
    name: "Sanjana Verma",
    role: "Operations Head",
    quote: "The transition to MocDoc was seamless. Our appointment flow and billing cycles are now noticeably faster across all branches.",
  },
  {
    company: "Dhruthi Hospital",
    name: "Dr. Karthik R.",
    role: "Medical Director",
    quote: "A dependable partner. Support is quick and the platform keeps evolving with real clinical needs in mind.",
  },
  {
    company: "Zens Medical",
    name: "Alisha Kumar",
    role: "Clinic Manager",
    quote: "From patient records to inventory, everything is in one place. Our staff onboarding time reduced dramatically.",
  },
];

const AUTOPLAY_MS = 5000;

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + total) % total);
  const t = testimonials[i];

  // Auto-scroll effect
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setI((v) => (v + 1) % total);
    }, AUTOPLAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total]);

  // Manual navigation resets/pauses briefly so it doesn't fight the user
  const handleManualNav = (fn: () => void) => {
    fn();
    setPaused(true);
    setTimeout(() => setPaused(false), AUTOPLAY_MS);
  };

  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Client says it Best !</h2>
          <div className="flex flex-col items-center rounded-md bg-[#12224a] px-4 py-2 text-white shadow-md">
            <span className="text-[10px] font-medium">What our users think</span>
            <span className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="mt-1 text-[10px] opacity-80">crozdesk</span>
          </div>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            aria-label="Previous"
            onClick={() => handleManualNav(() => go(-1))}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-white p-2 shadow-sm hover:bg-muted sm:-left-4"
          >
            <ChevronLeft className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
          </button>
          <button
            aria-label="Next"
            onClick={() => handleManualNav(() => go(1))}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-white p-2 shadow-sm hover:bg-muted sm:-right-4"
          >
            <ChevronRight className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
          </button>

          <div className="relative overflow-hidden rounded-2xl border-3 border-[var(--brand-orange)]/80 bg-white px-6 py-10 sm:px-12">
            <Quote className="absolute left-6 top-6 h-8 w-8 rotate-180 text-[var(--brand-orange)]/20" />
            <Quote className="absolute bottom-6 right-6 h-8 w-8 text-[var(--brand-orange)]/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center"
              >
                <div className="mx-auto flex h-32 w-32 items-center justify-center">
                  <ChatBubbles />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold" style={{ color: "var(--brand-orange)" }}>{t.company}</h3>
                  <div className="mt-1 font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                  <p className="mt-4 max-w-2xl text-foreground/80">{t.quote}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--brand-orange)" }}>
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                aria-label={`Go to slide ${k + 1}`}
                onClick={() => handleManualNav(() => setI(k))}
                className={`h-2.5 rounded-full transition-all ${k === i ? "w-6 bg-[var(--brand-orange)]" : "w-2.5 bg-border hover:bg-muted-foreground/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubbles() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
      <g transform="rotate(-8 60 60)">
        <rect x="6" y="18" width="72" height="46" rx="10" fill="var(--brand-orange)" />
        <circle cx="24" cy="41" r="10" fill="white" opacity="0.9" />
        <g fill="#FFEF91">
          {[0,1,2,3,4].map((k) => (
            <polygon key={k} points={`${40 + k*7},32 ${42 + k*7},38 ${48 + k*7},38 ${43 + k*7},42 ${45 + k*7},48 ${40 + k*7},44 ${35 + k*7},48 ${37 + k*7},42 ${32 + k*7},38 ${38 + k*7},38`} />
          ))}
        </g>
      </g>
      <g transform="rotate(6 60 70)">
        <rect x="40" y="52" width="72" height="46" rx="10" fill="#2ED3D0" />
        <circle cx="58" cy="75" r="10" fill="white" opacity="0.9" />
        <g fill="#FFEF91">
          {[0,1,2,3,4].map((k) => (
            <polygon key={k} points={`${74 + k*7},66 ${76 + k*7},72 ${82 + k*7},72 ${77 + k*7},76 ${79 + k*7},82 ${74 + k*7},78 ${69 + k*7},82 ${71 + k*7},76 ${66 + k*7},72 ${72 + k*7},72`} />
          ))}
        </g>
      </g>
    </svg>
  );
}