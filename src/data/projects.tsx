import { ProjectCardProps } from "@/components/ui/section-card";
import { FaInstagram, FaNodeJs, FaReact, FaMicrosoft } from "react-icons/fa";
import {
  SiAxios,
  SiExpress,
  SiGenius,
  SiGooglegemini,
  SiNextdotjs,
  SiOnnx,
  SiPostgresql,
  SiPrisma,
  SiRoboflow,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiN8N,
  SiOllama,
  SiFastapi,
  SiTensorflow,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { LuScanFace } from "react-icons/lu";

export const STACKS = {
  // Frontend stacks
  REACT: { icon: <FaReact />, stack: "React", frontend: true },
  NEXTJS: { icon: <SiNextdotjs />, stack: "Next.js", frontend: true },
  TYPESCRIPT: { icon: <SiTypescript />, stack: "TypeScript", frontend: true },
  TAILWIND: { icon: <SiTailwindcss />, stack: "Tailwind", frontend: true },
  SHADCN: { icon: <SiShadcnui />, stack: "shadcn/ui", frontend: true },
  VITE: { icon: <SiVite />, stack: "Vite", frontend: true },
  ZUSTAND: { icon: <GiBearFace />, stack: "Zustand", frontend: true },

  // Backend stacks
  NODE: { icon: <FaNodeJs />, stack: "Node.js", frontend: false },
  EXPRESS: { icon: <SiExpress />, stack: "Express", frontend: false },
  POSTGRESQL: { icon: <SiPostgresql />, stack: "PostgreSQL", frontend: false },
  AXIOS: { icon: <SiAxios />, stack: "Axios", frontend: false },
  GEMINI: { icon: <SiGooglegemini />, stack: "Gemini", frontend: false },
  GENIUS: { icon: <SiGenius />, stack: "Genius", frontend: false },
  PRISMA: { icon: <SiPrisma />, stack: "Prisma", frontend: false },
  ONNX: { icon: <SiOnnx />, stack: "ONNX", frontend: false },
  ROBOFLOW: { icon: <SiRoboflow />, stack: "Roboflow", frontend: false },
  IG_GRAPH: {
    icon: <FaInstagram />,
    stack: "Instagram Graph API",
    frontend: false,
  },
  N8N: { icon: <SiN8N />, stack: "n8n", frontend: false },
  OLLAMA: { icon: <SiOllama />, stack: "ollama", frontend: false },
  MS_OAUTH: { icon: <FaMicrosoft />, stack: "MS OAuth", frontend: false },
  FASTAPI: { icon: <SiFastapi />, stack: "FastAPI", frontend: false },
  FACEAPIJS: { icon: <LuScanFace />, stack: "face-api.js", frontend: false },
  TF: { icon: <SiTensorflow />, stack: "TensorFlow", frontend: false },
};

export const projects: ProjectCardProps[] = [
  {
    app_name: "AI-DOCU",
    formality: "client, solo",
    description:
      "a RAG chatbot application for ALVA with a knowledge base management panel",
    job: ["everything"],
    thumbnail:
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-1.webp",
    image: [
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-1.webp",
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-2.webp",
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-3.webp",
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-4.webp",
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-5.webp",
      "https://raw.githubusercontent.com/rigelgfr/local-rag-chatbot/refs/heads/main/public/ss/aidocu%20ss-6.webp",
    ],
    source_code: "https://github.com/rigelgfr/local-rag-chatbot",
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.SHADCN,
      STACKS.POSTGRESQL,
      STACKS.N8N,
      STACKS.OLLAMA,
      STACKS.MS_OAUTH,
    ],
  },
  {
    app_name: "VMS AI Modules",
    formality: "final project, duo",
    description:
      "facial recognition and trend prediction features for a visitor management system",
    job: ["AI"],
    thumbnail:
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/2.png?raw=true",
    image: [
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/1.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/2.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/3.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/4.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/5.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/6.png?raw=true",
      "https://github.com/ddmareo/Visitor-Management-System-V2/blob/c780d2984a2e580e4232afd7aff178d31c3721be/public/ss/7.png?raw=true",
    ],
    source_code: "https://github.com/ddmareo/Visitor-Management-System-V2",
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.POSTGRESQL,
      STACKS.FACEAPIJS,
      STACKS.TF,
      STACKS.FASTAPI,
    ],
  },
  {
    app_name: "EatSight Frontend",
    formality: "client, solo",
    description:
      "the client-facing web application for EatSight, a POS service",
    job: ["full frontend"],
    thumbnail:
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/2.jpg",
    image: [
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/1.jpg",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/2.jpg",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/3.jpg",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/4.jpg",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/5.jpg",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/eatsight/6.jpg",
    ],
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.SHADCN,
      STACKS.ZUSTAND,
    ],
  },
  {
    app_name: "pickAwinner",
    formality: "personal, solo",
    description:
      "a simple tool to randomly select winners from Instagram giveaway comments",
    job: ["everything"],
    thumbnail:
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/4.webp",
    image: [
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/1.webp",
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/2.webp",
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/3.webp",
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/4.webp",
      "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/5.webp",
    ],
    live: "https://pickawinner.vercel.app/",
    source_code: "https://github.com/rigelgfr/pick-a-winner",
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.SHADCN,
      STACKS.IG_GRAPH,
    ],
  },
  {
    app_name: "Post Generator",
    formality: "personal, solo",
    description:
      "an IG post generator for @akunimpact, utilizing a custom trained YOLOv8 object detection model",
    job: ["everything"],
    thumbnail:
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app4.webp",

    image: [
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app1.webp",
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app2.webp",
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app3.webp",
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app4.webp",
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app5.webp",
      "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app6.webp",
    ],
    live: "https://akunimpact-post-generator.vercel.app/",
    source_code: "https://github.com/rigelgfr/akunimpact-post-generator",
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.SHADCN,
      STACKS.ONNX,
      STACKS.ROBOFLOW,
    ],
  },
  {
    app_name: "My Portfolio",
    formality: "personal, solo",
    description:
      "my own custom portfolio site, it's responsive, slick, and makes my life easier",
    job: ["everything"],
    thumbnail:
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/1.webp",
    image: [
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/1.webp",
      "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/2.webp",
    ],
    live: "https://rigelgfr.github.io/portfolio",
    source_code: "https://github.com/rigelgfr/portfolio",
    stack: [
      STACKS.REACT,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.VITE,
      STACKS.SHADCN,
    ],
  },
  {
    app_name: "BRJ-WRM",
    formality: "client, solo",
    description:
      "an internal web app that displays the company's inbound and outbound data as charts and tables",
    job: [
      "fullstack, created the app's frontend, including components and styling",
      "built the database schema and queries using Prisma and PostgreSQL",
    ],
    thumbnail:
      "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/3.webp?raw=true",
    image: [
      "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/1.webp?raw=true",
      "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/2.webp?raw=true",
      "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/3.webp?raw=true",
    ],
    source_code: "https://github.com/rigelgfr/brj-wrm",
    stack: [
      STACKS.NEXTJS,
      STACKS.TYPESCRIPT,
      STACKS.TAILWIND,
      STACKS.SHADCN,
      STACKS.POSTGRESQL,
      STACKS.PRISMA,
    ],
  },
  {
    app_name: "UtacyLyrics",
    formality: "assignment, solo",
    description:
      "a lyrics web app that can romanize Japanese lyrics (characters) and more using Gemini API",
    job: [
      "fullstack, created the app's frontend and styling",
      "integrated the Genius API for lyrics fetching and Gemini API for romanization",
    ],
    thumbnail:
      "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/3.webp?raw=true",
    image: [
      "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/1.webp?raw=true",
      "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/2.webp?raw=true",
      "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/3.webp?raw=true",
    ],
    source_code: "https://github.com/rigelgfr/utacy-lyrics",
    stack: [
      STACKS.REACT,
      STACKS.TAILWIND,
      STACKS.NODE,
      STACKS.EXPRESS,
      STACKS.AXIOS,
      STACKS.GENIUS,
      STACKS.GEMINI,
    ],
  },
];
