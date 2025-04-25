import { BloguploadCard } from "@/components/general/BloguploadCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

// Fetch data from the database
async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
    },
  });
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Latest FM Posts
      </h1>
      <Suspense fallback={<BlogPostsGrid />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((post) => (
        <BloguploadCard data={post} key={post.id} />
      ))}
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="relative h-48 w-full bg-gray-300"></div>

          {/* Content Skeleton */}
          <div className="p-4">
            <div className="h-6 w-3/4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
