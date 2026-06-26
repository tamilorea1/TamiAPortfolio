export type Severity = "high" | "completed" | "in-progress" | "internship";
export type AccentColor = "green" | "amber" | "blue";
export type Category = "threat-db" | "cloud-infra" | "full-stack";

export type Project = {
  slug: string;
  name: string;
  description: string;
  bullets: string[];
  tags: string[];
  severity: Severity;
  accentColor: AccentColor;
  category?: Category;
  href?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "honeytoken-monitor",
    name: "honeytoken-monitor",
    description: "Deception-based AWS intrusion detection using CloudTrail → CloudWatch → Lambda → SNS → DynamoDB.",
    bullets: [
      "Planted fake AWS credentials (honeytokens) across the environment to lure attackers into revealing themselves.",
      "CloudTrail captures every API call made against the honeytoken credentials in real time.",
      "CloudWatch rule detects honeytoken activity and triggers a Lambda function automatically.",
      "Lambda publishes an SNS alert to notify on suspicious access and logs the event to DynamoDB for audit trails.",
      "Infrastructure provisioned with Terraform for reproducible, version-controlled deployments.",
    ],
    tags: ["AWS", "Lambda", "CloudTrail", "CloudWatch", "SNS", "DynamoDB", "Python", "Terraform"],
    severity: "completed",
    accentColor: "green",
    category: "cloud-infra",
    githubUrl: "https://github.com/tamilorea1/honeyTokenMonitor",
  },
  {
    slug: "cybersentinel",
    name: "CyberSentinel",
    description: "Threat analysis dashboard pulling live data from the CISA vulnerability API.",
    bullets: [
      "Built a real-time threat dashboard consuming the CISA Known Exploited Vulnerabilities API.",
      "Resolved CORS limitations and optimized cloud performance by 60% using serverless Firebase Cloud Functions.",
      "Automated data validation checks, reducing discrepancies by 20% and saving ~8 hrs/week of manual correction.",
      "Decreased report generation time by 90% with a scalable, schema-validated export pipeline for 500+ vulnerability records.",
    ],
    tags: ["React", "Firebase", "Redux", "CISA API"],
    severity: "completed",
    accentColor: "green",
    category: "threat-db",
    githubUrl: "https://github.com/tamilorea1/My-current-react-learning-projects/tree/main/CyberSecurity-Threat-Detector",
    liveUrl: "https://cybersecurity-threat-detector.web.app/",
  },
  {
    slug: "fantasy-basketball",
    name: "Fantasy Basketball Tracker",
    description: "Full-stack basketball tracker built with Next.js, Prisma, Supabase, and the NBA API.",
    bullets: [
      "Architected a full-stack drafting system as lead developer, reducing manual league setup time by 70%.",
      "Built a high-concurrency data pipeline with 30+ simultaneous API calls to seed 500+ player profiles into Supabase.",
      "Implemented secure session management via NextAuth, tripling concurrent user capacity.",
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma", "Supabase", "NextAuth", "RapidAPI"],
    severity: "completed",
    accentColor: "blue",
    category: "full-stack",
    githubUrl: "https://github.com/tamilorea1/Fantasy-League-Tracker-Basketball-",
    liveUrl: "https://fantasy-league-tracker-basketball-u.vercel.app/",
  },
  {
    slug: "budgetpal",
    name: "BudgetPal",
    description: "Full-stack budgeting app with Google OAuth, data visualisation, and Supabase backend.",
    bullets: [
      "Designed a real-time analytics dashboard using Recharts to interpret spending patterns, increasing financial data visibility by 40%.",
      "Established 100% data isolation via UUID-based logic and Bcrypt hashing to protect sensitive user credentials.",
      "Containerized the environment with Docker, ensuring full consistency between local dev and production.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Recharts", "Docker", "Prisma", "OAuth"],
    severity: "completed",
    accentColor: "blue",
    category: "full-stack",
    githubUrl: "https://github.com/tamilorea1/MyBudgetpal2025",
    liveUrl: "https://my-budgetpal2025.vercel.app/",
  },
  {
    slug: "m2m-tech",
    name: "M2M Tech — Data Science Intern",
    description: "Automated legacy data workflows and synthesized 10,000+ geographic data points to surface market trends for stakeholders.",
    bullets: [
      "Integrated Google Maps and Census Data APIs to overhaul legacy workflows, improving processing efficiency by 50% and saving 4 hrs/day.",
      "Scripted custom Python solutions to streamline data cleaning, accelerating project delivery by 25%.",
      "Synthesized 10,000+ geographical data points using NumPy and Pandas, presenting market trends via interactive Bokeh visualizations.",
      "Established a standardized validation protocol, ensuring 100% accuracy across all client-facing reports.",
    ],
    tags: ["Python", "NumPy", "Pandas", "Bokeh", "Google Maps API", "Census API"],
    severity: "internship",
    accentColor: "amber",
    href: "/experience",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getProjectsByCategory(category: Category): Project[] {
  return projects.filter(p => p.category === category);
}
