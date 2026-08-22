export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
      <div className="h-0.5 w-12 bg-primary" />
    </div>
  );
}
