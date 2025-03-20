import { ProjectCardProps } from "@/components/ui/section-card";

export const projects: ProjectCardProps[] = [
    {
        app_name: "UtacyLyrics",
        formality: "personal",
        team: false,
        description: "A lyrics web app that allows romanization of Japanese lyrics (characters) and more by leveraging Gemini API.",
        job: "Frontend Developer",
        image: [
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/3.png?raw=true",
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/2.png?raw=true",
            "https://github.com/rigelgfr/utacy-lyrics/blob/main/src/img/screenshots/1.png?raw=true",
        ],
        source_code: "https://github.com/rigelgfr/utacy-lyrics",
        stack: [
            "React",
            "TailwindCSS",
            "Axios",
            "Express",
        ],

        
    },
]