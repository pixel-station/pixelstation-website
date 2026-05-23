import { InstagramGallery } from "@/modules/instagram-sync/components/InstagramGallery";
import { mockInstagramPosts } from "@/modules/instagram-sync/services/mockInstagramPosts";

export default function Home() {
  return (
    <>
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Instagram
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
              Latest from Pixel Station
            </h2>
          </div>

          <InstagramGallery posts={mockInstagramPosts} />
        </div>
      </section>
    </>
  );
}