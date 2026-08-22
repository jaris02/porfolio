export type ProjectType = "Desktop Application" | "Web Application";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: ProjectType;
  tag: string;
  image?: string;
  gallery: string[];
  longDescription: string;
  accessLabel?: string;
  thumb?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  desc: string;
  context: string;
  highlights: string[];
  tech: string[];
  featured?: boolean;
}

export interface TechStack {
  id: string;
  category: string;
  techs: string[];
}

export type PortfolioView = "home" | "contact";
export type Theme = "dark" | "light";
