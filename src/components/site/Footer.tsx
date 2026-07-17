import { Logo } from "./Logo";
import { Instagram, Linkedin, Twitter, Facebook, Youtube, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const cols = [
  { h: "Products", links: ["MocDoc HMS", "MocDoc LIMS", "MocDoc CMS", "MocDoc DMS", "MocDoc PMS", "MocDoc ART", "MocDoc OptiCare", "EcoLIMS"] },
  { h: "Company", links: ["About Us", "Careers", "Contact Us", "Partner with Us"] },
  { h: "Customers", links: ["Wall of Love", "Success Stories", "Referral Program"] },
  { h: "Resources", links: ["Blogs", "Brochures", "The Economic Times"] },
];

const countries = ["Bahamas","Bahrain","Cambodia","Fiji","India","Malaysia","Maldives","Mauritius","Nigeria","Oman","Rwanda","Saudi Arabia","South Africa","Sri Lanka","Trinidad and Tobago","UAE"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="lg:col-span-2">
            <Logo />
            <h4 className="mt-6 font-display font-bold tracking-wide">CONNECT WITH US</h4>
            <address className="mt-2 not-italic text-sm leading-relaxed text-muted-foreground">
              No. 17, 3rd Cross Street, Swamy Square,<br />
              Vijayanagar, Velachery, Chennai, India - 600042
            </address>
            <div className="mt-4 flex flex-wrap gap-3">
              {[Instagram, Linkedin, Twitter, Facebook, MessageCircle, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white text-foreground/70 transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs font-semibold text-white">
                <span className="text-lg leading-none"></span>
                <span className="flex flex-col leading-tight"><span className="text-[9px] font-normal">Download on the</span>App Store</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-xs font-semibold text-white">
                <span className="grid h-4 w-4 place-items-center text-[10px]">▶</span>
                <span className="flex flex-col leading-tight"><span className="text-[9px] font-normal">GET IT ON</span>Google Play</span>
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="font-display font-bold" style={{ color: "var(--brand-orange)" }}>{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => {
                  const toPath = l === "About Us" ? "/about" : l === "Contact Us" ? "/contact" : l === "Careers" ? "/careers" : l === "Partner with Us" ? "/partner" : undefined;
                  if (toPath) {
                    return (
                      <li key={l}>
                        <Link to={toPath} className="transition-colors hover:text-[var(--brand-orange)]">
                          {l}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={l}>
                      <a href="#" className="transition-colors hover:text-[var(--brand-orange)]">
                        {l}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-bold" style={{ color: "var(--brand-orange)" }}>Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" style={{ color: "var(--brand-orange)" }} /> +91 9360952112</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" style={{ color: "var(--brand-orange)" }} /> sales@mocdoc.net</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" style={{ color: "var(--brand-orange)" }} /> contact@mocdoc.in</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" style={{ color: "var(--brand-orange)" }} /> support@mocdoc.com</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[0,1,2].map((k) => (
                <div key={k} className="grid h-12 w-12 place-items-center rounded-md" style={{ background: "color-mix(in oklab, var(--brand-yellow) 65%, white)" }}>
                  <span className="text-[9px] font-bold" style={{ color: "var(--brand-orange)" }}>NABH</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs font-semibold">
              NABH Advanced Certified<br />for <span style={{ color: "var(--brand-orange)" }}>EMR & HMS, CMS</span>
            </p>
          </div>
        </div>
      </div>

      {/* Countries strip */}
      <div className="bg-[#1e2730] text-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {countries.map((c, i) => (
              <li key={c} className="flex items-center gap-x-4">
                <a href="#" className="text-lg hover:text-[var(--brand-orange)]">{c}</a>
                {i < countries.length - 1 && <span className="text-white/25 text-4xl"> <span style={{ color: "var(--brand-orange)" }}> | </span> </span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=" bg-[#1e2930] py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MocDoc Clone. Built for demonstration purposes.
      </div>
    </footer>
  );
}
