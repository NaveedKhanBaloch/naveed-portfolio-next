import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin-dashboard";
import { getBlogComments, getBlogPosts, getPortfolioContent, getStorageMode, isBlobConfigured } from "@/lib/storage";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function AdminPage() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const [content, posts, comments] = await Promise.all([
    getPortfolioContent(),
    getBlogPosts({ includeDrafts: true }),
    getBlogComments(undefined, { includePending: true })
  ]);

  return (
    <AdminDashboard
      initialContent={content}
      initialPosts={posts}
      initialComments={comments}
      storageMode={getStorageMode()}
      blobEnabled={isBlobConfigured()}
      defaultPublishedAt={new Date().toISOString().slice(0, 10)}
    />
  );
}
