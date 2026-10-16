import { useState } from "react";

export const useImageSelection = () => {
  const [selectedIds, setSelectedIds] = useState<Set<number>>(
    new Set(),
  );

  const handleToggleSelect = (id: number) => {
    const newSelectedIds = new Set(selectedIds);

    if (newSelectedIds.has(id)) {
      newSelectedIds.delete(id);
    } else {
      newSelectedIds.add(id);
    }

    setSelectedIds(newSelectedIds);
  };

  const removeFromSelection = (idDelete: number) => {
    const newSelectedIds = new Set(selectedIds);
    newSelectedIds.delete(idDelete);
    setSelectedIds(newSelectedIds);
  };

  const clearSelection = () => {
    setSelectedIds(new Set());
  };

  return {
    selectedIds,
    handleToggleSelect,
    removeFromSelection,
    clearSelection,
  };
};