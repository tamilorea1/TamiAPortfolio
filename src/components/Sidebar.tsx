type NavItemProps = {
  label: string;
  active?: boolean;
};

function NavItem({ label, active }: NavItemProps) {
  return (
    <div className={`px-3 py-1 text-xs cursor-pointer ${
      active
        ? "border-l-2 border-green text-shell-text bg-green/10"
        : "border-l-2 border-transparent text-shell-muted hover:text-shell-text"
    }`}>
      {label}
    </div>
  );
}

const systemItems = ["dashboard", "about.me", "resume.pdf"];
const projectItems = ["threat-db/", "cloud-infra/"];
const contactItems = ["github", "linkedin"];

export function Sidebar() {
  return (
    <div className="flex flex-col h-full py-4 gap-6">

      {/* avatar + name */}
      <div className="px-4">
        <div className="w-10 h-10 rounded-full bg-shell-border-hi mb-2" />
        <p className="text-xs text-shell-text">tamilore</p>
        <p className="text-[10px] text-green">&gt; cloud_security_eng.exe</p>
      </div>

      {/* // system */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// system</p>
        {systemItems.map(item => (
          <NavItem key={item} label={item} active={item === "dashboard"} />
        ))}
      </div>

      {/* // projects */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// projects</p>
        {projectItems.map(item => (
          <NavItem key={item} label={item} />
        ))}
      </div>

      {/* // contact */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// contact</p>
        {contactItems.map(item => (
          <NavItem key={item} label={item} />
        ))}
      </div>

    </div>
  );
}
