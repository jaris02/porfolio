"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { PROFILE } from "@/data/profile";

const CONTACT_LINKS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/jaris02", href: PROFILE.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/jaris02", href: PROFILE.github, icon: Github },
  { label: "Telegram", value: "@jaris02", href: PROFILE.telegram, icon: Send },
] as const;

export function ContactSection() {
  return <motion.div key="contact" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}><section id="contact" className="max-w-4xl mx-auto px-6 mt-8 sm:mt-16 md:mt-24 space-y-16 pb-12"><div className="flex flex-col lg:grid lg:grid-cols-2 gap-16"><div className="space-y-10"><div className="space-y-6"><h2 className="text-5xl sm:text-7xl font-bold tracking-tighter">Initiate a <br /> system.</h2><p className="text-secondary text-base sm:text-lg leading-relaxed max-w-sm font-mono tracking-tighter italic">Looking for a technical partner to engineer your business workflows? Choose a direct channel to get in touch.</p></div></div><div className="card-hover p-8 sm:p-10 bg-surface/40 border-border/40 backdrop-blur-sm"><div className="grid gap-6">{CONTACT_LINKS.map((contact) => <a key={contact.label} href={contact.href} target={contact.href.startsWith("mailto:") ? undefined : "_blank"} rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="flex items-center gap-5 group p-2 hover:bg-surface rounded-xl transition-all border border-transparent hover:border-border"><div className="w-12 h-12 bg-surface border border-border shadow-sm rounded-xl flex items-center justify-center text-secondary group-hover:border-primary group-hover:text-primary transition-all"><contact.icon className="w-6 h-6" /></div><div className="space-y-1 min-w-0"><p className="text-[10px] font-mono uppercase font-bold text-secondary tracking-widest opacity-60">{contact.label}</p><p className="font-bold underline underline-offset-4 decoration-border text-sm sm:text-base break-all">{contact.value}</p></div></a>)}</div></div></div></section></motion.div>;
}
