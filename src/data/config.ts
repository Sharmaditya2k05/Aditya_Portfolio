import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
  { label: "Education", href: "#education" },
];

export const HERO_ROLES = [
  "AIML Intern @ AiAssured",
  "AI/ML Engineer",
  "Computer Vision Dev",
  "B.Tech + M.Tech (CSE)",
] as const;

export const HERO_TAGLINE =
  "Building intelligent systems across machine learning, computer vision, and data-driven applications.";

export const ABOUT_BIO =
  "CSE student at Jaypee Institute of Information Technology (IV Semester). Currently interning as an AI/ML Engineer at AiAssured TestAIng, working on real-world AI safety and testing applications. Passionate about building production-grade intelligent systems.";

export const SITE_METADATA = {
  name: "Aditya Sharma",
  title: "Aditya Sharma - AI/ML Engineer",
  description:
    "AI/ML engineer and computer science student based in New Delhi. Building intelligent systems across machine learning, computer vision, and data-driven applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adityasharma.dev",
  twitter: "@sharmaditya2k05",
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Python",
    "C++",
    "JIIT",
    "New Delhi",
    "Portfolio",
  ],
} as const;
