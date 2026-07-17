import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { navLinks } from "@/data/mocdoc";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <div key={l.label} className="group relative">
              <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/85 transition-colors hover:text-foreground">
                {l.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute left-0 top-full min-w-44 -translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {l.items.map((i) => {
                  const toPath = i === "About" ? "/about" : i === "Contact" ? "/contact" : i === "Careers" ? "/careers" : undefined;
                  if (toPath) {
                    return (
                      <Link
                        key={i}
                        to={toPath}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                      >
                        {i}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={i}
                      href="#"
                      className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    >
                      {i}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#demo" className="btn-primary px-5 py-2.5 text-sm font-semibold">Book a Demo</a>
          <button className="flex items-center gap-1 text-sm font-semibold">
            Login <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
        <button aria-label="Menu" className="rounded-md p-2 lg:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((l) => (
                <a key={l.label} href="#" className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted">{l.label}</a>
              ))}
              <a href="#demo" className="btn-primary mt-2 block px-4 py-2.5 text-center text-sm font-semibold">Book a Demo</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
