import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "./about";

export const Route = createFileRoute("/contact")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Contact Us | MocDoc — Digital Healthcare Solution" },
      { name: "description", content: "Contact MocDoc, the leading provider of cloud-based integrated healthcare management solutions." },
    ],
  }),
});
