"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getProjectsByCategory, type Category } from "@/data/projects";

type NavItemProps = {
  label: string;
  href: string;
  external?: boolean;
};

function NavItem({ label, href, external }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  const className = `block px-3 py-1 text-xs ${
    active
      ? "border-l-2 border-green text-shell-text bg-green/10"
      : "border-l-2 border-transparent text-shell-muted hover:text-shell-text"
  }`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

const systemItems = [
  { label: "dashboard",   href: "/" },
  { label: "about.me",    href: "/about" },
  { label: "resume.pdf",  href: "/resume" },
];

const contactItems = [
  { label: "github",   href: "https://github.com/tamilorea1", external: true },
  { label: "linkedin", href: "https://www.linkedin.com/in/tamilore-akinfemi-1544a1330/", external: true },
  { label: "email",    href: "mailto:tamiloreakinfemi@gmail.com", external: true },
  { label: "reach.me", href: "/contact" },
];

const folders: { label: string; category: Category }[] = [
  { label: "threat-db/",   category: "threat-db" },
  { label: "cloud-infra/", category: "cloud-infra" },
  { label: "full-stack/",  category: "full-stack" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  function toggleFolder(label: string) {
    setOpenFolders(prev => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  return (
    <div className="flex flex-col h-full py-4 gap-6">

      {/* avatar + name */}
      <div className="px-4">
        <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center mb-2">
          <span className="text-shell-bg text-xl font-bold">T</span>
        </div>
        <p className="text-xs text-shell-text">tamilore</p>
        <p className="text-[10px] text-green">&gt; cloud_security_eng.exe</p>
      </div>

      {/* // system */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// system</p>
        {systemItems.map(item => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

      {/* // projects */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// projects</p>
        {folders.map(({ label, category }) => {
          const folderProjects = getProjectsByCategory(category);
          const isOpen = openFolders.has(label);

          return (
            <div key={label}>
              <button
                onClick={() => toggleFolder(label)}
                className="flex items-center justify-between w-full px-3 py-1 text-xs text-shell-muted hover:text-shell-text"
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-shell-dim">{isOpen ? "▼" : "▶"}</span>
                  {label}
                </span>
                {folderProjects.length > 0 && (
                  <span className="text-[10px] text-shell-dim">({folderProjects.length})</span>
                )}
              </button>

              {isOpen && folderProjects.map(p => {
                const href = p.href ?? `/projects/${p.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={p.slug}
                    href={href}
                    className={`block pl-7 pr-3 py-1 text-[11px] ${
                      active
                        ? "border-l-2 border-green text-shell-text bg-green/10"
                        : "border-l-2 border-transparent text-shell-muted hover:text-shell-text"
                    }`}
                  >
                    {p.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* // contact */}
      <div>
        <p className="px-4 text-[10px] text-shell-dim mb-1 tracking-[0.1em]">// contact</p>
        {contactItems.map(item => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

    </div>
  );
}
