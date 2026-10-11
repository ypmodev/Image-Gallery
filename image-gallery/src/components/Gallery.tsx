import { useState } from "react";

import ImageItem from "./ImageItem";
import { imagesData } from "../data/imagesData";
import type { ImageType } from "../types/image";

const Gallery = () => {
  const [images] = useState<ImageType[]>(imagesData);

  return (
    <main className="mx-auto w-full px-4 py-6 md:px-8 lg:px-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Image Gallery</h1>

        <p className="mt-2 text-gray-500">
          Una colección de imágenes para explorar
        </p>
      </header>

      <section
        id="gallery"
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5"
      >
        {images.map((item, index) => (
          <ImageItem key={item.id} imageProp={item} isFeatured={index === 0} />
        ))}
      </section>
    </main>
  );
};
export default Gallery;
