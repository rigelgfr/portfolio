import { SocialsProps } from "@/components/ui/socials";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socials: SocialsProps[] = [
    {
        icon: <FaInstagram className="size-5 sm:size-6" />,
        link: "https://www.instagram.com/rigelgfr",
        label: "instagram"
    },
    { 
        icon: <FaLinkedin className="size-5 sm:size-6" />, 
        link: "https://www.linkedin.com/in/rigelgfr",
        label: "linkedin"
    },
    {
        icon: <FaGithub className="size-5 sm:size-6" />,
        link: "https://github.com/rigelgfr",
        label: "github"
    }
] 