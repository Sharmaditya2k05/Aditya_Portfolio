import type { ShowcaseProject, Project } from "@/types";

export const PROJECTS: ShowcaseProject[] = [
  {
    id: "dr-drive",
    badge: "Featured",
    category: "AI / Computer Vision",
    title: "Dr Drive",
    subtitle: "AI-Powered Vehicle Inspection & Predictive Maintenance",
    desc: "Full-stack Android application analyzing vehicle health using OBD data and computer vision. AI models detect mechanical faults with 85% accuracy, estimate repair costs, and flag resale fraud across 50,000+ vehicle records.",
    tags: ["Android (Java)", "FastAPI", "SQLite", "OpenCV", "Deep Learning", "HMM"],
    stats: [
      { value: "85%", label: "Fault accuracy" },
      { value: "50K+", label: "Vehicle records" },
      { value: "3", label: "AI models" },
    ],
    href: "https://github.com/Sharmaditya2k05/DrDrive",
    period: "Mar 2025 - Present",
  },
  {
    id: "traffic",
    badge: "Research",
    category: "DAA / Systems",
    title: "Traffic Signal Analyzer",
    subtitle: "DAN-Powered Multi-Lane Traffic Simulation Engine",
    desc: "C++ simulation engine using Queue data structures to model intersections. Benchmarked Fixed-Time O(N), Greedy O(N^2), and Priority Queue O(N log N) scheduling. Python/Streamlit frontend with real-time Plotly visualizations and Docker support.",
    tags: ["C++17", "Python", "Streamlit", "Plotly", "Priority Queue", "Docker"],
    stats: [
      { value: "3", label: "Algorithms" },
      { value: "O(N log N)", label: "Best case" },
      { value: "Real-time", label: "Visualization" },
    ],
    href: "https://github.com/Sharmaditya2k05/Traffic-Signal-Analyser-and-simulator",
    period: "Feb 2025 - Mar 2025",
  },
  {
    id: "disaster",
    badge: "AI / Robotics",
    category: "Embedded AI",
    title: "AI Disaster Management Robot",
    subtitle: "Search & Rescue Survivor Detection System",
    desc: "AI-based system detecting people trapped under debris with 92% success rate in simulated scenarios. ML models monitor vital signs for real-time survivor detection. Computer vision in low-light conditions supports human presence identification.",
    tags: ["Python", "Computer Vision", "Sensor Fusion", "ML Models", "Embedded"],
    stats: [
      { value: "92%", label: "Detection rate" },
      { value: "Real-time", label: "Vital monitoring" },
      { value: "Low-Light", label: "Vision capable" },
    ],
    href: "https://github.com/Sharmaditya2k05",
    period: "Sept 2024 - Nov 2024",
  },
  {
    id: "healthcare",
    badge: "Systems",
    category: "C++ / OOP",
    title: "Healthcare Management System",
    subtitle: "Full Hospital Operations Platform",
    desc: "Complete C++ OOP system for hospital management. Patient registration, appointment scheduling, doctor management, and billing integrated with SQLite database. Clean architecture following SOLID principles.",
    tags: ["C++", "OOP", "SQLite", "SOLID", "Data Structures"],
    stats: [
      { value: "5+", label: "Modules" },
      { value: "SOLID", label: "Architecture" },
      { value: "Full", label: "CRUD ops" },
    ],
    href: "https://github.com/Sharmaditya2k05",
    period: "2024",
  },
];

export const STATIC_PROJECTS: Pick<
  Project,
  "id" | "slug" | "title" | "description" | "techStack" | "githubUrl" | "liveUrl" | "order"
>[] = [
  {
    id: "1",
    slug: "dr-drive",
    title: "Dr Drive",
    description:
      "AI-powered used car inspection app targeting the Indian market. ML models for fault classification, health scoring, failure prediction, and vehicle valuation. Android + FastAPI backend with OBD-II integration support.",
    techStack: ["Android (Java)", "FastAPI", "SQLite", "ML Models", "Scikit-learn", "MVVM", "OBD-II"],
    githubUrl: "https://github.com/Sharmaditya2k05/DrDrive",
    liveUrl: null,
    order: 1,
  },
  {
    id: "2",
    slug: "traffic-signal-analyzer",
    title: "Traffic Signal Analyzer",
    description:
      "End-to-end traffic intersection simulation demonstrating DAA concepts. Fixed-Time O(N), Greedy O(N^2), and Priority Queue O(N log N) scheduling with Prefix Sum analytics. C++ engine + Streamlit frontend with 3D Plotly visualizations.",
    techStack: ["C++17", "Python", "Streamlit", "Plotly", "Priority Queue", "Greedy", "Prefix Sum"],
    githubUrl: "https://github.com/Sharmaditya2k05/Traffic-Signal-Analyser-and-simulator",
    liveUrl: null,
    order: 2,
  },
];

export const FILTERS = ["All", "AI / Computer Vision", "DAA / Systems", "Embedded AI", "C++ / OOP"] as const;
