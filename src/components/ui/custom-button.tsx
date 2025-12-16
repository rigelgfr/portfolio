import { useState } from "react";
import { copyToClipboard } from "@/utils/copyEmail";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";

import { Button } from "./button";
import { downloadCV } from "@/utils/downloadCV";
import { FaFile, FaGithub, FaGlobe } from "react-icons/fa";
import { toast } from "sonner";

export function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "rigelrahateen@gmail.com";

  const handleCopyEmail = async () => {
    const success = await copyToClipboard({
      text: email,
      successMessage: "Email copied!",
    });

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  };
  return (
    <span
      onClick={handleCopyEmail}
      className="transition cursor-pointer hover:animate-button-tilt ease-in-out duration-500"
    >
      {copied ? (
        <MdMarkEmailRead className="size-5 sm:size-6 transition" />
      ) : (
        <MdEmail className="size-5 sm:size-6 transition" />
      )}
    </span>
  );
}

export function CVButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    console.log("Starting CV download");
    setIsDownloading(true);

    try {
      await downloadCV(
        "https://drive.google.com/uc?export=download&id=1YFCbkDflgtmrum1hjvXZplsJ-1hDS4z7",
        "Rigel_Gregory_CV.pdf"
      );

      // Show success message
      toast.success("CV downloaded successfully!");
    } catch (error) {
      // Show error message
      toast.error("Failed to download CV. Please try again.");
      console.error("CV download error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex self-center items-center gap-2">
      <Button
        className="border-1 bg-transparent text-white hover:bg-accent/25"
        variant="default"
        onClick={handleDownloadCV}
        disabled={isDownloading}
      >
        <FaFile />
        {isDownloading ? "Downloading..." : "CV"}
      </Button>
      <p className="text-sm text-grey-light">.pdf</p>
    </div>
  );
}

export function SourceCodeButton({ source }: { source: string | undefined }) {
  return (
    <Button size="sm" variant="link" className="select-none px-0">
      <a
        href={source}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <p>source code</p>
      </a>
    </Button>
  );
}

export function LiveButton({ source }: { source: string }) {
  return (
    <Button size="sm" variant="link" className="select-none px-0">
      <a
        href={source}
        className="flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGlobe />
        <p>LIVE</p>
      </a>
    </Button>
  );
}
