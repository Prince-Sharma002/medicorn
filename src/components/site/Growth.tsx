import { motion } from "framer-motion";
import { Settings2, Hourglass, HandCoins, ArrowUp, ShieldCheck, Headphones } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const growthStats = [
  { icon: Settings2, badge: true, value: "78%", label: "Improved Patient Experience" },
  { icon: Hourglass, badge: false, value: "4x", label: "Increase In Operation Efficiency" },
  { icon: HandCoins, badge: false, value: "6x", label: "Increase In Revenue" },
];

function StatValue({ value }: { value: string }) {
  const { ref, display } = useCountUp(value);
  return <span ref={ref} className="tabular-nums">{display}</span>;
}

export function Growth() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3 sm:justify-items-center">
          {growthStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="relative shrink-0">
                  <Icon
                    className="h-12 w-12"
                    style={{ color: "var(--brand-orange)" }}
                    strokeWidth={1.75}
                  />
                  {s.badge && (
                    <span
                      className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full"
                      style={{ backgroundColor: "var(--brand-orange)" }}
                    >
                      <ArrowUp className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-4xl font-bold leading-none text-foreground">
                    <StatValue value={s.value} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 rounded-3xl border border-[#ff7a14]/10 p-8 shadow-sm sm:p-12"
          style={{ background: "color-mix(in oklab, #ff7a14 22%, white)" }}
        >
          <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Fuel your growth using MocDoc</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center">
                <ShieldCheck className="h-9 w-9" style={{ color: "var(--brand-orange)" }} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">Uncompromised Data Security</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Compliant to universal standards like HIPAA, ISO 9001:2015 and ISO 27001:2013 providing robust data security, limitless scalability and guaranteed 99.99% uptime.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center">
                <Headphones className="h-9 w-9" style={{ color: "var(--brand-orange)" }} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">Best-in-Class 24/7 Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dedicated 24/7 support with experts through phone, email and ticketing ensuring all your queries are addressed quickly to get the best out of MocDoc.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#demo" className="btn-primary px-6 py-3 text-sm font-semibold">Book a Demo</a>
            <a href="#partner" className="btn-outline px-6 py-3 text-sm font-semibold">Partner With Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}