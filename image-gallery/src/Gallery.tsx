import type { Image } from "./types/image";
import ImageItem from "./ImageItem";

const images: Image[] = [
  { id: 1, src: "https://picsum.photos/id/1/200/300" },
  { id: 2, src: "https://picsum.photos/id/2/200/300" },
  { id: 3, src: "https://picsum.photos/id/3/200/300" },
  { id: 4, src: "https://picsum.photos/id/4/200/300" },
  { id: 5, src: "https://picsum.photos/id/5/200/300" },
  { id: 6, src: "https://picsum.photos/id/6/200/300" },
  { id: 7, src: "https://picsum.photos/id/7/200/300" },
  { id: 8, src: "https://picsum.photos/id/8/200/300" },
];

const Gallery = () => {
  return images.map((item) => <ImageItem key={item.id} image={item} />);
};

export default Gallery;
