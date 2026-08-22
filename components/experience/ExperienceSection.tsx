import { EXPERIENCE } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return <section id="experience" className="space-y-12 order-1"><div className="space-y-4"><h2 className="text-2xl font-bold tracking-tight">Experience</h2><div className="h-0.5 w-12 bg-primary" /></div><div className="relative space-y-12 sm:space-y-16 pl-6 border-l border-border/60">{EXPERIENCE.map((experience) => <ExperienceItem key={experience.id} experience={experience} />)}</div></section>;
}
