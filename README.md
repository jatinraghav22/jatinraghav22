# Jatin Raghav — Developer Portfolio

> **B.Tech Computer Science & Engineering Student | Aspiring Software Developer**  
> ABES Engineering College, Ghaziabad

A modern, production-grade developer portfolio built with **React 19**, **Vite**, **Three.js / React Three Fiber**, **Tailwind CSS**, **Lenis**, and **GSAP**.

---

## 🌟 Key Highlights & Architecture

- **Visual Aesthetics & Theme**: Near-black futuristic styling (`#050505` / `#0B0B0F`), glassmorphism, subtle glowing neon borders (Electric Blue, Violet, Cyan), Space Grotesk headings, and Plus Jakarta Sans typography.
- **3D Student Developer Workspace**: Interactive WebGL 3D scene using Three.js with glowing particle constellation, central JR monogram emblem, and orbiting developer nodes (`LEARN`, `BUILD`, `SOLVE`, `DEPLOY`), with fallback for non-WebGL environments.
- **Problem Solving & DSA Visualizer**: Interactive data structure visualizer with switchable views:
  - Binary Tree traversal
  - Graph node network & path glow
  - Two-pointers array traversal
  - Highlight of **150+ DSA problems solved** on LeetCode and CodeChef.
- **Featured Projects & Modals**:
  1. **CarCraft**: Automotive inventory & dealership management suite (React + Django REST + MySQL). Includes showroom UI simulation.
  2. **CoCode**: Browser-based multiplayer collaborative code editor (React + TypeScript + WebSockets + Judge0/Piston API). Includes live IDE simulation.
  3. **AI Resume Analyzer**: AI-driven ATS evaluation engine with keyword gap analysis (React 19 + Node.js + Express + Multer + PDF-Parse).
  4. **Course Registration System**: Real-time student course enrollment platform (React + Firebase + Express + Framer Motion).
- **Academic & Learning Journey**:
  - Vertical timeline covering **ABES Engineering College** (CGPA: 7.85) and **Angel Public International School** (81.2%).
  - Chronological development journey (2024–2026) framed honestly as an active learning path.
  - Verified certifications from **Apna College**, **Launched Global**, and **Udemy**.
- **Performance & SEO**:
  - Code-split vendor chunks (`three-vendor`, `ui-vendor`, lazy-loaded 3D scene).
  - OpenGraph, Twitter card, custom JR SVG favicon, `robots.txt`.
  - Accessible contrast, semantic HTML, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18+` (Tested on `v24.19.0`)
- npm `v9+`

### Installation
```bash
# Clone the repository
git clone https://github.com/jatinraghav22/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

```bash
# Build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Vercel

### Option 1: Via Vercel CLI
```bash
npx vercel
```

### Option 2: Via GitHub & Vercel Dashboard
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of premium developer portfolio"
   git remote add origin https://github.com/jatinraghav22/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), import the repository, and click **Deploy**.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`

---

## 📬 Contact & Socials

- **Email**: [jatinraghavrrrr@gmail.com](mailto:jatinraghavrrrr@gmail.com)
- **GitHub**: [github.com/jatinraghav22](https://github.com/jatinraghav22)
- **LinkedIn**: [linkedin.com/in/jatin-raghav-a9a060357](https://www.linkedin.com/in/jatin-raghav-a9a060357/)
- **Live Portfolio**: [jatinraghav22.vercel.app](https://jatinraghav22.vercel.app/)
