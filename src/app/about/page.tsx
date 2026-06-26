import { OSShell } from "@/components/OSShell";

export default function AboutPage() {
  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 flex flex-col gap-6 max-w-2xl">

          {/* path */}
          <span className="text-xs text-shell-muted">~/about.me</span>

          {/* whoami block */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-shell-dim">&gt; whoami</span>
            <p className="text-sm text-shell-text">Tamilore Akinfemi</p>
            <p className="text-xs text-shell-muted">CS student · University of Calgary </p>
          </div>

          {/* bio block */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-shell-dim">&gt; cat bio.txt</span>
            <p className="text-xs text-shell-muted leading-6">
              I&apos;m a Computer Science student at the University of Calgary with a focus on cloud security.
              I build things at the intersection of infrastructure and defence, systems that detect intruders 
              and tools that actually hold up under pressure.
              When I&apos;m not doing that, I&apos;m getting physically active by either working out or playing basketball. I care about building things that are both technically sound and genuinely useful,
              security that works because it was designed well, not bolted on after.
            </p>
          </div>

          {/* interests */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-shell-dim">&gt; ls interests/</span>
            <div className="flex flex-wrap gap-2">
              {["cloud-security/", "full-stack/", "data-engineering/", "basketball/", "chess/", "fitness/"].map(i => (
                <span key={i} className="text-xs text-green">{i}</span>
              ))}
            </div>
          </div>

        </div>
      </OSShell>
    </div>
  );
}
