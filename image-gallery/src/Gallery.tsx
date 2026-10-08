import ImageItem from "./ImageItem";
import { useState } from "react";
import { images } from "./data/imagesData";

const Gallery = () => {
  const [imagesState, setImagesState] = useState(images);
  return imagesState.map((item) => <ImageItem key={item.id} image={item} />);
};

export default Gallery;
