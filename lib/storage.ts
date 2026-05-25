import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { seedPortfolioContent } from "@/lib/seed";
import type { PortfolioContent } from "@/lib/types";

const DEFAULT_CONTENT_FILE = "data/portfolio-content.json";

let memoryContent = structuredClone(seedPortfolioContent);

function getContentFilePath() {
  return process.env.CONTENT_FILE_PATH || DEFAULT_CONTENT_FILE;
}

export function getStorageMode() {
  return `file:${getContentFilePath()}`;
}

export async function getPortfolioContent() {
  try {
    const file = await readFile(getContentFilePath(), "utf8");
    const content = JSON.parse(file) as PortfolioContent;
    memoryContent = content;
    return content;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error("Unable to read stored portfolio content.", error);
    }

    return memoryContent;
  }
}

export async function savePortfolioContent(content: PortfolioContent) {
  memoryContent = content;
  const contentFile = getContentFilePath();
  await mkdir(path.dirname(contentFile), { recursive: true });
  await writeFile(contentFile, JSON.stringify(content, null, 2), "utf8");
  return content;
}
