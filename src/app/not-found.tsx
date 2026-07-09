import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      {/* Giant 404 */}
      <p
        className="select-none font-display font-extrabold leading-none tracking-[-0.05em] text-border"
        style={{ fontSize: "clamp(100px,25vw,280px)" }}
        aria-hidden="true"
      >
        404
      </p>

      <h1 className="-mt-4 mb-4 font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
        Page not found
      </h1>
      <p className="mb-10 font-mono text-sm text-ink-2">
        Looks like this page drifted into the void.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-sm border border-accent bg-accent-dim px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-bg"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
