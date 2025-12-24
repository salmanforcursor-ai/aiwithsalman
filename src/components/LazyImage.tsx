import { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  onLoad?: () => void;
}

export function LazyImage({ src, alt, placeholder, onLoad, className = '', ...props }: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!imageRef) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const actualSrc = img.dataset.src;
            
            if (actualSrc && imageSrc === placeholder) {
              img.src = actualSrc;
              setImageSrc(actualSrc);
            }

            observerRef.current?.unobserve(img);
          }
        });
      },
      { rootMargin: '50px' }
    );

    observerRef.current.observe(imageRef);

    return () => {
      if (observerRef.current && imageRef) {
        observerRef.current.unobserve(imageRef);
      }
    };
  }, [imageRef, placeholder]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      data-src={src}
      alt={alt}
      className={`transition-opacity duration-300 ${className}`}
      onLoad={onLoad}
      {...props}
    />
  );
}
