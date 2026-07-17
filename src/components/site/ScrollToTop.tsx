import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrollPercent = (window.scrollY / totalHeight) * 100;
        setProgress(scrollPercent);
      }

      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference of a circle with radius 18: 2 * Math.PI * 18 = 113.1
  const strokeDashoffset = 113.1 - (progress / 100) * 113.1;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 ease-in-out",
        show ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-75 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 active:scale-95 group focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* SVG Progress Circle */}
        <svg className="absolute inset-0 h-full w-full -rotate-90">
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-muted/30 fill-none"
            strokeWidth="3"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            style={{ stroke: "#c25100" }} // Matches the custom scrollbar thumb color
            className="fill-none transition-all duration-100"
            strokeWidth="3"
            strokeDasharray="113.1"
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Chevron Icon */}
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-inner">
          <ChevronUp className="h-5 w-5 text-foreground transition-transform group-hover:-translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}
