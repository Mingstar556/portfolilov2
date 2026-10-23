export type Project = {
  id: string;
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  accent: string;
  description: string;
  live?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "neon",
    title: "NEON",
    tagline: "A WebGL audio-reactive visualizer",
    year: "2026",
    stack: ["Three.js", "Web Audio API", "GLSL"],
    accent: "#00f0ff",
    description:
      "Real-time fragment shaders driven by microphone FFT. 12 layers of feedback bloom, chromatic aberration, and beat-triggered camera orbits — 60fps on a 2013 laptop.",
    live: "#",
    github: "#",
  },
  {
    id: "atlas",
    title: "ATLAS",
    tagline: "Spatial commerce dashboard",
    year: "2026",
    stack: ["Next.js 16", "WebGL", "tRPC"],
    accent: "#ff2e97",
    description:
      "A 3-D product configurator embedded in an admin dashboard. 2.4M vertex meshes streamed on-demand, draco-compressed, with a custom orbit rig and physically-based lighting.",
    live: "#",
    github: "#",
  },
  {
    id: "orbit",
    title: "ORBIT",
    tagline: "Generative brand system",
    year: "2025",
    stack: ["p5.js", "Canvas", "TypeScript"],
    accent: "#7c3aed",
    description:
      "A logo engine that mutates a seed vector field into an infinite family of coherent marks. Exported as SVG, 128× the palette variance per run.",
    live: "#",
    github: "#",
  },
  {
    id: "halo",
    title: "HALO",
    tagline: "Scroll-driven storytelling",
    year: "2025",
    stack: ["GSAP", "Lenis", "HTML5"],
    accent: "#ffb347",
    description:
      "A 12-section narrative site where every section is a parallax canvas. Scroll velocity drives particle gravity; the entire page is a single continuous render loop.",
    live: "#",
    github: "#",
  },
];

export const STATS = [
  { value: "60+", label: "Shipped products" },
  { value: "4.8", label: "Avg. client rating" },
  { value: "12", label: "Years in the craft" },
  { value: "3", label: "Time zones covered" },
];

export const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Three.js",
  "WebGL / GLSL",
  "Framer Motion",
  "GSAP",
  "Lenis",
  "Tailwind CSS",
  "Modular CSS",
  "Node.js",
  "tRPC",
  "PostgreSQL",
  "Vercel",
];