import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ImageItem from "./ImageItem";

const props = {
  imageProp: {
    id: 1,
    url: "/paisaje.jpg",
    description: "Paisaje",
  },
  isFeatured: false,
  isSelected: false,
  isDragging: false,
  isDragOver: false,
  onDelete: () => {},
  onToggleSelect: () => {},
  onDragStart: () => {},
  onDragEnter: () => {},
  onDrop: () => {},
  onDragEnd: () => {},
};

describe("ImageItem - Renderizado", () => {
  it("se renderiza correctamente", () => {
    render(<ImageItem {...props} />);

    expect(screen.getByRole("listitem")).toBeTruthy();
  });
});
