import type { ImageType } from "./types/image";

interface ImageItemProps {
  imageProp: ImageType;
}

const ImageItem = ({ imageProp }: ImageItemProps) => {
  return <img src={imageProp.url} alt={imageProp.description} />;
};

export default ImageItem;
