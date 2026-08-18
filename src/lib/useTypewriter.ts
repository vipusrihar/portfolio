"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speedMs = 55, startDelayMs = 300) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOutput(text);
      return;
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const startTimer = setTimeout(function type() {
      timeout = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) clearInterval(timeout);
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimer);
      clearInterval(timeout);
    };
  }, [text, speedMs, startDelayMs]);

  return output;
}
