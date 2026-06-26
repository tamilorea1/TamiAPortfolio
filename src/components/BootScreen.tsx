"use client";

import { useEffect, useState } from "react";

type Line = { text: string; className: string; delay: number };

const SEQUENCE: Line[] = [
  { text: "TAMI-OS v1.0 initializing...", className: "text-shell-muted", delay: 400  },
  { text: "[██████████] 100%",             className: "text-green",       delay: 950  },
  { text: "✓ firewall module loaded",      className: "text-green",       delay: 1450 },
  { text: "✓ auth service online",         className: "text-green",       delay: 1850 },
  { text: "✓ threat-db mounted",           className: "text-green",       delay: 2250 },
  { text: "> welcome back.",               className: "text-shell-text",  delay: 2850 },
];

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    SEQUENCE.forEach((line, i) => {
      timers.push(setTimeout(() => setShown(i + 1), line.delay));
    });

    const fadeAt = SEQUENCE[SEQUENCE.length - 1].delay + 900;
    timers.push(setTimeout(() => setFading(true), fadeAt));
    timers.push(setTimeout(onComplete, fadeAt + 500));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-shell-bg flex items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col gap-2 font-mono min-w-[300px]">
        {SEQUENCE.slice(0, shown).map((line, i) => (
          <p key={i} className={`text-sm ${line.className}`}>
            {line.text}
          </p>
        ))}
        {shown > 0 && shown < SEQUENCE.length && (
          <span className="inline-block w-[7px] h-[14px] bg-green animate-blink" />
        )}
      </div>
    </div>
  );
}
