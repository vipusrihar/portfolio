"use client";

import { useEffect, useState } from "react";

export function useTypewriterLoop(
  strings: readonly string[],
  { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}
) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (strings.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setText(strings[0]);
      return;
    }

    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = strings[stringIndex];

      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, pause);
          return;
        }
        timeout = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
        }
        timeout = setTimeout(tick, deleteSpeed);
      }
    }

    timeout = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
