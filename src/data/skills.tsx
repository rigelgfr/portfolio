import { FaGitAlt, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { SkillCardProps } from '@/components/ui/section-card';

export const skills: SkillCardProps[] = [
  {
    skill: "React",
    description: "JavaScript library",
    icon: <FaReact className="w-6 h-6" />,
    animation: "border-[#58c4dc]/80 group-hover:text-[#58c4dc] group-hover:bg-[#58c4dc]/25",
  },
  {
    skill: "Next.js",
    description: "React framework",
    icon: <SiNextdotjs className="w-6 h-6" />,
    animation: "border-white/50 group-hover:text-white group-hover:bg-black-25"
  },
  {
    skill: "TypeScript",
    description: "A better JavaScript",
    icon: <SiTypescript className="w-6 h-6" />,
    animation: "border-[#377cc8]/80 group-hover:text-[#377cc8] group-hover:bg-[#377cc8]/25"
  },
  {
    skill: "Tailwind CSS",
    description: "CSS framework",
    icon: <SiTailwindcss className="w-6 h-6" />,
    animation: "border-[#00bcff]/80 group-hover:text-[#00bcff] group-hover:bg-[#00bcff]/25"
  },
  {
    skill: "PostgreSQL",
    description: "Database",
    icon: <SiPostgresql className="w-6 h-6" />,
    animation: "border-[#396c94]/80 group-hover:bg-[#396c94]"
  },
  {
    skill: "Git",
    description: "Version control",
    icon: <FaGitAlt className="w-6 h-6" />,
    animation: "border-[#f05539]/80 group-hover:text-[#f05539] group-hover:bg-[#f05539]/25"
  }
];