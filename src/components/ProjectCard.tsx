import Link from "next/link";

type Severity = "high" | "completed" | "in-progress" | "internship";
type AccentColor = "green" | "amber" | "blue";

type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
  severity: Severity;
  accentColor: AccentColor;
  slug: string;
  href?: string;
};

// "high" intentionally omitted — no badge shown for it
const badgeConfig: Partial<Record<Severity, { label: string; className: string }>> = {
  "in-progress": { label: "IN PROGRESS", className: "border-amber text-amber" },
  internship:    { label: "INTERNSHIP",  className: "border-amber text-amber" },
  completed:     { label: "COMPLETED",   className: "border-green text-green" },
};

const borderColor: Record<AccentColor, string> = {
  green: "border-l-green",
  amber: "border-l-amber",
  blue:  "border-l-blue",
};

const hoverBorderColor: Record<AccentColor, string> = {
  green: "hover:border-green",
  amber: "hover:border-amber",
  blue:  "hover:border-blue",
};

export function ProjectCard({ name, description, tags, severity, accentColor, slug, href }: ProjectCardProps) {
  const badge = badgeConfig[severity];

  return (
    <Link href={href ?? `/projects/${slug}`}>
      <div className={`bg-shell-surface border border-shell-border border-l-2 ${borderColor[accentColor]} ${hoverBorderColor[accentColor]} rounded p-4 flex flex-col gap-3 transition-colors cursor-pointer`}>

        {/* name + badge */}
        <div className="flex items-start justify-between gap-2">
          <span className="text-sm text-shell-text">{name}</span>
          {badge && (
            <span className={`text-[10px] px-2 py-0.5 rounded border tracking-[0.08em] shrink-0 ${badge.className}`}>
              {badge.label}
            </span>
          )}
        </div>

        {/* description */}
        <p className="text-xs text-shell-muted leading-relaxed">{description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-shell-border text-shell-dim">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </Link>
  );
}
