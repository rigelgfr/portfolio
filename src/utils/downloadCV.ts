import { toast } from "sonner";

interface DownloadFileOptions {
  url: string;
  fileName?: string;
  successMessage?: string;
  errorMessage?: string;
}

/**
 * A utility function that downloads a file and shows Sonner toast notifications
 */
export const downloadFile = ({
    url,
    fileName = "cv.pdf",
    successMessage = "Download started",
    errorMessage = "Failed to download file"
  }: DownloadFileOptions): void => {
    try {
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = window.URL.createObjectURL(blob);
          
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = fileName;
          link.style.display = "none";
          
          document.body.appendChild(link);
          link.click();
          
          setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);
          }, 100);
          
          toast.success(successMessage, {
            duration: 3000,
          });
        })
        .catch(error => {
          throw error;
        });
    } catch (error) {
      console.error("Download failed:", error);
      
      toast.error(errorMessage, {
        duration: 3000,
      });
    }
  };