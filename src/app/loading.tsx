export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo mark */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute h-16 w-16 animate-ping rounded-full border border-accent opacity-20" />
          <span className="relative font-display text-3xl font-extrabold text-accent">A</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-3">
          Loading
        </span>
      </div>
    </div>
  );
}
