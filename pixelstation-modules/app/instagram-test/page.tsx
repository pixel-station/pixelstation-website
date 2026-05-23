"use client";

import { useEffect, useState } from "react";
import { InstagramGallery } from "@/modules/instagram-sync/components/InstagramGallery";
import type { InstagramPost } from "@/modules/instagram-sync/types/instagram";

export default function InstagramTestPage() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/instagram");
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Instagram
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Latest from Pixel Station
          </h1>
        </div>

        <InstagramGallery posts={posts} />
      </div>
    </main>
  );
}