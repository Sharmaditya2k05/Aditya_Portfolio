# Aditya Sharma — Portfolio (Refactored for Production)

An enterprise-ready, high-performance portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Prisma, Resend, and Cloudinary. Fully refactored with clean architecture, strict typing, and optimized for Vercel deployment.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router, React 19) | Modern React framework for SSR and static generation. |
| **Language** | TypeScript (Strict Mode) | Full type-safety across components, APIs, and data. |
| **Styling** | Vanilla CSS + Tailwind CSS v3 | Elegant dark-theme aesthetics with CSS custom properties. |
| **Animation** | Framer Motion v11 | High-performance scrolling and hover physics. |
| **Database ORM** | Prisma v5 | Postgres schema generation and type-safe querying. |
| **Email Service** | Resend | Automatic contact notifications and auto-replies. |
| **Image CDN** | Cloudinary | Cloud storage and delivery for images. |
| **Hosting** | Vercel | Automatic CI/CD deployment with edge runtime. |

---

## 📁 Folder Structure

The project has been reorganized following clean architecture principles:

```
aditya-portfolio/
├── prisma/
│   ├── schema.prisma        ← Postgres models: ContactMessage, Project, ResumeDownload
│   └── seed.ts              ← Database seed script
├── public/
│   ├── images/
│   │   └── frames/          ← Preloaded sequence PNGs for scroll scrubbing
│   ├── videos/
│   │   └── hero-hologram.mp4← Interactive video assets
│   └── assets/
│       └── Aditya-Sharma-Resume.pdf ← CV download
├── src/
│   ├── app/                 ← Next.js routing, layouts, and page configurations
│   ├── components/
│   │   ├── layout/          ← Navbar, Footer, StickyNav
│   │   ├── shared/          ← CustomCursor, NoiseOverlay, SectionLabel
│   │   └── ui/              ← Reusable styling primitives (Button, Badge, etc.)
│   ├── sections/            ← Highly modular page sections (Hero, Showcase, etc.)
│   ├── data/                ← Extracted static content and portfolio datasets
│   ├── hooks/               ← Reusable custom hooks (typewriter, parallax, etc.)
│   ├── lib/                 ← Core configurations, database clients, and utilities
│   └── types/               ← Shared TypeScript interfaces
├── vercel.json              ← Build command override for Prisma Client generation
├── tsconfig.json            ← Strict typescript config with @/* path mapping
└── tailwind.config.ts       ← Theme color tokens and customized keyframes
```

---

## 💻 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Update `.env` with your API credentials:
```env
DATABASE_URL="postgresql://user:password@host:port/dbname?schema=public"
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="hello@yourdomain.com"
RESEND_TO_EMAIL="sharma.aditya2k05@gmail.com"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
NEXT_PUBLIC_SITE_URL="https://adityasharma.dev"
```

### 3. Generate Prisma Client & Database Seed
```bash
# Generate the type-safe client
npm run db:generate

# Push schemas to your PostgreSQL instance
npm run db:push

# Run database seed
npx ts-node prisma/seed.ts
```

### 4. Run Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚀 Deployment to Vercel

The project is fully prepped for immediate Vercel deployment with zero configurations required on the Vercel dashboard, thanks to `vercel.json`.

### 1. Provision a Serverless Database
We recommend using **[Neon](https://neon.tech)** for a free, serverless PostgreSQL database. Paste the database connection string as `DATABASE_URL` in Vercel.

### 2. Deploy via Vercel CLI
```bash
# Install Vercel globally
npm i -g vercel

# Link and deploy
vercel --prod
```

### 3. Environment Variables Configuration
Ensure all variables defined in `.env.example` are added in the **Vercel Dashboard → Project Settings → Environment Variables**.

---

## 🎨 Component Architecture & Features

1. **PNG Scroll Sequence (Hero Section)**: Preloads a sequence of 20 PNGs, mapping mouse X Client position and mobile touch coordinates to current frame render using lerped requestAnimationFrame loop (achieving constant 60 FPS).
2. **Modular Data Separation**: All content arrays (skills, education history, career projects, contact points) are extracted to `src/data/` as immutable TypeScript records, enabling fast content updates without component mutation.
3. **Lazy Image Loading**: Employs Next.js `next/image` with lazy loading and optimization patterns to maximize Lighthouse scores.
4. **Theme Tokens**: Shared stylesheet mapping Tailwind theme custom extension variables to CSS variables in `src/app/globals.css`.
