export function Logo() {
  return (
    <a href="/" className="flex items-center gap-1 font-display text-2xl font-bold tracking-tight">
      <span className="italic" style={{ color: "#3a2f2a" }}>Moc</span>
      <span className="italic" style={{ color: "var(--brand-orange)" }}>Doc</span>
      <svg width="22" height="20" viewBox="0 0 24 22" className="ml-0.5" aria-hidden>
        <path d="M12 20s-8-5.2-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.8-8 11-8 11-.6.4-1.4.4-2 0Z"
          fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}
