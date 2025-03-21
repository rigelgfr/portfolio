import { ProjectCardProps } from "@/components/ui/section-card";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAxios, SiExpress, SiGenius, SiGooglegemini, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

export const STACKS = {
    // Frontend stacks
    REACT: { icon: <FaReact />, stack: "React", frontend: true },
    NEXTJS: { icon: <SiNextdotjs />, stack: "Next.js", frontend: true },
    TYPESCRIPT: { icon: <SiTypescript />, stack: "TypeScript", frontend: true },
    TAILWIND: { icon: <SiTailwindcss />, stack: "Tailwind CSS", frontend: true },
  
    // Backend stacks
    NODE: { icon: <FaNodeJs />, stack: "Node.js", frontend: false },
    EXPRESS: { icon: <SiExpress />, stack: "Express", frontend: false },
    POSTGRESQL: { icon: <SiPostgresql />, stack: "PostgreSQL", frontend: false },
    AXIOS: { icon: <SiAxios />, stack: "Axios", frontend: false },
    GEMINI: { icon: <SiGooglegemini />, stack: "Gemini", frontend: false },
    GENIUS: { icon: <SiGenius />, stack: "Genius", frontend: false },
  }

export const projects: ProjectCardProps[] = [
    {
        app_name: "UtacyLyrics",
        formality: "assignment, solo",
        description: "A lyrics web app that allows romanization of Japanese lyrics (characters) and more by leveraging Gemini API.",
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
]