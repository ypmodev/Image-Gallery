

import ImageItem from "./ImageItem";
import { imagesData } from "./data/imagesData";

const Gallery = () => {
  
  return imagesData.map((item) => <ImageItem key={item.id} imageProp={item} />);
};

export default Gallery;
