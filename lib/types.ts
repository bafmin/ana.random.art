export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  // Keep this flexible because content is sourced from JSON.
  // Category labels are used for filtering UI, not for strict typing.
  category: string;
  width: number;
  height: number;
  alt: string;
  year: number;
};
