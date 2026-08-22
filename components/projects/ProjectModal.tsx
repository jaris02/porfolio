"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Layout, Monitor, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/types/portfolio";

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasMedia = project.gallery.length > 0;

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 md:p-8">
      <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-bg/80 backdrop-blur-xl" />
      <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" layoutId={`project-${project.title}`} initial={{ opacity: 0, scale: 0.96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 12 }} className="relative w-full max-w-5xl bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row">
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close project details" className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 bg-bg/85 backdrop-blur-md rounded-full text-secondary hover:text-primary transition-colors border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X className="w-5 h-5" /></button>
        {hasMedia ? <div className="w-full md:w-[60%] bg-bg/20 overflow-y-auto custom-scrollbar p-0 sm:p-5 space-y-4"><div className="grid gap-4">{project.gallery.map((image, index) => <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} key={image} className="relative overflow-hidden sm:rounded-xl border border-border/50 aspect-video sm:aspect-auto"><Image src={image} alt={`${project.title} view ${index + 1}`} width={1200} height={800} sizes="(max-width: 768px) 100vw, 60vw" className="w-full h-auto object-cover" /></motion.div>)}</div></div> : null}
        <div className={`w-full ${hasMedia ? "md:w-[40%]" : "md:w-full"} p-6 sm:p-8 md:p-10 space-y-7 overflow-y-auto bg-surface ${hasMedia ? "border-t md:border-t-0 md:border-l" : ""} border-border/40`}>
          <div className="space-y-5"><div className="flex items-center gap-2.5 text-secondary"><div className="p-2 bg-bg border border-border rounded-lg">{project.type === "Desktop Application" ? <Monitor className="w-4 h-4" /> : <Layout className="w-4 h-4" />}</div><span className="text-xs font-mono">{project.type}</span></div><h2 id="project-modal-title" className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight pr-10">{project.title}</h2><div className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="text-xs font-mono bg-bg text-secondary border border-border px-2.5 py-1 rounded-md">{tech}</span>)}</div></div>
          <div className="space-y-5 py-6 border-y border-border/60"><p className="text-base sm:text-lg font-semibold leading-relaxed">{project.description}</p><p className="text-secondary text-sm sm:text-base leading-relaxed">{project.longDescription}</p></div>
          <div>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between w-full px-5 py-3.5 bg-primary text-bg rounded-lg font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg">Visit Project<ArrowUpRight className="w-4 h-4" /></a> : <div className="p-4 bg-bg border border-border border-dashed rounded-lg text-center"><span className="text-xs font-mono text-secondary">{project.accessLabel ?? "Private Project"}</span></div>}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
