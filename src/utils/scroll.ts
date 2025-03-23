// utils/scrollUtils.ts

/**
 * Scrolls to the specified element ID with navbar offset
 * @param id The ID of the element to scroll to
 * @param navbarHeight The height of the navbar in pixels
 */
export const scrollToSection = (id: string, navbarHeight: number = 64): void => {
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };