export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: "Character" | "Portrait" | "Character Sheet" | "Sketch";
  width: number;
  height: number;
  alt: string;
  year: number;
};
