import type { ImageType } from "../types/image";
import type { MouseEvent, DragEvent } from "react";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageItemProps {
  imageProp: ImageType;
  isFeatured: boolean;
  isSelected: boolean;
  isDragging: boolean;
  isDragOver: boolean;
  onDelete: (id: number) => void;
  onToggleSelect: (id: number) => void;
  onDragStart: (id: number) => void;
  onDragEnter: (id: number) => void;
  onDrop: (id: number) => void;
  onDragEnd: () => void;
}

const ImageItem = ({
  imageProp,
  isFeatured,
  isSelected,
  isDragging,
  isDragOver,
  onDelete,
  onToggleSelect,
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
  const selectedClasses = isSelected ? "ring-4 ring-indigo-600" : "";

  return (
    <li
      draggable
      onClick={() => onToggleSelect(imageProp.id)}
      onDragStart={() => onDragStart(imageProp.id)}
      onDragEnter={() => onDragEnter(imageProp.id)}
      onDragOver={handleDragOver}
      onDrop={() => onDrop(imageProp.id)}
      onDragEnd={onDragEnd}
      className={`relative cursor-grab rounded-lg transition-transform duration-200 hover:z-10 hover:scale-[1.02] ${featuredClasses} ${draggingClasses} ${dragOverClasses} ${selectedClasses}`}
    >
      <img
        src={imageProp.url}
        alt={imageProp.description}
        width={400}
        height={400}
        loading={isFeatured ? "eager" : "lazy"}
        draggable={false}
        className="aspect-square w-full rounded-lg object-cover transition-opacity duration-200 hover:opacity-80"
      />

      {isSelected && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg bg-blue-600/35"
        />
      )}

      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleSelect(imageProp.id)}
        onClick={(event) => event.stopPropagation()}
        aria-label={`Seleccionar la imagen: ${imageProp.description}`}
        className="peer absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer appearance-none rounded-full border-2 border-white bg-indigo-600 opacity-0 shadow-lg transition-opacity duration-200 checked:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-2xl font-bold text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100"
      >
        ✓
      </span>

      {!isSelected && (
        <Button
          variant="secondary"
          size="icon"
          onClick={handleDeleteClick}
          aria-label={`Eliminar la imagen: ${imageProp.description}`}
          className="absolute right-2 top-2 rounded-full bg-white/70 text-red-600 shadow-sm backdrop-blur-sm hover:bg-red-600 hover:text-white focus-visible:bg-red-600 focus-visible:text-white"
        >
          <Trash2 aria-hidden="true" />
        </Button>
      )}
    </li>
  );
};

export default ImageItem;
