import { notFound } from "next/navigation";
import { OSShell } from "@/components/OSShell";
import { getProjectBySlug } from "@/data/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const borderColor = {
    green: "border-l-green",
    amber: "border-l-amber",
    blue:  "border-l-blue",
  }[project.accentColor];

  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 flex flex-col gap-6 max-w-2xl">

          {/* path + links */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-shell-muted">~/projects/{slug}</span>
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] px-3 py-1 rounded border border-green text-green hover:bg-green/10 transition-colors"
                >
                  ↗ live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] px-3 py-1 rounded border border-shell-border text-shell-muted hover:border-shell-border-hi hover:text-shell-text transition-colors"
                >
                  github
                </a>
              )}
            </div>
          </div>

          <span className="text-xs text-shell-dim">&gt; cat README.md</span>

          {/* name + accent bar */}
          <div className={`border-l-2 ${borderColor} pl-4 flex flex-col gap-1`}>
            <p className="text-sm text-shell-text">{project.name}</p>
            <p className="text-xs text-shell-muted">{project.description}</p>
          </div>

          {/* what i built */}
          <section className="flex flex-col gap-3">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// what i built</p>
            <ul className="flex flex-col gap-2 pl-1">
              {project.bullets.map((b, i) => (
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
              {project.tags.map(tag => (
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
