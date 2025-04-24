import { prisma } from "@/app/utils/db";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: { id },
  });

  if (!data) {
    notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-3xl mx-auto px-4 py-8">
      <Link
        href={"/dashboard"}
        className={buttonVariants({ variant: "secondary" })}
      >
        Back to FM blogs
      </Link>
    </div>
  );
}
