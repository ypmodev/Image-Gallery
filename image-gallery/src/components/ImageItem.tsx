import type { ImageType } from "../types/image";
import type { MouseEvent, DragEvent } from "react";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageItemProps {
  imageProp: ImageType;
  isFeatured: boolean;
  onDelete: (id: number) => void;
  isDragging: boolean;
  isDragOver: boolean;
  onDragStart: (id: number) => void;
  onDragEnter: (id: number) => void;
  onDrop: (id: number) => void;
  onDragEnd: () => void;
}

const ImageItem = ({
  imageProp,
  isFeatured,
  isDragging,
  isDragOver,
  onDelete,
  onDragStart,
  onDragEnter,
  onDrop,
  onDragEnd,
}: ImageItemProps) => {
  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete(imageProp.id);
  };

  const handleDragOver = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const featuredClasses = isFeatured ? "lg:col-span-2 lg:row-span-2" : "";
  const draggingClasses = isDragging ? "opacity-50" : "";
  const dragOverClasses = isDragOver ? "ring-2 ring-blue-500" : "";

  return (
    <li
      draggable
      onDragStart={() => onDragStart(imageProp.id)}
      onDragEnter={() => onDragEnter(imageProp.id)}
      onDragOver={handleDragOver}
      onDrop={() => onDrop(imageProp.id)}
      onDragEnd={onDragEnd}
      className={`relative cursor-grab rounded-lg ${featuredClasses} ${draggingClasses} ${dragOverClasses}`}
    >
      <img
        src={imageProp.url}
        alt={imageProp.description}
        draggable={false}
        className="aspect-square w-full rounded-lg object-cover transition-opacity duration-200 hover:opacity-80"
      />

      <Button
        variant="secondary"
        size="icon"
        onClick={handleDeleteClick}
        aria-label={`Eliminar imagen: ${imageProp.description}`}
        className="absolute right-2 top-2 rounded-full bg-white/90 text-red-600 hover:bg-red-600 hover:text-white"
      >
        <Trash2 aria-hidden="true" />
      </Button>
    </li>
  );
};

export default ImageItem;
