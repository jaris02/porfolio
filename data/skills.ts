import type { TechStack } from "@/types/portfolio";

export const TECH_STACKS: TechStack[] = [
  { id: "languages", category: "Programming Languages", techs: ["Go", "Python", "TypeScript", "JavaScript", "SQL"] },
  { id: "backend", category: "Backend", techs: ["Go", "FastAPI", "Node.js", "Express.js", "Django", "REST APIs", "Supabase"] },
  { id: "frontend", category: "Frontend", techs: ["Next.js", "React", "Tailwind CSS"] },
  { id: "databases", category: "Databases", techs: ["PostgreSQL", "MySQL", "SQL Server", "Prisma ORM"] },
  { id: "infrastructure", category: "DevOps & Infrastructure", techs: ["Docker", "Nginx", "Git", "GitHub Actions", "Vercel"] },
  { id: "ai-assisted", category: "AI-Assisted Development", techs: ["ChatGPT", "OpenAI Codex"] },
];
