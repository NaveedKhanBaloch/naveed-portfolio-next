import { SiteShell } from "@/components/site-shell";
import { getPortfolioContent } from "@/lib/storage";

export default async function HomePage() {
  const content = await getPortfolioContent();

  return <SiteShell content={content} />;
}
