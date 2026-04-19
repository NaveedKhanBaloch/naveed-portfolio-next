import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { getBlogComments } from "@/lib/storage";

export async function GET() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const comments = await getBlogComments(undefined, { includePending: true });
  return NextResponse.json({ comments });
}
