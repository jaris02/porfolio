import { Globe } from "lucide-react";
import type { Experience } from "@/types/portfolio";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return <div className="relative group"><div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors ring-4 ring-bg border border-bg" /><div className="space-y-4"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"><h3 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors tracking-tight">{experience.role}</h3><span className="text-[9px] font-mono font-bold text-secondary py-1 px-3 bg-surface border border-border rounded-full self-start">{experience.period}</span></div><div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest bg-primary/5 w-fit px-2 py-0.5 rounded"><Globe className="w-3 h-3" />{experience.company}</div><p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl whitespace-pre-line opacity-90">{experience.desc}</p></div></div>;
}
