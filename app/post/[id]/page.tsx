import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

async function getData(id: string) {
  try {
    const data = await prisma.blogPost.findUnique({
      where: { id },
    });

    if (!data) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw new Error("Failed to fetch the blog post. Please try again later.");
  }
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  try {
    const { id } = await params;
    const data = await getData(id);

    return (
      <div className="max-3xl mx-auto px-4 py-8">
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Back to FM blogs
        </Link>
        <div className="mb-8 mt-6">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {data.title}
          </h1>
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt={data.authorName}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium">{data.authorName}</p>
            <p className="text-sm text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(data.createdAt)}
            </p>
          </div>
        </div>
        <div className="relative h-[300px] w-full mb-8 overflow-hidden rounded-lg">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <Card>
          <CardContent>
            <p className="text-gray-700">{data.content}</p>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error("Error rendering blog post:", error);
    return <div>Error loading blog post. Please try again later.</div>;
  }
}
