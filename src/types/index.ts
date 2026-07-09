// ─── Data types ──────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDesc?: string | null;
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  imageUrl?: string | null;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Form / API types ─────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ─── Portfolio content types ──────────────────────────────────────────────────

export interface SkillCategory {
  index: string;
  label: string;
  title: string;
  tags: string[];
  featured?: boolean;
}

export interface Achievement {
  org: string;
  name: string;
  badge: string;
  icon: "star" | "clock" | "trophy";
}

export interface EducationItem {
  years: string;
  degree: string;
  institution: string;
  result?: string;
  status: "Current" | "Completed";
}

export interface ExperienceItem {
  index: string;
  role: string;
  company: string;
  period: string;
  status: "Current" | null;
  description: string;
  tags: string[];
}


export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "email" | "github" | "linkedin" | "phone";
}

export interface ShowcaseProject {
  id: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[]
  stats: { value: string; label: string }[];
  href: string;
  period: string;
  longDesc?: string;
  techDetails?: { layer: string; tech: string }[];
  features?: string[];
}

// ─── Animation helpers ────────────────────────────────────────────────────────

export type AnimationVariant =
  | "fadeUp"
  | "fadeIn"
  | "slideIn"
  | "scaleIn"
  | "stagger";

export interface StaggerConfig {
  delayChildren?: number;
  staggerChildren?: number;
}
