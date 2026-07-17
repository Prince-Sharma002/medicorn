import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Settings, FileText, Cloud, Monitor, MapPin, Wallet } from "lucide-react";
import { features } from "@/data/mocdoc";

const iconMap = {
  settings: Settings,
  file: FileText,
  cloud: Cloud,
  devices: Monitor,
  pin: MapPin,
  wallet: Wallet,
} as const;

/* ─────────────────────────────────────────
   Connector lines drawn as inline SVGs
   that sit BETWEEN each card and the circle.
   We render them inside each row's wrapper
   so positioning is always accurate.
───────────────────────────────────────── */

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[color-mix(in_oklab,var(--brand-yellow)_20%,white)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Top Healthcare Software For{" "}
            <span style={{ color: "var(--brand-orange)" }}>Simplified</span> Hospital Operations
          </h2>
          <h3 className="mt-6 font-display text-lg font-semibold sm:text-xl">
            Is Outdated Technology Slowing You Down?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Upgrade to MocDoc, the cloud-based, fully integrated, secure, and reliable healthcare
            management suite. Simplify and optimize your healthcare operations today.
          </p>
        </div>

        {/* 3-column diagram */}
        <div
          ref={sectionRef}
          className="mx-auto mt-16 max-w-6xl hidden lg:grid"
          style={{ gridTemplateColumns: "1fr 200px 1fr", alignItems: "center", gap: "0" }}
        >
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-5 pr-4">
            {features.slice(0, 3).map((f, i) => (
              <FeatureCard key={f.title} feature={f} align="left" delay={i * 0.12} inView={inView} />
            ))}
          </div>

          {/* ── CENTRE CIRCLE ── */}
          <div className="relative flex flex-col items-center justify-center py-10">
            {/* Cloud above */}
            <div className="mb-3 text-5xl opacity-50 select-none leading-none">☁</div>

            {/* Outer glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: 168,
                height: 168,
                background: "color-mix(in oklab, var(--brand-orange) 10%, white)",
                boxShadow: "0 0 0 1px color-mix(in oklab, var(--brand-orange) 25%, transparent), 0 8px 32px -8px color-mix(in oklab, var(--brand-orange) 30%, transparent)",
              }}
            />
            {/* Main circle */}
            <div
              className="relative z-10 flex flex-col items-center justify-center rounded-full bg-white shadow-lg"
              style={{
                width: 136,
                height: 136,
                border: "4px solid var(--brand-orange)",
              }}
            >
              <span className="font-display text-[22px] font-bold leading-none">
                <span style={{ color: "#2d2420" }}>Moc</span>
                <span style={{ color: "var(--brand-orange)" }}>Doc</span>
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                Healthcare
              </span>
            </div>

            {/* Gear below */}
            <div className="mt-3 text-5xl opacity-40 select-none leading-none">⚙</div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-5 pl-4">
            {features.slice(3).map((f, i) => (
              <FeatureCard key={f.title} feature={f} align="right" delay={i * 0.12} inView={inView} />
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="mt-8 flex flex-col gap-4 lg:hidden">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} align="left" delay={i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  align,
  delay,
  inView,
}: {
  feature: (typeof features)[number];
  align: "left" | "right";
  delay: number;
  inView: boolean;
}) {
  const Icon = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      whileHover={{
        scale: 1.09,
        boxShadow: "0 16px 48px -16px rgba(255,160,46,0.45)",
        borderColor: "var(--brand-orange)",
      }}
      className="group relative flex items-center gap-3 rounded-lg border border-[var(--brand-orange)]/35 bg-white px-4 py-3.5 shadow-sm cursor-default"
      style={{ transformOrigin: align === "left" ? "left center" : "right center" }}
    >
      {/* RIGHT cards: text first (right-aligned), then icon facing center */}
      {align === "right" && (
        <div className="min-w-0 flex-1 text-right">
          <h4 className="font-display text-sm font-bold leading-tight text-foreground">
            {feature.title}
          </h4>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
        </div>
      )}

      {/* Icon box */}
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-md transition-colors duration-200"
        style={{
          background: "color-mix(in oklab, var(--brand-orange) 12%, white)",
        }}
      >
        <Icon
          className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
          style={{ color: "var(--brand-orange)" }}
        />
      </div>

      {/* LEFT cards: text after icon */}
      {align === "left" && (
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-sm font-bold leading-tight text-foreground">
            {feature.title}
          </h4>
          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
        </div>
      )}

      {/* Orange connector dot on the inner edge */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[var(--brand-orange)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          align === "left" ? "-right-1.5" : "-left-1.5"
        }`}
      />
    </motion.div>
  );
}
