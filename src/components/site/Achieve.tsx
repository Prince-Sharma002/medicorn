import { motion } from "framer-motion";
import { Users, TrendingUp } from "lucide-react";
import doctorDesk from "@/assets/doctor-desk.jpg";
import doctorTablet from "@/assets/doctor-tablet.jpg";

const blocks = [
  {
    icon: Users,
    title: "Elevate Patient Experience",
    image: doctorDesk,
    reverse: false,
    points: [
      "Enhance Accessibility with an Online Presence.",
      "Streamline Queue Management for Minimal Wait Times.",
      "Facilitate Follow-ups with Reminders and Notifications.",
      "Enable Multi-Channel Communication: Email, SMS, and WhatsApp.",
      "Continuously Improve through Feedback.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Enhance Operational Efficiency",
    image: doctorTablet,
    reverse: true,
    points: [
      "Automate and Streamline Processes.",
      "Expedite Decision-Making.",
      "Utilize Data Insights for Ongoing Process Improvement.",
      "Foster Communication through Various Channels: Email, SMS, and WhatsApp.",
      "Optimize Care Quality through Workflow Management.",
    ],
  },
];

export function Achieve() {
  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="relative inline-block font-display text-3xl font-bold sm:text-4xl">
            Achieve more with us
            <svg className="absolute -right-8 -top-4 h-6 w-6 text-foreground/70" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 20L20 4M20 4H10M20 4V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Most advanced, Intuitive and Cost-effective solution to keep your business humming.
          </p>
        </div>

        {/* Center dashed timeline */}
        <div className="relative mt-16">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-[var(--brand-orange)]/50 lg:block" />

          <div className="space-y-16">
            {blocks.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <span aria-hidden className="absolute left-1/2 top-1 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--brand-orange)] bg-background lg:block" />

                  <motion.div
                    initial={{ opacity: 0, x: b.reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55 }}
                    className={b.reverse ? "lg:order-2" : ""}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--brand-orange)_14%,white)]">
                      <Icon className="h-6 w-6" style={{ color: "var(--brand-orange)" }} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{b.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {b.points.map((p) => (
                        <li key={p} className="flex gap-3 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: b.reverse ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55 }}
                    className={`relative ${b.reverse ? "lg:order-1" : ""}`}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
                      <img src={b.image} alt={b.title} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
                    </div>
                    {/* floating stat card */}
                    <div className={`absolute ${b.reverse ? "-right-3 bottom-4 sm:right-6" : "-left-3 bottom-4 sm:left-6"} hidden w-64 rounded-xl border border-border bg-white p-4 shadow-lg sm:block`}>
                      {idx === 0 ? <MiniCustomers /> : <MiniChart />}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCustomers() {
  const rows = [
    { name: "Flyod Johntosan", status: "Success", color: "var(--brand-green)" },
    { name: "Flyod Johntosan", status: "Pending", color: "var(--brand-orange)" },
  ];
  return (
    <div>
      <div className="flex justify-between text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        <span>Customer</span><span>Status</span>
      </div>
      <div className="mt-2 space-y-2">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-muted" />
              <div>
                <div className="text-xs font-semibold">{r.name}</div>
                <div className="text-[10px] text-muted-foreground">johntosan@gmail.com</div>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: r.color }} />
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniChart() {
  const bars = [
    { h: 70, c: "var(--brand-orange)", label: "In Progress", v: 34 },
    { h: 45, c: "#5B4EE5", label: "Pending", v: 20 },
    { h: 90, c: "#3AA9F5", label: "Complete", v: 39 },
  ];
  return (
    <div>
      <div className="text-xs font-semibold">Task activity</div>
      <div className="mt-3 flex h-24 items-end justify-around gap-3">
        {bars.map((b) => (
          <div key={b.label} className="w-4 rounded-t" style={{ height: `${b.h}%`, background: b.c }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
        {bars.map((b) => (
          <span key={b.label} className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: b.c }} />
            {b.label} {b.v}
          </span>
        ))}
      </div>
    </div>
  );
}
