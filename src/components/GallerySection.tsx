"use client";

import { useState, useEffect } from "react";
import { imageCaptions } from "@/data/imageCaptions";
import styles from "./GallerySection.module.scss";

interface GallerySectionProps {
  nationId: string;
  section: string;
  maxImages?: number;
}

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export default function GallerySection({
  nationId,
  section,
  maxImages = 10,
}: GallerySectionProps) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: ImageItem[] = [];

      for (let i = 1; i <= maxImages; i++) {
        const caption = imageCaptions[nationId]?.[section]?.[i];
        const src = `/images/gallery/${nationId}/${capitalize(nationId)}_${capitalize(section)}${i}.jpg`;

        // Проверяем существование изображения
        const exists = await checkImageExists(src);

        if (exists) {
          loadedImages.push({
            src,
            alt: `${section} ${i}`,
            caption,
          });
        }
      }

      setImages(loadedImages);
      setLoaded(true);
    };

    loadImages();
  }, [nationId, section, maxImages]);

  if (!loaded || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.gallerySection}>
      {images.map((img, idx) => (
        <figure key={idx} className={styles.galleryItem}>
          <img
            src={img.src}
            alt={img.alt || ""}
            className={styles.galleryImage}
            loading="lazy"
          />
          {img.caption && (
            <figcaption className={styles.galleryCaption}>
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function checkImageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
