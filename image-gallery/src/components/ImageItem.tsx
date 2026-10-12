import type { ImageType } from "../types/image";
import type { MouseEvent } from "react";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageItemProps {
  imageProp: ImageType;
  isFeatured: boolean;
  onDelete: (id: number) => void;
}

const ImageItem = ({ imageProp, isFeatured, onDelete }: ImageItemProps) => {
  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDelete(imageProp.id);
  };

  return (
    <li
      className={`relative ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
    >
      <img
        src={imageProp.url}
        alt={imageProp.description}
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
