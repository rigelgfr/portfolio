import { useState } from "react";
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaFile } from "react-icons/fa";
import profile from "../../assets/profile/me.webp";
import { 
  Avatar,
  AvatarImage,
  AvatarFallback
 } from "../ui/avatar";
import { Button } from "../ui/button";
import { SectionContainerBordered } from "../ui/section-container";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { copyToClipboard } from "@/utils/copy-email";

export function AboutSection() {
  const [copied, setCopied] = useState(false);
  const email = "rigelrahateen@gmail.com";

  const handleCopyEmail = async () => {
    const success = await copyToClipboard({
      text: email,
      successMessage: "Email copied!"
    });
    
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <SectionContainerBordered id="about">
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
          <div className="flex justify-end items-center gap-3">
            <span onClick={handleCopyEmail} className="transition cursor-pointer hover:scale-110 duration-200">
              {copied ? (
                <MdMarkEmailRead className="w-6 h-6 transition" />
              ) : (
                <MdEmail className="w-6 h-6 transition" />
              )}
            </span>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rigelgfr" ref={null} className="hover:scale-110 transition duration-200">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rigel-gregory-feliciano-rahateen-b6a3b3312/" ref={null} className="hover:scale-110 transition duration-200">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/rigelgfr" ref={null} className="hover:scale-110 transition duration-200">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* row kedua */}
        <div className="grid grid-cols-2">
          {/* CV download */}
          <div className="flex self-center items-center gap-2">
            <Button 
              className="border-1 bg-transparent text-white hover:bg-accent/25"
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
    </SectionContainerBordered>
  )
}
