import { toast } from "sonner";

interface CopyToClipboardOptions {
  text: string;
  successMessage?: string;
  errorMessage?: string;
}

/**
 * A utility function that copies the email to the clipboard and shows Sonner toast notifications
 */
export const copyToClipboard = async ({
  text,
  successMessage = "Copied email to clipboard",
  errorMessage = "Failed to copy email to clipboard"
}: CopyToClipboardOptions): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    
    toast.success(successMessage, {
      duration: 1500,
    });
    
    return true;
  } catch (error) {
    console.error("Clipboard write failed:", error);
    
    toast.error(errorMessage, {
      duration: 3000,
    });
    
    return false;
  }
};