export interface DeveloperStat {
  icon: string;
  value: string;
  label: string;
  sub: string;
}

export interface SkillProficiency {
  name: string;
  pct: number;
}

export interface SkillCategoryTab {
  label: string;
  key: string;
}

export interface CategorySkillItem {
  name: string;
  tags: string;
  pct: number;
}

export const STATS: DeveloperStat[] = [
  { icon: "cube", value: "3+", label: "Projects Completed", sub: "Production-grade AI systems" },
  { icon: "brain", value: "5+", label: "AI/ML Models Built", sub: "CNNs, KNN, Deep Learning" },
  { icon: "shield", value: "4+", label: "Certifications", sub: "Google, HackerRank, IIT BHU" },
  { icon: "code", value: "500+", label: "Hours Coded", sub: "Python, C++, TensorFlow" },
];

export const SKILLS_DATA: SkillProficiency[] = [
  { name: "Python", pct: 88 },
  { name: "Machine Learning", pct: 82 },
  { name: "Computer Vision", pct: 78 },
  { name: "TensorFlow / Keras", pct: 75 },
  { name: "C++", pct: 80 },
  { name: "Deep Learning", pct: 74 },
  { name: "OpenCV", pct: 76 },
  { name: "Data Analysis", pct: 80 },
  { name: "PyTorch", pct: 70 },
  { name: "SQL", pct: 72 },
  { name: "Git", pct: 85 },
  { name: "Linux", pct: 68 },
];

export const CATEGORIES: SkillCategoryTab[] = [
  { label: "All", key: "all" },
  { label: "AI / ML", key: "ai" },
  { label: "Languages", key: "lang" },
  { label: "Frameworks", key: "fw" },
  { label: "Tools", key: "tools" },
];

export const CAT_SKILLS: Record<string, CategorySkillItem[]> = {
  all: [
    { name: "AI / ML", tags: "TensorFlow - PyTorch - Scikit-learn", pct: 82 },
    { name: "Languages", tags: "Python - C++ - SQL - Java", pct: 84 },
    { name: "Frameworks", tags: "FastAPI - Flask - Node.js", pct: 71 },
    { name: "Tools", tags: "Git - VS Code - Jupyter - Android Studio", pct: 78 },
    { name: "Computer Vision", tags: "OpenCV - YOLO - CNNs - Image Processing", pct: 76 },
  ],
  ai: [
    { name: "TensorFlow", tags: "Deep Learning - CNNs", pct: 75 },
    { name: "PyTorch", tags: "Research - Models", pct: 70 },
    { name: "OpenCV", tags: "Computer Vision", pct: 76 },
    { name: "Scikit-learn", tags: "ML Pipelines", pct: 78 },
  ],
  lang: [
    { name: "Python", tags: "Primary Language", pct: 88 },
    { name: "C++", tags: "OOP - Systems", pct: 80 },
    { name: "SQL", tags: "MySQL - SQLite", pct: 72 },
    { name: "Java", tags: "Android Dev", pct: 65 },
  ],
  fw: [
    { name: "FastAPI", tags: "REST APIs", pct: 68 },
    { name: "Flask", tags: "Web Backend", pct: 70 },
    { name: "Node.js", tags: "Backend", pct: 62 },
    { name: "Streamlit", tags: "Data Apps", pct: 75 },
  ],
  tools: [
    { name: "Git / GitHub", tags: "Version Control", pct: 85 },
    { name: "Jupyter", tags: "Data Science", pct: 88 },
    { name: "VS Code", tags: "Primary IDE", pct: 90 },
    { name: "Android Studio", tags: "Mobile Dev", pct: 65 },
  ],
};
