import type { ImageType } from "../types/image";
import "./ImageItem.css";

interface ImageItemProps {
  imageProp: ImageType;
  isFeatured: boolean;
}

const ImageItem = ({ imageProp, isFeatured }: ImageItemProps) => {
  return (
    <img
      src={imageProp.url}
      alt={imageProp.description}
      className={isFeatured ? "image image--featured" : "image"}
    />
  );
};

export default ImageItem;
