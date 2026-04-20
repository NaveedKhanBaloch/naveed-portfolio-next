import { kv } from "@vercel/kv";
import { seedPortfolioContent } from "@/lib/seed";
import type { PortfolioContent } from "@/lib/types";

const CONTENT_KEY = "portfolio:content";

let memoryContent = structuredClone(seedPortfolioContent);

function hasKv() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export function getStorageMode() {
  return hasKv() ? "vercel-kv" : "memory-demo";
}

export async function getPortfolioContent() {
  if (!hasKv()) {
    return memoryContent;
  }

  const stored = await kv.get<PortfolioContent>(CONTENT_KEY);
  if (!stored) {
    await kv.set(CONTENT_KEY, seedPortfolioContent);
    return seedPortfolioContent;
  }

  return stored;
}

export async function savePortfolioContent(content: PortfolioContent) {
  memoryContent = content;
  if (hasKv()) {
    await kv.set(CONTENT_KEY, content);
  }
  return content;
}
