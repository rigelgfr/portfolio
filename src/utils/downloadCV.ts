/**
 * Utility functions for downloading CV file
 */

/**
 * Downloads a CV file from the server
 * 
 * @param url - The URL of the CV file to download
 * @param fileName - The name to save the file as
 * @returns Promise that resolves with success or rejects with error
 */
export const downloadCV = async (url: string, fileName: string): Promise<void> => {
  try {
    // Create a direct link to download the file
    const link = document.createElement('a');
    
    // Use the direct GitHub raw URL without fetching it first
    link.href = url;
    
    // Set attributes for download
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error downloading CV:', error);
    return Promise.reject(error);
  }
};