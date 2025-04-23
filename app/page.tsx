import { BloguploadCard } from "@/components/general/BloguploadCard";
import { prisma } from "./utils/db";
import { get } from "http";

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
      <BlogPosts />
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
