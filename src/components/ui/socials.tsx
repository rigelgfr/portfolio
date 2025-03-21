import React from "react"
import { twMerge } from "tailwind-merge" // Optional, for proper class merging

export type SocialsProps = {
    icon: React.ReactElement
    link: string
    className?: string
}

export function Socials({ icon, link, className }: SocialsProps) {
    return (
        <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href={link} 
            className={twMerge("hover:animate-button-tilt transition ease-in-out duration-500", className)}
        >
            {icon}
        </a>
    )
}