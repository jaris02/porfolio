export function TechBadge({ children }: { children: React.ReactNode }) {
  return <span className="text-[10px] font-mono text-secondary hover:text-primary hover:border-primary/40 transition-all px-2 py-0.5 bg-surface border border-border rounded shadow-sm">{children}</span>;
}
