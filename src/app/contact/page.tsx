"use client";

import { useState } from "react";
import { OSShell } from "@/components/OSShell";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof typeof formData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData(f => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "bg-shell-deep border border-shell-border rounded px-3 py-2 text-xs text-shell-text placeholder:text-shell-dim focus:outline-none focus:border-green transition-colors";

  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 flex flex-col gap-6 max-w-lg">

          <span className="text-xs text-shell-muted">~/contact/reach.me</span>
          <span className="text-xs text-shell-dim">&gt; open reach.me</span>

          <div className="border-l-2 border-l-green pl-4 flex flex-col gap-1">
            <p className="text-sm text-shell-text">reach.me</p>
            <p className="text-xs text-shell-muted">Send a message — I'll get back to you.</p>
          </div>

          {status === "sent" ? (
            <div className="flex flex-col gap-3">
              <p className="text-xs text-green">✓ message sent. talk soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-[11px] text-shell-dim hover:text-shell-muted w-fit transition-colors"
              >
                send another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-shell-dim tracking-[0.1em]">// name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={update("name")}
                  placeholder="your name"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-shell-dim tracking-[0.1em]">// email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={update("email")}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-shell-dim tracking-[0.1em]">// message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={update("message")}
                  placeholder="what's on your mind..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-[11px] text-danger">
                  something went wrong — try emailing directly at tamiloreakinfemi@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start text-[11px] px-4 py-2 rounded border border-green text-green hover:bg-green/10 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "sending..." : "send message"}
              </button>

            </form>
          )}

        </div>
      </OSShell>
    </div>
  );
}
