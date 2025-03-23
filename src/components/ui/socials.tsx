import React from "react"
import { twMerge } from "tailwind-merge"

export type SocialsProps = {
    icon?: React.ReactNode
    link: string
    className?: string
    label?: string
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