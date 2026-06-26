import { OSShell } from "@/components/OSShell";
import { getProjectBySlug } from "@/data/projects";

export default function ExperiencePage() {
  const m2m = getProjectBySlug("m2m-tech")!;

  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 flex flex-col gap-6 max-w-2xl">

          <span className="text-xs text-shell-muted">~/experience</span>
          <span className="text-xs text-shell-dim">&gt; cat experience.log</span>

          {/* role header */}
          <div className="border-l-2 border-l-amber pl-4 flex flex-col gap-1">
            <p className="text-sm text-shell-text">Data Science Intern</p>
            <p className="text-[11px] text-amber">M2M Tech · Calgary, AB</p>
            <p className="text-[11px] text-shell-dim">May 2023 — Aug 2023</p>
          </div>

          {/* what i did */}
          <section className="flex flex-col gap-3">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// what i did</p>
            <ul className="flex flex-col gap-2 pl-1">
              {m2m.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[11px] text-shell-muted leading-5">
                  <span className="text-shell-dim shrink-0">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* stack */}
          <section className="flex flex-col gap-2">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// stack</p>
            <div className="flex flex-wrap gap-2">
              {m2m.tags.map(tag => (
                <span key={tag} className="text-[11px] px-2 py-1 rounded border border-shell-border text-shell-muted">
                  {tag}
                </span>
              ))}
            </div>
          </section>

        </div>
      </OSShell>
    </div>
  );
}
