import { SocialsProps } from "@/components/ui/socials";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const socials: SocialsProps[] = [
    {
        icon: <FaInstagram className="w-6 h-6" />,
        link: "https://www.instagram.com/rigelgfr",
    },
    { 
        icon: <FaLinkedin className="w-6 h-6" />, 
        link: "https://www.linkedin.com/in/rigel-gregory-feliciano-rahateen-b6a3b3312/"
    },
    {
        icon: <FaGithub className="w-6 h-6" />,
        link: "https://github.com/rigelgfr"
    }
] 