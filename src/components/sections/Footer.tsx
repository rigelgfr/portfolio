import { socials } from "@/data/socials";
import { EmailButton } from "../ui/custom-button";
import { SectionContainerBorderless } from "../ui/section-container";
import { Separator } from "../ui/separator";
import { Socials } from "../ui/socials";

export function Footer() {
    return (
        <SectionContainerBorderless id="footer" className="mt-4 sm:mt-16">
            <Separator />

            <div className="flex flex-col mt-10 space-y-10">
                <div className="text-center text-sm font-mono">
                    made with ❤️ by rigel
                </div>

                <div className="grid grid-cols-2">
                    <span className="text-sm text-grey-light select-none">
                        <p>© 2025 rigelgfr</p>
                    </span>

                    <div className="flex group justify-end items-center gap-3">
                        <EmailButton />
                        {socials.map((social, index) => (
                            <Socials key={index} icon={social.icon} link={social.link}/>
                        ))}
                    </div>
                    
                </div>            
            </div>
            
            
        </SectionContainerBorderless>
    );
}
