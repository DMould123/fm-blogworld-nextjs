import { prisma } from "./utils/db";

// Fetch data from the database
async function getPosts() {
  const posts = await prisma.BlogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        Latest FM Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <h1 key={post.title}>{post.title}</h1>
        ))}
      </div>
    </div>
  );
}
