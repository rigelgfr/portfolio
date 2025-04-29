import { ProjectCardProps } from "@/components/ui/section-card";
import { FaInstagram, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiGenius, SiGooglegemini, SiNextdotjs, SiOnnx, SiPostgresql, SiPrisma, SiRoboflow, SiShadcnui, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

export const STACKS = {
    // Frontend stacks
    REACT: { icon: <FaReact />, stack: "React", frontend: true },
    NEXTJS: { icon: <SiNextdotjs />, stack: "Next.js", frontend: true },
    TYPESCRIPT: { icon: <SiTypescript />, stack: "TypeScript", frontend: true },
    TAILWIND: { icon: <SiTailwindcss />, stack: "Tailwind", frontend: true },
    SHADCN: { icon: <SiShadcnui />, stack: "shadcn/ui", frontend: true },
    VITE: { icon: <SiVite />, stack: "Vite", frontend: true },
  
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
    IG_GRAPH: { icon: <FaInstagram />, stack: "Instagram Graph API", frontend: false },
  }

export const projects: ProjectCardProps[] = [
    {
        app_name: "pickAwinner",
        formality: "client, solo",
        description: "a simple tool to randomly select winners from Instagram giveaway comments",
        job: [
            "everything", 
        ],
        thumbnail: "https://raw.githubusercontent.com/rigelgfr/pick-a-winner/refs/heads/main/public/ss/4.webp",
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
            STACKS.IG_GRAPH
        ]
    },
    {
        app_name: "Post Generator",
        formality: "client, solo",
        description: "an IG post generator for @akunimpact, utilizing a custom trained YOLOv8 object detection model",
        job: [
            "everything", 
        ],
        thumbnail: "https://raw.githubusercontent.com/rigelgfr/akunimpact-post-generator/refs/heads/main/public/screenshots/app4.webp",

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
            STACKS.ROBOFLOW
        ]
    }, 
    {
        app_name: "My Portfolio",
        formality: "personal, solo",
        description: "my own custom portfolio site, it's responsive, slick, and makes my life easier",
        job: [
            "everything", 
        ],
        thumbnail: "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/1.webp",
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
        ]
    },
    {
        app_name: "BRJ-WRM",
        formality: "client, solo",
        description: "an internal web app that displays the company's inbound and outbound data as charts and tables",
        job: [
            "fullstack, created the app's frontend, including components and styling", 
            "built the database schema and queries using Prisma and PostgreSQL",
        ],
        thumbnail: "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/3.webp?raw=true",
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
            STACKS.PRISMA
        ]
    },
    {
        app_name: "UtacyLyrics",
        formality: "assignment, solo",
        description: "a lyrics web app that can romanize Japanese lyrics (characters) and more using Gemini API",
        job: [
            "fullstack, created the app's frontend and styling",
            "integrated the Genius API for lyrics fetching and Gemini API for romanization",
        ],
        thumbnail: "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/3.webp?raw=true",
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
            STACKS.GEMINI
        ]
    },
]