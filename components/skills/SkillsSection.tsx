import { Terminal } from "lucide-react";
import { TECH_STACKS } from "@/data/skills";
import { TechBadge } from "@/components/ui/TechBadge";

export function SkillsSection() {
  return <aside className="space-y-12 order-2"><section className="space-y-8"><div className="space-y-2"><h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">Expertise</h3><div className="h-px w-full bg-border/40" /></div>{TECH_STACKS.map((stack) => <div key={stack.id} className="space-y-4"><h4 className="text-[11px] uppercase font-bold text-primary flex items-center gap-2 tracking-widest"><Terminal className="w-3 h-3 text-secondary" />{stack.category}</h4><div className="flex flex-wrap gap-2">{stack.techs.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div></div>)}</section></aside>;
}
