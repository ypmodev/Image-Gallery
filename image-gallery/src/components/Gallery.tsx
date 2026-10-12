import { useState } from "react";

import ImageItem from "./ImageItem";
import { imagesData } from "../data/imagesData";
import type { ImageType } from "../types/image";

const Gallery = () => {
  const [images, setImages] = useState<ImageType[]>(imagesData);

   const handleDelete = (id: number) => {
    const remainingImages = images.filter((image) => image.id !== id);
    setImages(remainingImages);
  };

  return (
    <ul role="list" className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
      
      {images.map((item, index) => (
        <ImageItem
         key={item.id} 
         imageProp={item}
          isFeatured={index === 0} 
        onDelete={handleDelete}
        />
      
      ))}
    </ul>
  );
};
export default Gallery;
