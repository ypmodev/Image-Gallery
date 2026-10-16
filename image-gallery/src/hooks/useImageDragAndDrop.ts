import { useState } from "react";

type UseImageDragAndDropProps = {
  moveImage: (draggedId: number, destinationId: number) => void;
};

export const useImageDragAndDrop = ({
  moveImage,
}: UseImageDragAndDropProps) => {
  const [draggedIdState, setDraggedIdState] = useState<number | null>(null);
  const [dragOverIdState, setDragOverIdState] = useState<number | null>(null);

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

    moveImage(draggedIdState, destinationId);
    resetDragState();
  };

  return {
    draggedIdState,
    dragOverIdState,
    handleDragStart,
    handleDragEnter,
    handleDrop,
    resetDragState,
  };
};
