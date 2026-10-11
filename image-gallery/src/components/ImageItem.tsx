import type { ImageType } from "../types/image";

interface ImageItemProps {
  imageProp: ImageType;
  isFeatured: boolean;
}

const ImageItem = ({ imageProp, isFeatured }: ImageItemProps) => {
  return (
    <img
      src={imageProp.url}
      alt={imageProp.description}
      className={`h-full w-full object-cover ${
        isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    />
  );
};

export default ImageItem;
