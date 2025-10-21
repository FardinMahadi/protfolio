import React, { useState } from "react";
import Image from "next/image";
import { ImageWithFallbackProps } from "../types/ImageWithFallbackProps";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({
  src,
  alt = "",
  width,
  height,
  fill,
  style,
  className,
  fallbackSrc = ERROR_IMG_SRC,
  showRetry = false,
  priority,
  quality,
  sizes,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    setDidError(true);
  };

  const handleRetry = () => {
    setDidError(false);
    setRetryCount((prev) => prev + 1);
  };

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${
        className ?? ""
      }`}
      style={style}
      role="img"
      aria-label={alt || "Image failed to load"}
    >
      <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-2">
        <Image
          src={fallbackSrc}
          alt="Error loading image"
          width={width || 88}
          height={height || 88}
          className="max-w-full max-h-full"
          onError={(e) => {
            // Prevent infinite loop if fallback also fails
            e.currentTarget.style.display = "none";
          }}
          data-original-url={src}
          unoptimized // data URLs don't need optimization
        />
        {showRetry && src && (
          <button
            onClick={handleRetry}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 underline"
            aria-label="Retry loading image"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  ) : (
    <Image
      src={retryCount > 0 ? `${src}?retry=${retryCount}` : src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      style={style}
      onError={handleError}
      priority={priority}
      quality={quality}
      sizes={sizes}
      {...rest}
    />
  );
}
