"use client";

import { useEffect, useState } from "react";
import { BootScreen } from "./BootScreen";

export function BootWrapper({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState<boolean | null>(null);

  useEffect(() => {
    setBooted(sessionStorage.getItem("tami-os-booted") === "1");
  }, []);

  function complete() {
    sessionStorage.setItem("tami-os-booted", "1");
    setBooted(true);
  }

  if (booted === null) return <div className="fixed inset-0 bg-shell-bg" />;
  if (!booted) return <BootScreen onComplete={complete} />;
  return <>{children}</>;
}
