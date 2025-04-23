import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: { authorId: userId },
    orderBy: { createdAt: "desc" },
  });
  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return <div>Error: User not found</div>;
  }

  const data = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your FM Blog Posts</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.content}</p>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-32 object-cover rounded mt-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
