import type { ShowcaseProject, Project } from "@/types";

export const PROJECTS: ShowcaseProject[] = [
  {
    id: "dr-drive",
    badge: "Featured",
    category: "AI / Computer Vision",
    title: "Dr Drive",
    subtitle: "AI-Powered Vehicle Inspection & Predictive Maintenance",
    desc: "Full-stack Android application analyzing vehicle health using OBD-II data and computer vision (YOLOv8). AI models detect mechanical faults with 85% accuracy, estimate repair costs, predict failures, and flag resale fraud. Targets the Indian used-car market.",
    tags: ["Android (Java)", "FastAPI", "YOLOv8", "OpenCV", "XGBoost", "MVVM", "OBD-II"],
    stats: [
      { value: "85%", label: "Fault accuracy" },
      { value: "50K+", label: "Vehicle records" },
      { value: "3", label: "AI models" },
    ],
    href: "https://github.com/Sharmaditya2k05/DrDrive",
    period: "Mar 2025 - Present",
    longDesc: `Dr Drive is an AI-powered Android application that analyzes used cars using OBD data and computer vision to detect issues, predict failures, estimate repair costs, and calculate fair resale value.\n\n## Features\n- OBD-II Bluetooth Integration (ELM327)\n- Image-based Damage Detection (YOLOv8)\n- AI-based Health Scoring\n- Failure Prediction\n- Repair Cost Estimation (India)\n- Car Value Calculator\n- Fraud Detection\n\n## Architecture\nCar → OBD Device → Android App → Backend → ML Models → Results\n\n## Project Structure\n- android-app/ → Android application\n- backend/ → FastAPI backend\n- ml-models/ → ML training & models`,
    techDetails: [
      { layer: "Android", tech: "Java + XML, MVVM Architecture, Retrofit" },
      { layer: "Backend", tech: "FastAPI, Python" },
      { layer: "AI/ML", tech: "XGBoost, Random Forest, YOLOv8, OpenCV" },
    ],
    features: [
      "OBD-II Bluetooth Integration (ELM327)",
      "Image-based Damage Detection (YOLOv8)",
      "AI Health Scoring & Failure Prediction",
      "Repair Cost Estimation (India-specific)",
      "Car Value Calculator & Fraud Detection",
    ],
  },
  {
    id: "greenmile",
    badge: "Systems",
    category: "Android / Algorithms",
    title: "GreenMile",
    subtitle: "AI-Driven Cab Fleet Route Optimization",
    desc: "Android cab dispatch and route optimization app for Delhi/NCR urban fleets. Optimizes multi-stop routes using OpenRouteService API or a local Dijkstra-based graph algorithm. Features live Google Maps polyline visualization, fuel cost estimation, and complete dispatch history.",
    tags: ["Kotlin", "Google Maps SDK", "OkHttp", "Coroutines", "SQLite", "OpenRouteService"],
    stats: [
      { value: "20", label: "Pre-seeded stops" },
      { value: "2", label: "Algorithm modes" },
      { value: "₹95/L", label: "Fuel estimation" },
    ],
    href: "https://github.com/Sharmaditya2k05/GreenMiles",
    period: "Jan 2025 - Mar 2025",
    longDesc: `GreenMile is an Android cab dispatch and route optimization app built for managing urban cab fleets in the Delhi/NCR region. It optimizes multi-stop routes in real time using either live road data from the OpenRouteService API or a local Dijkstra-based graph algorithm.\n\n## Features\n- Route Optimization with ORS Matrix Mode (nearest-neighbor heuristic) and Dijkstra Fallback\n- Live Map Visualization — dark-style Google Map with route polyline\n- Cab Management — Add, view, and delete cab records\n- Stop Management — 20 pre-seeded Delhi/NCR locations\n- Route Management — Define manual road segments for the local graph\n- Dispatch History — Save and review past routes\n- Fuel Cost Estimation — Based on cab efficiency and configurable fuel price\n\n## Database Schema\n- stops: Named geographic stops with GPS coordinates\n- cabs: Fleet entries with driver info and fuel efficiency\n- routes: Directed edges between stops (distance, travel time)\n- dispatch_history: Completed dispatch records with full stats`,
    techDetails: [
      { layer: "Language", tech: "Kotlin" },
      { layer: "UI", tech: "XML Layouts, View Binding" },
      { layer: "Maps", tech: "Google Maps SDK for Android" },
      { layer: "Networking", tech: "OkHttp + Kotlin Coroutines" },
      { layer: "Local DB", tech: "SQLite via SQLiteOpenHelper" },
      { layer: "External API", tech: "OpenRouteService v2 (matrix + directions)" },
    ],
    features: [
      "ORS Matrix Mode with nearest-neighbor heuristic",
      "Dijkstra fallback when GPS/ORS unavailable",
      "Live Google Map polyline visualization",
      "Fuel cost estimation (₹95/L default)",
      "Full dispatch history with distance, time & cost",
      "20 pre-seeded real Noida/Delhi/NCR stops",
    ],
  },
  {
    id: "disaster",
    badge: "AI / Robotics",
    category: "Embedded AI",
    title: "AI Disaster Management Robot",
    subtitle: "Search & Rescue Survivor Detection System",
    desc: "Autonomous disaster-response robot software detecting human presence in hazardous environments through multi-sensor fusion (gas, sound, vibration, LiDAR) and a RandomForestClassifier ML inference engine. Fires GPS-tagged real-time alerts when a human is confirmed above the confidence threshold.",
    tags: ["Python", "scikit-learn", "RandomForest", "Sensor Fusion", "GPS Alerts"],
    stats: [
      { value: "92%", label: "Detection rate" },
      { value: "4", label: "Sensor inputs" },
      { value: "Real-time", label: "GPS alerts" },
    ],
    href: "https://github.com/Sharmaditya2k05/HehabRoBo",
    period: "Sept 2024 - Nov 2024",
    longDesc: `An autonomous disaster-response robot software system that detects human presence in hazardous or post-disaster environments through multi-sensor fusion and a machine learning inference engine. When a human is confirmed, it triggers a real-time GPS-tagged alert.\n\n## How It Works\n1. Reads data from four simulated sensors (gas, sound, vibration, LiDAR)\n2. Normalizes and fuses sensor readings into a single confidence score\n3. Passes features through a pre-trained RandomForestClassifier\n4. Combines ML confidence and fusion score in a decision engine\n5. Fires a GPS-tagged alert if a human is confirmed above threshold\n\n## Configuration\n- LOOP_DELAY = 2s between sensing cycles\n- Sensor Weights: Gas 0.25, Sound 0.25, Vibration 0.20, LiDAR 0.30\n- HUMAN_CONFIDENCE_THRESHOLD = 0.65\n- DEFAULT_GPS: (28.6139, 77.2090) — New Delhi`,
    techDetails: [
      { layer: "ML Model", tech: "RandomForestClassifier (scikit-learn)" },
      { layer: "Sensor Fusion", tech: "Weighted normalization of gas, sound, vibration, LiDAR" },
      { layer: "Runtime", tech: "Python 3, continuous sensing loop" },
      { layer: "Alert System", tech: "GPS-tagged alert dispatch" },
    ],
    features: [
      "Multi-sensor fusion (gas, sound, vibration, LiDAR)",
      "Pre-trained RandomForest ML inference",
      "Configurable confidence threshold (0.65 default)",
      "GPS-tagged alert dispatch on human confirmation",
      "Timestamped ISO-format logging at INFO/WARNING levels",
      "Thermal presence integration as additional signal",
    ],
  },
  {
    id: "traffic",
    badge: "Research",
    category: "DAA / Systems",
    title: "Traffic Signal Analyzer",
    subtitle: "DAA-Powered Multi-Lane Traffic Simulation Engine",
    desc: "C++ simulation engine using Queue data structures to model intersections. Benchmarked Fixed-Time O(N), Greedy O(N²), and Priority Queue O(N log N) scheduling. Python/Streamlit frontend with real-time Plotly visualizations, 3D scatter plots, and prefix sum analytics.",
    tags: ["C++17", "Python", "Streamlit", "Plotly", "Priority Queue", "Prefix Sum"],
    stats: [
      { value: "3", label: "Algorithms" },
      { value: "O(N log N)", label: "Best case" },
      { value: "Real-time", label: "Visualization" },
    ],
    href: "https://github.com/Sharmaditya2k05/Traffic-Signal-Analyser-and-simulator",
    period: "Feb 2025 - Mar 2025",
    longDesc: `A complete end-to-end system demonstrating Design & Analysis of Algorithms (DAA) concepts through a real-world traffic intersection simulation.\n\n## DAA Concepts Implemented\n1. **Queue — Vehicle Modeling**: Each lane is a FIFO queue. enqueue O(1), dequeue O(1)\n2. **Greedy Algorithm — Signal Optimization**: Gives green to the lane with the most vehicles. O(N²) full simulation\n3. **Priority Queue — Efficient Scheduling**: Max-heap scores lanes by queue_size × 2 + cumulative_wait. O(N log N)\n4. **Prefix Sum — Cumulative Analysis**: Running total of queue lengths for O(1) range-sum queries\n\n## Algorithm Comparison\n| Algorithm | Complexity | Best For |\n|-----------|-----------|----------|\n| Fixed-Time | O(N) | Low traffic, predictable |\n| Greedy | O(N²) | Medium traffic |\n| Priority Queue | O(N log N) | Heavy traffic |`,
    techDetails: [
      { layer: "Core Logic", tech: "C++ (g++, -O2, C++17)" },
      { layer: "Frontend", tech: "Python + Streamlit" },
      { layer: "Visualization", tech: "Plotly (2D + 3D interactive)" },
      { layer: "Data Exchange", tech: "JSON + TXT files via subprocess" },
    ],
    features: [
      "3 scheduling algorithms: Fixed-Time, Greedy, Priority Queue",
      "Prefix Sum analytics for range-sum queries",
      "Interactive Streamlit frontend with sidebar controls",
      "3D Scatter plot: Time × Lane × Queue (Plotly)",
      "Per-lane queue-over-time tabs",
      "Theoretical + measured complexity comparison table",
    ],
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
    techStack: ["Android (Java)", "FastAPI", "YOLOv8", "OpenCV", "XGBoost", "MVVM", "OBD-II"],
    githubUrl: "https://github.com/Sharmaditya2k05/DrDrive",
    liveUrl: null,
    order: 1,
  },
  {
    id: "2",
    slug: "greenmile",
    title: "GreenMile",
    description:
      "Android cab dispatch and route optimization app for Delhi/NCR urban fleets. Real-time route optimization using OpenRouteService API or Dijkstra fallback. Live Google Maps polyline visualization.",
    techStack: ["Kotlin", "Google Maps SDK", "OkHttp", "Coroutines", "SQLite", "OpenRouteService"],
    githubUrl: "https://github.com/Sharmaditya2k05/GreenMiles",
    liveUrl: null,
    order: 2,
  },
  {
    id: "3",
    slug: "traffic-signal-analyzer",
    title: "Traffic Signal Analyzer",
    description:
      "End-to-end traffic intersection simulation demonstrating DAA concepts. Fixed-Time O(N), Greedy O(N^2), and Priority Queue O(N log N) scheduling with Prefix Sum analytics. C++ engine + Streamlit frontend with 3D Plotly visualizations.",
    techStack: ["C++17", "Python", "Streamlit", "Plotly", "Priority Queue", "Greedy", "Prefix Sum"],
    githubUrl: "https://github.com/Sharmaditya2k05/Traffic-Signal-Analyser-and-simulator",
    liveUrl: null,
    order: 3,
  },
];

export const FILTERS = ["All", "AI / Computer Vision", "Android / Algorithms", "Embedded AI", "DAA / Systems"] as const;
