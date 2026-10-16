import { useState } from "react";

import { imagesData } from "../data/imagesData";
import type { ImageType } from "../types/image";

export const useImages = () => {
  const [imagesState, setImagesState] = useState<ImageType[]>(imagesData);

  const filterImagesById = (idsToDelete: Set<number>) => {
    const remainingImages = imagesState.filter(
      (item) => !idsToDelete.has(item.id),
    );
    setImagesState(remainingImages);
  };

  const moveImage = (draggedId: number, destinationId: number) => {
    const originalPosition = imagesState.findIndex(
      (item) => item.id === draggedId,
    );
    const destinationPosition = imagesState.findIndex(
      (item) => item.id === destinationId,
    );

    const reorderedImages = [...imagesState];
    const [movedImage] = reorderedImages.splice(originalPosition, 1);

    reorderedImages.splice(destinationPosition, 0, movedImage);

    setImagesState(reorderedImages);
  };

  return { imagesState, filterImagesById, moveImage };
};
