import Image from "next/image";
import type { InstagramPost } from "../types/instagram";

type InstagramGalleryProps = {
  posts: InstagramPost[];
};

export function InstagramGallery({ posts }: InstagramGalleryProps) {
  
if (posts.length === 0) {
  return (
    <p className="text-center text-slate-500">
      No Instagram posts available.
    </p>
  );
}

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="relative aspect-square">
            <Image
              src={post.thumbnailUrl || post.mediaUrl}
              alt={post.caption || "Instagram post"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </a>
      ))}
    </section>
  );
}