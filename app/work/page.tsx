import { gallery } from "@/lib/site";
import { GalleryGrid } from "@/components/gallery-grid";

export default function WorkPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Work</h1>
        <p className="text-sm text-zinc-300">Filter by category. Click any piece to open the full image.</p>
      </div>
      <GalleryGrid items={gallery} />
    </div>
  );
}
