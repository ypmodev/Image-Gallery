import ImageItem from "./ImageItem";
import { useImages } from "../hooks/useImageManagement";
import { useImageSelection } from "../hooks/useImageSelection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useImageDragAndDrop } from "../hooks/useImageDragAndDrop"; // AÑADIR

const Gallery = () => {
  const { imagesState, filterImagesById, moveImage } = useImages();
  const {
    selectedIds,
    handleToggleSelect,
    removeFromSelection,
    clearSelection,
  } = useImageSelection();

  const {
    draggedIdState,
    dragOverIdState,
    handleDragStart,
    handleDragEnter,
    handleDrop,
    resetDragState,
  } = useImageDragAndDrop({ moveImage });

  const handleDelete = (idDelete: number) => {
    const isConfirmed = window.confirm("¿Deseas eliminar esta imagen?");

    if (isConfirmed) {
      filterImagesById(new Set([idDelete]));
      removeFromSelection(idDelete);

      toast.success("Imagen eliminada");
    }
  };

  const handleDeleteSelected = () => {
    const count = selectedIds.size;
    const isConfirmed = window.confirm(`¿Eliminar las imágenes seleccionadas?`);

    if (isConfirmed) {
      filterImagesById(selectedIds);
      clearSelection();

      toast.success(`Imágenes eliminadas: ${count}`);
    }
  };

  return (
    <>
      {selectedIds.size > 0 && (
        <div className="mb-4 flex justify-end">
          <Button
            variant="destructive"
            onClick={handleDeleteSelected}
            className="bg-pink-100 text-red-600 shadow-sm hover:bg-red-600 hover:text-white focus-visible:bg-red-600 focus-visible:text-white"
          >
            Eliminar seleccionadas ({selectedIds.size})
          </Button>
        </div>
      )}

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
        {imagesState.map((item, index) => (
          <ImageItem
            key={item.id}
            imageProp={item}
            isFeatured={index === 0}
            isSelected={selectedIds.has(item.id)}
            isDragging={draggedIdState === item.id}
            isDragOver={
              dragOverIdState === item.id && draggedIdState !== item.id
            }
            onDelete={handleDelete}
            onToggleSelect={handleToggleSelect}
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
