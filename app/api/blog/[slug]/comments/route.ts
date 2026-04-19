import { NextResponse } from "next/server";
import { getBlogComments, getBlogPost, saveBlogComment } from "@/lib/storage";
import type { BlogComment } from "@/lib/types";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const comments = await getBlogComments(slug);
  return NextResponse.json({ comments });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post || !post.allowComments) {
    return NextResponse.json({ error: "Comments are not available for this post." }, { status: 400 });
  }

  const body = (await request.json()) as {
    name?: string;
    email?: string;
    website?: string;
    message?: string;
  };

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json({ error: "Name, email, and comment are required." }, { status: 400 });
  }

  const comment: BlogComment = {
    id: crypto.randomUUID(),
    postSlug: slug,
    name: body.name.trim(),
    email: body.email.trim(),
    website: body.website?.trim() || "",
    message: body.message.trim(),
    createdAt: new Date().toISOString(),
    status: "pending"
  };

  await saveBlogComment(comment);

  return NextResponse.json({
    comment,
    message: "Comment submitted successfully. It will appear after review."
  });
}
