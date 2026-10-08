import type { Image } from "./types/image";

interface ImageItemProps {
  image: Image;
}

const ImageItem = ({ image }: ImageItemProps) => {
  return <img src={image.src} />;
};

export default ImageItem;
