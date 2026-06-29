"use client";

import Image from "next/image";
import { useState } from "react";

export function ImageSlideshow({
  images,
  alt,
  objectFit = "cover",
}: {
  images: string[];
  alt: string;
  objectFit?: "cover" | "contain";
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const hasMultiple = images.length > 1;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-white">
        <Image
          src={images[index]}
          alt={`${alt} — photo ${index + 1}`}
          fill
          className={objectFit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-card-foreground shadow-sm transition-colors hover:bg-card"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-card-foreground shadow-sm transition-colors hover:bg-card"
          >
            ›
          </button>
          <div className="mt-2 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-primary" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
