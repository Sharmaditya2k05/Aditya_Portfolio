export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between border-t border-border px-12 py-6">
      <span className="font-mono text-xs text-ink-3">
        © {year}{" "}
        <span className="font-sans text-ink-2">Aditya Sharma</span>
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-3">
        New Delhi · AI/ML Engineer
      </span>
    </footer>
  );
}
