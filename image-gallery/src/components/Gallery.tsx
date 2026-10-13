import { useState } from "react";

import ImageItem from "./ImageItem";
import { imagesData } from "../data/imagesData";
import type { ImageType } from "../types/image";

const Gallery = () => {
  const [imagesState, setImagesState] = useState<ImageType[]>(imagesData);
  const [draggedIdState, setDraggedIdState] = useState<number | null>(null);
  const [dragOverIdState, setDragOverIdState] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleDelete = (idDelete: number) => {
    const isConfirmed = window.confirm("¿Deseas eliminar esta imagen?");

    if (isConfirmed) {
      const remainingImages = imagesState.filter(
        (item) => item.id !== idDelete,
      );
      setImagesState(remainingImages);
      setStatusMessage(`Imagen eliminada. Quedan ${remainingImages.length}.`);
    }
  };

  const handleDragStart = (id: number) => {
    setDraggedIdState(id);
  };
  const handleDragEnter = (id: number) => {
    setDragOverIdState(id);
  };

  const resetDragState = () => {
    setDraggedIdState(null);
    setDragOverIdState(null);
  };

  const handleDrop = (destinationId: number) => {
    if (draggedIdState === null || draggedIdState === destinationId) {
      resetDragState();
      return;
    }

    const fromIndex = imagesState.findIndex(
      (item) => item.id === draggedIdState,
    );
    const toIndex = imagesState.findIndex((item) => item.id === destinationId);

    const reorderedImages = [...imagesState];
    const [movedImage] = reorderedImages.splice(fromIndex, 1);
    reorderedImages.splice(toIndex, 0, movedImage);

    setImagesState(reorderedImages);
    resetDragState();
  };

  return (
    <>
      <p role="status" className="sr-only">
        {statusMessage}
      </p>
      <ul
        role="list"
        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5"
      >
        {imagesState.map((item, index) => (
          <ImageItem
            key={item.id}
            imageProp={item}
            isFeatured={index === 0}
            onDelete={handleDelete}
            isDragging={draggedIdState === item.id}
            isDragOver={
              dragOverIdState === item.id && draggedIdState !== item.id
            }
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragEnd={resetDragState}
          />
        ))}
      </ul>
    </>
  );
};

export default Gallery;
