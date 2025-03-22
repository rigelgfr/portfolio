import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Pokeball } from './pokeball';

interface ProjectsCarouselProps {
  images: string[];
  app_name: string;
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ images, app_name }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  const [api, setApi] = useState<CarouselApi | null>(null);

  // Preload images
  useEffect(() => {
    // Start preloading all images
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
      
      // Start loading the image
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
    
    // Initial selection
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <>
      {images.length > 0 && (
        <div className="relative w-full">
          <Carousel
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {images.map((imageUrl: string, index: number) => (
                <CarouselItem key={`image-${index}-${imageUrl}`}>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    {/* Loading indicator */}
                    {(!loadedImages[index] && currentImageIndex === index) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Pokeball />
                      </div>
                    )}
                    
                    {/* Image */}
                    <img 
                      src={imageUrl} 
                      alt={`${app_name} ${index + 1}`} 
                      className={`w-full h-full select-none object-contain transition-opacity duration-300 ${
                        loadedImages[index] ? 'opacity-100' : 'opacity-0'
                      }`}
                      draggable="false"
                      loading='lazy'
                    />
                    
                    {/* Error state */}
                    {errorImages[index] && currentImageIndex === index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <p className="text-sm text-gray-500">Failed to load image</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows positioned at edges for better UX */}
            <CarouselPrevious 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 opacity-70 hover:opacity-100 transition-opacity" 
            />
            <CarouselNext 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 opacity-70 hover:opacity-100 transition-opacity" 
            />
          </Carousel>
          
          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectsCarousel;