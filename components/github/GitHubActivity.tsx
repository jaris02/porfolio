const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function GitHubActivity() {
  return (
    <section id="github-activity" className="max-w-4xl mx-auto px-6 mt-24 space-y-6">
      <div className="flex justify-between items-end gap-4">
        <h2 className="text-lg font-bold mono">GitHub Activity</h2>
        <span className="text-xs font-mono text-secondary">314 contributions in 2025</span>
      </div>
      <div className="card-hover overflow-hidden bg-bg/50 backdrop-blur-sm dashed-border group/github">
        <div className="relative w-full overflow-x-auto select-none py-4 px-2 filter grayscale group-hover/github:grayscale-0 transition-all duration-700">
          <div className="flex gap-[4px] min-w-[600px] justify-between">
            {Array.from({ length: 51 }).map((_, column) => (
              <div key={column} className="flex flex-col gap-[4px]">
                {Array.from({ length: 7 }).map((_, row) => {
                  const monthPosition = column / 4.2;
                  const seed = (column * 7 + row) % 10;
                  let intensity = "bg-border/20";
                  if (monthPosition >= 4 && monthPosition <= 10) {
                    if (seed > 7) intensity = "bg-[#39d353]";
                    else if (seed > 5) intensity = "bg-[#26a641]";
                    else if (seed > 3) intensity = "bg-[#006d32]";
                    else if (seed > 1) intensity = "bg-[#0e4429]";
                  } else if (seed > 8) intensity = monthPosition > 10 ? "bg-[#39d353]" : "bg-[#26a641]";
                  return <div key={row} className={`w-[9px] h-[9px] rounded-[1.5px] ${intensity} transition-all duration-300 hover:ring-2 hover:ring-primary/40`} />;
                })}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[8px] font-mono text-secondary px-1 uppercase italic tracking-tighter text-center">
            {MONTHS.map((month) => <span key={month} className="flex-1">{month}</span>)}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-secondary uppercase">
          <div className="flex gap-4"><span>Mon</span><span>Wed</span><span>Fri</span></div>
          <div className="flex gap-1.5 items-center"><span>Less</span><div className="w-[11px] h-[11px] rounded-[2px] bg-border/20" /><div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429]" /><div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641]" /><div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353]" /><span>More</span></div>
        </div>
      </div>
    </section>
  );
}
