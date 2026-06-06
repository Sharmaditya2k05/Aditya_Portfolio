import type { EducationItem, ExperienceItem } from "@/types";

export const EDUCATION: EducationItem[] = [
  {
    years: "2024 - 2029",
    degree: "B.Tech + Integrated M.Tech",
    institution: "Jaypee Institute of Information Technology (JIIT)",
    status: "Current",
  },
  {
    years: "Feb 2025 - Jun 2025",
    degree: "Applied AI & ML Essentials",
    institution: "Masai School x IIT Patna",
    status: "Current",
  },
  {
    years: "2023",
    degree: "Class XII - Senior Secondary (CBSE)",
    institution: "Delhi Public School Ghaziabad",
    status: "Completed",
  },
  {
    years: "2021",
    degree: "Class X",
    institution: "Delhi Public School Ghaziabad",
    status: "Completed",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    index: "01",
    role: "AI/ML Intern",
    company: "AiAssured TestAIng",
    period: "2024 - Present",
    status: "Current",
    description:
      "Working on real-world AI safety and testing applications. Building computer vision models, image processing pipelines, and deploying deep learning solutions to production.",
    tags: ["Computer Vision", "Deep Learning", "Python", "Model Optimization", "AI Safety"],
  },
  {
    index: "02",
    role: "Machine Learning Projects",
    company: "Independent Research",
    period: "2024 - Present",
    status: null,
    description:
      "Designing and implementing end-to-end ML systems. Developed classification models, KNN implementations, and data pipelines using TensorFlow, PyTorch, and Scikit-learn.",
    tags: ["TensorFlow", "PyTorch", "KNN", "Classification", "Data Analysis"],
  },
  {
    index: "03",
    role: "Software Development",
    company: "Academic & Personal Projects",
    period: "2023 - Present",
    status: null,
    description:
      "Built full-scale C++ OOP systems including a Healthcare Management System and E-Commerce Platform. Focused on clean architecture, database integration, and software design principles.",
    tags: ["C++", "OOP", "Database", "Software Design", "Systems"],
  },
];
