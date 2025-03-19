import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaFile } from "react-icons/fa";
import profile from "../../assets/profile/me.webp";
import { 
  Avatar,
  AvatarImage,
  AvatarFallback
 } from "../ui/avatar";
import { Button } from "../ui/button";
import { SectionContainer } from "../ui/section-container";

export function AboutSection() {
  return (
    <SectionContainer id="about">
       {/* row pertama */}
       <div className="grid grid-cols-2">
          {/* PP, Name, Location */}
          <div className="flex gap-2">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src={profile} alt="My Picture"/>
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            
            <div className="flex-col items-center">
              <h1 className="text-md font-semibold">Rigel Gregory F R</h1>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-3 h-3" />
                <span className="text-sm text-grey-light">Bekasi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-end items-center gap-2">
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rigelgfr" ref={null}>
              <FaInstagram className="w-8 h-8" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rigel-gregory-feliciano-rahateen-b6a3b3312/" ref={null}>
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/rigelgfr" ref={null}>
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        {/* row kedua */}
        <div className="grid grid-cols-2">
          {/* CV download */}
          <div className="flex self-center items-center gap-2">
            <Button 
              className="border-1 bg-transparent text-white hover:bg-accent"
              variant="default"
            >
              <FaFile />
              CV
            </Button>
            <p className="text-sm text-grey-light">.pdf</p>
          </div>
          
          {/* Description */}
          <div className="flex-col text-end items-center border-r-2 border-white pr-2">
            <h1 className="text-md font-semibold">Junior Web Developer</h1>
            <h1 className="text-sm text-grey-light"><span className="text-white">Frontend</span> Focused</h1>
          </div>
        </div>
    </SectionContainer>
  )
}
