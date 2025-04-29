import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Pokeball } from './pokeball';
import { Button } from './button';
import { LuFullscreen } from 'react-icons/lu';
import { GoX } from 'react-icons/go';

interface ProjectsCarouselProps {
  images: string[];
  app_name: string;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ images, app_name }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Preload images
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
      
      img.onerror = () => {
        setErrorImages(prev => ({
          ...prev,
          [index]: true
        }));
      };
      
      img.src = src;
    });
  }, [images]);

  // Handle carousel changes using the API
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrentImageIndex(selectedIndex);
    };

    api.on("select", handleSelect);
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Toggle fullscreen view of current image
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle ESC key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <>
      {images.length > 0 && (
        <div className="relative w-full">
          {/* Fullscreen view */}
          {isFullscreen && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center" onClick={toggleFullscreen}>
              <img 
                src={images[currentImageIndex]} 
                alt={`${app_name} ${currentImageIndex + 1}`} 
                className="max-h-screen max-w-screen object-contain p-4"
              />
              <Button 
                className="fixed top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(false);
                }}
                variant="ghost"
              >
                <GoX/>
              </Button>
            </div>
          )}

          <Carousel
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((imageUrl: string, index: number) => (
                <CarouselItem key={`image-${index}-${imageUrl}`}>
                  {/* Using Shadcn AspectRatio to properly maintain aspect ratio */}
                  <AspectRatio ratio={16/9} className="rounded-lg overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Loading indicator */}
                      {(!loadedImages[index] && currentImageIndex === index) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Pokeball />
                        </div>
                      )}
                      
                      {/* Image with preserved aspect ratio */}
                      <img 
                        src={imageUrl} 
                        alt={`${app_name} ${index + 1}`} 
                        className={`w-full h-full object-contain transition-opacity duration-300 cursor-pointer ${
                          loadedImages[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                        draggable="false"
                        loading="lazy"
                        onClick={toggleFullscreen}
                      />
                      
                      {/* Error state */}
                      {errorImages[index] && currentImageIndex === index && (
                        <div className="absolute inset-0 flex items-center justify-center border">
                          <p className="text-sm text-gray-500">Failed to load image</p>
                        </div>
                      )}
                    </div>
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <CarouselPrevious 
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 opacity-70 hover:opacity-100 transition-opacity" 
            />
            <CarouselNext 
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-10 md:w-10 opacity-70 hover:opacity-100 transition-opacity" 
            />
          </Carousel>
          
          {/* Image counter and fullscreen button */}
          <div className="absolute bottom-2 right-2 flex items-center gap-2 z-10">
            {/* Fullscreen button */}
            <Button 
              onClick={toggleFullscreen}
              className="bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              variant="ghost"
            >
              <LuFullscreen />
            </Button>
            
            {/* Image counter */}
            {images.length > 1 && (
              <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsCarousel;