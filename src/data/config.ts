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
  "Computer Science student at Jaypee Institute of Information Technology and AI/ML Engineer Intern at AiAssured TestAIng. Passionate about building production-grade intelligent systems, with hands-on experience in machine learning, computer vision, AI safety, and real-world AI testing. Dedicated to developing scalable, impactful solutions that bridge research and practical applications.";

export const SITE_METADATA = {
  name: "Aditya Sharma",
  title: "Aditya Sharma - AI/ML Engineer",
  description:
    "Computer Science student at Jaypee Institute of Information Technology and AI/ML Engineer Intern at AiAssured TestAIng, building production-grade intelligent systems.",
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
