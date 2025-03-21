import { ProjectCardProps } from "@/components/ui/section-card";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiGenius, SiGooglegemini, SiNextdotjs, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";

export const STACKS = {
    // Frontend stacks
    REACT: { icon: <FaReact />, stack: "React", frontend: true },
    NEXTJS: { icon: <SiNextdotjs />, stack: "Next.js", frontend: true },
    TYPESCRIPT: { icon: <SiTypescript />, stack: "TypeScript", frontend: true },
    TAILWIND: { icon: <SiTailwindcss />, stack: "Tailwind", frontend: true },
  
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
        app_name: "UtacyLyrics",
        formality: "assignment, solo",
        description: "a lyrics web app that allows romanization of Japanese lyrics (characters) and more by leveraging Gemini API.",
        job: "Frontend Developer",
        image: [
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/3.png?raw=true",
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/2.png?raw=true",
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/1.png?raw=true",
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
    {
        app_name: "BRJ-WRM",
        formality: "client, solo",
        description: "warehouse report management (WRM) is an internal web app that displays the company's inbound and outbound data as charts and tables.",
        job: "Fullstack Developer",
        image: [
            "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/3.png?raw=true",
            "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/2.png?raw=true",
            "https://github.com/rigelgfr/brj-wrm/blob/master/public/ss/1.png?raw=true",
        ],
        source_code: "https://github.com/rigelgfr/brj-wrm",
        stack: [
            STACKS.NEXTJS,
            STACKS.TYPESCRIPT,
            STACKS.TAILWIND,
            STACKS.POSTGRESQL,
            STACKS.PRISMA
        ]
    }
]