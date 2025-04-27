import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { prisma } from "../utils/db";
import { BloguploadCard } from "@/components/general/BloguploadCard";

async function getData(userId: string) {
  try {
    const data = await prisma.blogPost.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: "desc" },
    });
    return data;
  } catch (error) {
    console.error("Error fetching user blog posts:", error);
    throw new Error("Failed to fetch blog posts. Please try again later.");
  }
}

export default async function DashboardRoute() {
  try {
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
            <BloguploadCard data={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering dashboard:", error);
    return <div>Error loading dashboard. Please try again later.</div>;
  }
}
