import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed featured projects
  await prisma.project.upsert({
    where: { slug: "dr-drive" },
    update: {},
    create: {
      slug: "dr-drive",
      title: "Dr Drive",
      description:
        "AI-powered used car inspection app targeting the Indian market. ML models for fault classification, health scoring, failure prediction, and vehicle valuation.",
      longDesc:
        "Android + FastAPI backend with OBD-II integration support. Combines computer vision with structured sensor data to give buyers a transparent health report before purchase.",
      techStack: ["Android (Java)", "FastAPI", "SQLite", "Scikit-learn", "MVVM", "OBD-II"],
      githubUrl: "https://github.com/Sharmaditya2k05/DrDrive",
      featured: true,
      order: 1,
    },
  });

  await prisma.project.upsert({
    where: { slug: "traffic-signal-analyzer" },
    update: {},
    create: {
      slug: "traffic-signal-analyzer",
      title: "Traffic Signal Analyzer",
      description:
        "End-to-end traffic intersection simulation demonstrating DAA concepts: Fixed-Time O(N), Greedy O(N²), and Priority Queue O(N log N) scheduling with Prefix Sum analytics.",
      longDesc:
        "C++ simulation engine paired with a Streamlit frontend. Features 3D Plotly visualizations, Docker support, and cross-platform launchers. Built as a DAA course project.",
      techStack: ["C++17", "Python", "Streamlit", "Plotly", "Priority Queue", "Greedy", "Prefix Sum"],
      githubUrl:
        "https://github.com/Sharmaditya2k05/Traffic-Signal-Analyser-and-simulator",
      featured: true,
      order: 2,
    },
  });

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
