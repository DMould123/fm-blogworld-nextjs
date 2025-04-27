"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return redirect("/api/auth/register");
    }

    const title = formData.get("title");
    const content = formData.get("content");
    const url = formData.get("url");

    if (!title || !content || !url) {
      throw new Error("All fields are required.");
    }

    await prisma.blogPost.create({
      data: {
        title: title as string,
        content: content as string,
        imageUrl: url as string,
        authorId: user.id,
        authorImage: user.picture as string,
        authorName: user.given_name as string,
      },
    });

    return redirect("/dashboard");
  } catch (error) {
    console.error("Error during blog post submission:", error);
    throw new Error("Failed to submit the blog post. Please try again.");
  }
}
