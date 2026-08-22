"use client";

import { Moon, Sun } from "lucide-react";
import type { Theme } from "@/types/portfolio";

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className="p-2 hover:bg-surface border border-transparent hover:border-border rounded-lg transition-all text-secondary hover:text-primary" aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
