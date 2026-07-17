import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Solutions } from "@/components/site/Solutions";
import { Features } from "@/components/site/Features";
import { Achieve } from "@/components/site/Achieve";
import { Testimonials } from "@/components/site/Testimonials";
import { Growth } from "@/components/site/Growth";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MocDoc — One Stop Digital Healthcare Solution for Clinics & Hospitals" },
      { name: "description", content: "Cloud-based, fully integrated healthcare management suite for clinics, hospitals, labs and pharmacies. Simplify and optimize your operations." },
      { property: "og:title", content: "MocDoc — Digital Healthcare Solution" },
      { property: "og:description", content: "One stop digital healthcare solution for clinics & hospitals." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Features />
        <Achieve />
        <Testimonials />
        <Growth />
      </main>
      <Footer />
    </div>
  );
}
