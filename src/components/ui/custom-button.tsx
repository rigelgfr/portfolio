import { useState } from "react"
import { copyToClipboard } from "@/utils/copyEmail";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";

import { Button } from "./button";
import { downloadFile } from "@/utils/downloadCV";
import { FaFile, FaGithub } from "react-icons/fa";

export function EmailButton() {
    const [copied, setCopied] = useState(false)
    const email = "rigelrahateen@gmail.com"

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
        <span onClick={handleCopyEmail} className="transition cursor-pointer hover:animate-button-tilt ease-in-out duration-500">
            {copied ? (
            <MdMarkEmailRead className="size-5 sm:size-6 transition" />
            ) : (
            <MdEmail className="size-5 sm:size-6 transition" />
            )}
        </span>
    )
}

export function CVButton() {
  const handleDownloadCV = () => {
      downloadFile({
        url: "/file/cv.pdf",
        fileName: "Rigel_Gregory_CV.pdf",
        successMessage: "CV downloaded successfully!",
        errorMessage: "Failed to download CV. Please try again."
      });
    };

  return (
    <div className="flex self-center items-center gap-2">
      <Button 
        className="border-1 bg-transparent text-white hover:bg-accent/25"
        variant="default"
        onClick={handleDownloadCV}
      >
        <FaFile />
        CV
      </Button>
      <p className="text-sm text-grey-light">.pdf</p>
    </div>
  )
}

export function SourceCodeButton({ source }: { source: string }) {
  return (
    <Button
      size="sm"
      variant="link"
      className="select-none"
    >
      <a href={source} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        <p>source code</p>
      </a>
    </Button>
  )
}