import { OSShell } from "@/components/OSShell";

const skills = {
  "Languages":   "TypeScript, JavaScript, Java, Python, SQL, C++, HTML, CSS, C#",
  "Frameworks":  "React.js, Redux, Node.js, Next.js, Flask, Bcrypt, NumPy, Pandas",
  "Tools":       "AWS, Git/Github, Firebase, Docker, REST APIs, Supabase, PostgreSQL",
};

const experience = [
  {
    role: "Data Science Intern",
    company: "M2M Tech",
    period: "May 2023 — Aug 2023",
    location: "Calgary, AB",
    bullets: [
      "Integrated Google Maps and Census Data APIs to overhaul legacy workflows, improving data processing efficiency by 50% and saving 4 hrs/day.",
      "Scripted custom Python solutions to streamline cleaning processes, accelerating project delivery by 25%.",
      "Synthesized 10,000+ geographical data points using NumPy and Pandas to surface market trends via Bokeh visualizations.",
      "Established a standardized validation protocol, ensuring 100% accuracy for client-facing reports.",
    ],
  },
];

const projects = [
  {
    name: "Fantasy Basketball League Tracker",
    stack: "Next.js, Prisma, PostgreSQL, Supabase",
    bullets: [
      "Architected a full-stack drafting system as lead developer, reducing manual setup time by 70%.",
      "Built a high-concurrency data pipeline with 30+ simultaneous API calls to seed 500+ player profiles.",
      "Implemented secure session management via NextAuth, tripling concurrent user capacity.",
    ],
  },
  {
    name: "Cybersecurity Threat Analysis Dashboard",
    stack: "React.js, Firebase, CISA API",
    bullets: [
      "Automated data validation checks, decreasing discrepancies by 20% and saving ~8 hrs/week.",
      "Optimized cloud performance by 60% and resolved CORS issues via serverless Firebase Cloud Functions.",
      "Decreased report generation time by 90% with a scalable, schema-validated export pipeline for 500+ records.",
    ],
  },
  {
    name: "BudgetPal",
    stack: "Next.js, TypeScript, Docker, Prisma, Supabase",
    bullets: [
      "Designed a real-time analytics dashboard with Recharts, increasing financial data visibility by 40%.",
      "Established 100% data isolation via UUID-based logic and Bcrypt hashing.",
      "Containerized the environment with Docker, ensuring consistency between local dev and production.",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="h-full p-4 bg-shell-bg">
      <OSShell>
        <div className="p-6 flex flex-col gap-7 max-w-2xl">

          {/* path + download */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-shell-muted">~/resume.pdf</span>
            <a
              href="/tamilore_akinfemi_resume.pdf"
              download
              className="text-[10px] px-3 py-1 rounded border border-green text-green hover:bg-green/10 transition-colors"
            >
              ↓ download
            </a>
          </div>

          <span className="text-xs text-shell-dim">&gt; cat resume.pdf</span>

          {/* name + contact */}
          <div className="flex flex-col gap-1">
            <p className="text-base text-shell-text tracking-wide">Tamilore Akinfemi</p>
            <p className="text-[11px] text-shell-muted">
              tamiloreakinfemi@gmail.com · github.com/tamilorea1
            </p>
          </div>

          {/* education */}
          <section className="flex flex-col gap-2">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// education</p>
            <div className="flex justify-between items-baseline">
              <div>
                <p className="text-xs text-shell-text">University of Calgary</p>
                <p className="text-[11px] text-shell-muted">B.S in Computer Science</p>
              </div>
              <p className="text-[11px] text-shell-dim">Sep 2022 — Apr 2028</p>
            </div>
          </section>

          {/* skills */}
          <section className="flex flex-col gap-2">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// skills</p>
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="flex gap-2 text-[11px]">
                <span className="text-shell-dim w-24 shrink-0">{category}</span>
                <span className="text-shell-muted">{list}</span>
              </div>
            ))}
          </section>

          {/* experience */}
          <section className="flex flex-col gap-4">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// experience</p>
            {experience.map(job => (
              <div key={job.role} className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-xs text-shell-text">{job.role}</p>
                    <p className="text-[11px] text-amber">{job.company} · {job.location}</p>
                  </div>
                  <p className="text-[11px] text-shell-dim">{job.period}</p>
                </div>
                <ul className="flex flex-col gap-1 pl-3">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-[11px] text-shell-muted leading-5 before:content-['▸'] before:text-shell-dim before:mr-2">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* projects */}
          <section className="flex flex-col gap-4">
            <p className="text-[10px] text-shell-dim tracking-[0.1em]">// projects</p>
            {projects.map(p => (
              <div key={p.name} className="flex flex-col gap-2">
                <div>
                  <span className="text-xs text-shell-text">{p.name}</span>
                  <span className="text-[11px] text-shell-dim"> · {p.stack}</span>
                </div>
                <ul className="flex flex-col gap-1 pl-3">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="text-[11px] text-shell-muted leading-5 before:content-['▸'] before:text-shell-dim before:mr-2">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

        </div>
      </OSShell>
    </div>
  );
}
