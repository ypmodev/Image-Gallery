import { useState } from "react";

import ImageItem from "./ImageItem";
import { imagesData } from "../data/imagesData";
import type { ImageType } from "../types/image";
import "./Gallery.css";

const Gallery = () => {
  const [images] = useState<ImageType[]>(imagesData);

  return (
    <section className="gallery">
      {images.map((item, index) => (
        <ImageItem key={item.id} imageProp={item} isFeatured={index === 0} />
      ))}
    </section>
  );
};
export default Gallery;
