import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin-dashboard";
import { getPortfolioContent, getStorageMode } from "@/lib/storage";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function AdminPage() {
  const isAuthed = await isAdminAuthenticated();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const content = await getPortfolioContent();

  return (
    <AdminDashboard
      initialContent={content}
      storageMode={getStorageMode()}
    />
  );
}
