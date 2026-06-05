"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <p
        className="select-none font-display font-extrabold leading-none tracking-[-0.05em] text-border"
        style={{ fontSize: "clamp(80px,18vw,200px)" }}
        aria-hidden="true"
      >
        ERR
      </p>

      <h2 className="-mt-2 mb-4 font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
        Something went wrong
      </h2>
      <p className="mb-10 max-w-md font-mono text-sm text-ink-2">
        An unexpected error occurred. This has been noted. Try again or go back
        home.
      </p>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-sm border border-accent bg-accent-dim px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-bg"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm border border-border-2 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-2 transition-all hover:-translate-y-0.5 hover:border-border hover:text-ink"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
