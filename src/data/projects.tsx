import { ProjectCardProps } from "@/components/ui/section-card";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiGenius, SiGooglegemini, SiNextdotjs, SiPostgresql, SiPrisma, SiShadcnui, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

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
    PRISMA: { icon: <SiPrisma />, stack: "Prisma", frontend: false }
  }

export const projects: ProjectCardProps[] = [ 
    {
        app_name: "My Portfolio",
        formality: "personal, solo",
        description: "my own custom portfolio site, it's responsive, slick, and makes my life easier",
        job: [
            "everything", 
        ],
        image: [
            "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/1.webp",
            "https://raw.githubusercontent.com/rigelgfr/portfolio/refs/heads/main/public/ss/2.webp",
        ],
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