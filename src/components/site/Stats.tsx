import { motion } from "framer-motion";
import { stats, customers } from "@/data/mocdoc";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

function StatValue({ value }: { value: string }) {
  const { ref, display } = useCountUp(value);
  return <span ref={ref} className="tabular-nums">{display}</span>;
}


export function Stats() {
  return (
    <section className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">
          Trusted by Over <span style={{ color: "var(--brand-orange)" }}><StatValue value="1500+" /></span> Customers Worldwide!
        </h2>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 divide-y divide-border overflow-hidden rounded-xl border border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <div className="font-display text-2xl font-bold sm:text-3xl" style={{ color: "var(--brand-orange)" }}><StatValue value={s.value} /></div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-12">
          <button aria-label="Previous" className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm hover:bg-muted sm:block">
            <ChevronLeft className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
          </button>
          <button aria-label="Next" className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 shadow-sm hover:bg-muted sm:block">
            <ChevronRight className="h-5 w-5" style={{ color: "var(--brand-orange)" }} />
          </button>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {customers.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-full items-center justify-center rounded-lg bg-muted/60 transition-all group-hover:bg-muted">
                  <Building2 className="h-7 w-7 text-muted-foreground/70 transition-colors group-hover:text-[var(--brand-orange)]" />
                </div>
                <div className="mt-3 text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
