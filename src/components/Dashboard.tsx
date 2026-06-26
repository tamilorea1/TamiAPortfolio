"use client";

import { useState } from "react";
import { StatCard } from "./StatCard";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

const techStack: Record<string, string[]> = {
  Languages:  ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  Frameworks: ["React", "Next.js", "Redux", "Node.js"],
  Cloud:      ["AWS", "Lambda", "CloudTrail", "CloudWatch", "GuardDuty", "SNS"],
  Databases:  ["DynamoDB", "PostgreSQL", "Supabase", "Firebase"],
  Tools:      ["Terraform", "Git", "Docker", "Github"],
};

export function Dashboard() {
  const [showStack, setShowStack] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-6">

      {/* panel header */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-shell-muted">~/projects</span>
        <span className="text-[10px] px-2 py-0.5 rounded-full border border-green text-green">
          sys.active
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full border border-shell-border text-shell-muted">
          cloud-sec
        </span>
      </div>

      {/* stat grid */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="projects shipped"
          value="5"
          sub="↑ 2 this semester"
        />
        <StatCard
          label="tech stack"
          value="12+"
          sub="click to view stack"
          onClick={() => setShowStack(true)}
        />
        <StatCard
          label="grad"
          value="2028"
          sub="UCalgary · CS"
        />
      </div>

      {/* legend */}
      <div className="flex items-center gap-5">
        <span className="text-[10px] text-shell-dim tracking-[0.08em]">// legend</span>
        <span className="flex items-center gap-1.5 text-[10px] text-shell-muted">
          <span className="w-2 h-2 rounded-full bg-green" /> security
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-shell-muted">
          <span className="w-2 h-2 rounded-full bg-blue" /> SWE
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-shell-muted">
          <span className="w-2 h-2 rounded-full bg-amber" /> internship / data
        </span>
      </div>

      {/* project cards */}
      <div className="flex flex-col gap-3">
        {projects.map(p => (
          <ProjectCard key={p.slug} {...p} />
        ))}
      </div>

      {/* tech stack modal */}
      {showStack && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setShowStack(false)}
        >
          <div
            className="bg-shell-surface border border-shell-border-hi rounded-lg overflow-hidden w-96 animate-modal-in"
            onClick={e => e.stopPropagation()}
          >
            {/* modal titlebar — mirrors OSShell titlebar */}
            <div className="flex items-center justify-between px-4 h-9 bg-shell-deep border-b border-shell-border">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowStack(false)}
                  className="w-3 h-3 rounded-full bg-danger hover:opacity-80"
                />
                <span className="w-3 h-3 rounded-full bg-amber" />
                <span className="w-3 h-3 rounded-full bg-green" />
              </div>
              <span className="text-[11px] text-shell-muted tracking-[0.1em]">
                ~/stack.config
              </span>
              <span className="w-16" />
            </div>

            {/* modal body */}
            <div className="p-5 flex flex-col gap-4">
              {(Object.entries(techStack) as [string, string[]][]).map(([section, items]) => (
                <div key={section}>
                  <p className="text-[10px] text-shell-dim tracking-[0.1em] mb-2">// {section.toLowerCase()}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(tech => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-1 rounded border border-shell-border text-shell-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
