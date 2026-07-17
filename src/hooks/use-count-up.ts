import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a number from 0 to `end` when the returned ref enters view.
 * Preserves any non-digit suffix/prefix (e.g. "15M+", "3x", "1500+").
 */
export function useCountUp(target: string | number, duration = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState<string>(() => formatFrom(target, 0));

  useEffect(() => {
    if (!inView) return;
    const { num, prefix, suffix } = parse(target);
    if (num === 0) { setDisplay(String(target)); return; }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(num * eased);
      setDisplay(`${prefix}${value}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return { ref, display };
}

function parse(v: string | number) {
  const s = String(v);
  const m = s.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: "", num: 0, suffix: s };
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}
function formatFrom(v: string | number, n: number) {
  const { prefix, suffix } = parse(v);
  return `${prefix}${n}${suffix}`;
}
