import { useState } from "react";
import { motion } from "framer-motion";
import { Hospital, Building2, FlaskConical, Pill, ArrowRight } from "lucide-react";
import doctorFemale from "@/assets/doctor-female.jpg";

const toneMap = {
  orange: {
    bg: "#FFF1E4",
    bgBack: "#FFA02E",
    border: "#FFA02E",
    iconColor: "#FFA02E",
    label: "Clinic / Polyclinic",
  },
  blue: {
    bg: "#E7EFFA",
    bgBack: "#4F80C7",
    border: "#4F80C7",
    iconColor: "#4F80C7",
    label: "Hospital",
  },
  pink: {
    bg: "#FBE6EE",
    bgBack: "#C86A97",
    border: "#C86A97",
    iconColor: "#C86A97",
    label: "Laboratory",
  },
  green: {
    bg: "#E6F1E3",
    bgBack: "#468432",
    border: "#468432",
    iconColor: "#468432",
    label: "Pharmacy",
  },
} as const;

const iconMap = {
  clinic: Building2,
  hospital: Hospital,
  lab: FlaskConical,
  pharmacy: Pill,
} as const;

const solutions = [
  {
    title: "Clinic/Polyclinic Management Software",
    body: "MocDoc Clinic Management System provides a complete solution with features such as Appointment Management, OP Case Sheets, Patient Dashboard, and streamlined Billing & Accounting tools.",
    tone: "orange" as const,
    icon: "clinic",
  },
  {
    title: "Hospital Management Software",
    body: "MocDoc Hospital Management System streamlines operations from patient registration to discharge, optimizing clinical workflows and administrative tasks for improved healthcare delivery.",
    tone: "blue" as const,
    icon: "hospital",
  },
  {
    title: "Laboratory Management System",
    body: "MocDoc LMS manages the sample lifecycle from billing to report dispatch, enhancing test execution and workflow efficiency for faster turnaround times and improved accuracy.",
    tone: "pink" as const,
    icon: "lab",
  },
  {
    title: "Pharmacy Management Software",
    body: "MocDoc Pharmacy Management System offers advanced prescription management, real-time inventory tracking, and integrated analytics for efficient stock and customer service.",
    tone: "green" as const,
    icon: "pharmacy",
  },
];

function FlipCard({ s, i }: { s: (typeof solutions)[number]; i: number }) {
  const [flipped, setFlipped] = useState(false);
  const t = toneMap[s.tone];
  const Icon = iconMap[s.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{ perspective: "1200px" }}
      className="h-64 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Inner flipper */}
      <div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl px-5 pb-5 pt-10 shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: t.bg,
            border: `1.5px solid ${t.border}`,
            overflow: "visible",
          }}
        >
          <div
            className="absolute flex items-center justify-center rounded-full bg-white z-10"
            style={{
              top: "-28px",
              left: "20px",
              height: "64px",
              width: "64px",
              border: `2.5px solid ${t.border}`,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <Icon className="h-7 w-7" style={{ color: t.iconColor }} strokeWidth={1.6} />
          </div>

          <h3 className="font-display text-[15px] font-bold leading-snug text-foreground">
            {s.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-foreground/60 line-clamp-4">
            {s.body}
          </p>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 flex flex-col rounded-2xl px-5 pb-5 pt-10 shadow-md"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: t.bgBack,
            overflow: "visible",
          }}
        >
          <div
            className="absolute flex items-center justify-center rounded-full bg-white z-10"
            style={{
              top: "-28px",
              left: "20px",
              height: "64px",
              width: "64px",
              border: "2.5px solid rgba(255,255,255,0.7)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
            }}
          >
            <Icon className="h-7 w-7" style={{ color: t.iconColor }} strokeWidth={1.6} />
          </div>

          <h3 className="font-display text-sm font-bold leading-snug text-white">{s.title}</h3>
          <p className="mt-2 flex-1 text-xs leading-relaxed text-white/90">{s.body}</p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Read More about {t.label} <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Solutions() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Best Cloud-based Healthcare Technology Software &amp; Solutions
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left — doctor image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-md isolate"
          >
            {/* Background blobs — sit behind the framed photo, peeking out at the edges */}
            <div className="absolute inset-0 z-0">
              {/* Solid peach blob, peeks out top-left */}
              <div
                className="absolute rounded-[46%_54%_58%_42%/50%_46%_54%_50%]"
                style={{
                  inset: "0%",
                  backgroundColor: "#FBEBD8",
                }}
              />
              {/* Thick orange ring, offset to the bottom-right so it reads as an open arc behind the frame */}
              <div
                className="absolute rounded-full"
                style={{
                  right: "-8%",
                  bottom: "-8%",
                  height: "70%",
                  width: "70%",
                  border: "16px solid #FFA02E",
                }}
              />
            </div>

            {/* Photo frame — smaller than the container so the blobs show around its edges */}
            <div
              className="absolute overflow-hidden rounded-[2rem] shadow-xl z-10"
              style={{ inset: "9%" }}
            >
              <img
                src={doctorFemale}
                alt="Doctor"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right — 2×2 flip cards */}
          <div className="grid grid-cols-2 gap-10 pt-6">
            {solutions.map((s, i) => (
              <FlipCard key={s.title} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}