import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardRoute() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your FM Blog Posts</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Blog
        </Link>
      </div>
    </div>
  );
}
