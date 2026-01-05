import data from "@/lib/gallery.json";

export const site = {
  artist: data.artist,
  instagram: data.instagram,
  email: data.email
} as const;

export const gallery = data.items;
