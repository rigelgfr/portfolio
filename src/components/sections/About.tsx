import { FaMapMarkerAlt } from "react-icons/fa";
import profile from "../../assets/profile/me.webp";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { SectionContainerBordered } from "../ui/section-container";
import { CVButton, EmailButton } from "../ui/custom-button";
import { socials } from "@/data/socials";
import { Socials } from "../ui/socials";

export function AboutSection() {
  return (
    <SectionContainerBordered id="about">
      {/* row pertama */}
      <div className="flex">
        {/* PP, Name, Location */}
        <div className="flex gap-2 w-full">
          <Avatar className="h-12 w-12 rounded-lg">
            <AvatarImage src={profile} alt="My Picture" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <div className="flex-col items-center">
            <h1 className="text-sm sm:text-lg font-semibold">
              Rigel Gregory F R
            </h1>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="w-3 h-3" />
              <span className="text-xs sm:text-sm text-grey-light">
                Bekasi, Indonesia
              </span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex group justify-end items-center gap-3">
          <EmailButton />
          {socials.map((social, index) => (
            <Socials key={index} icon={social.icon} link={social.link} />
          ))}
        </div>
      </div>

      {/* row kedua */}
      <div className="grid grid-cols-2">
        {/* CV download */}
        <CVButton />

        {/* Description */}
        <div className="flex-col text-end items-center border-r-2 border-white pr-2">
          <h1 className="text-sm sm:text-md font-semibold">
            Software Engineer
          </h1>
          <h1 className="text-xs sm:text-sm text-grey-light">
            <span className="text-white">AI</span> Enthusiast
          </h1>
        </div>
      </div>
    </SectionContainerBordered>
  );
}
