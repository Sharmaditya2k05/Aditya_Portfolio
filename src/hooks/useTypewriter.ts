"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
  loop?: boolean;
  loopDelay?: number;
}

interface UseTypewriterReturn {
  displayed: string;
  done: boolean;
  reset: () => void;
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
): UseTypewriterReturn {
  const { speed = 38, startDelay = 600, loop = false, loopDelay = 2000 } = options;
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const reset = () => {
    setResetKey((k) => k + 1);
  };

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);

          if (loop) {
            setTimeout(() => {
              setResetKey((k) => k + 1);
            }, loopDelay);
          }
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay, loop, loopDelay, resetKey]);

  return { displayed, done, reset };
}
