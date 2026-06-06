export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-grid flex flex-col gap-4 border-t border-white/10 bg-[#050809] px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-12">
      <span className="font-mono text-xs text-white/45">
        (c) {year} <span className="text-white/70">Aditya Sharma</span>
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-white/45">
        New Delhi - AI/ML Engineer
      </span>
    </footer>
  );
}
