import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LazyImage } from './LazyImage';

interface ImageCarouselItem {
  src: string;
  alt: string;
  title: string;
}

interface ImageCarouselProps {
  images: ImageCarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ImageCarousel({ images, autoPlay = true, autoPlayInterval = 5000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full">
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <LazyImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            {/* Title overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold text-sm sm:text-base">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
