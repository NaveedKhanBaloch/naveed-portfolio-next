import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { deleteBlogComment, getBlogComments, updateBlogCommentStatus } from "@/lib/storage";
import type { BlogCommentStatus } from "@/lib/types";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = (await request.json()) as { status?: BlogCommentStatus };

  if (body.status !== "approved" && body.status !== "pending") {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const comment = await updateBlogCommentStatus(id, body.status);
  const comments = await getBlogComments(undefined, { includePending: true });
  return NextResponse.json({ comment, comments, message: "Comment updated." });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await deleteBlogComment(id);
  const comments = await getBlogComments(undefined, { includePending: true });
  return NextResponse.json({ comments, message: "Comment deleted." });
}
