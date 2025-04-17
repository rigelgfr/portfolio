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
    // Fetch the file
    const response = await fetch(url);
    
    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
    }
    
    // Convert the response to a blob
    const blob = await response.blob();
    
    // Create a URL for the blob
    const downloadUrl = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error downloading CV:', error);
    return Promise.reject(error);
  }
};