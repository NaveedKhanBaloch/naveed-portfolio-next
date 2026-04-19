import { kv } from "@vercel/kv";
import { seedBlogPosts, seedPortfolioContent } from "@/lib/seed";
import type { BlogComment, BlogCommentStatus, BlogPost, PortfolioContent } from "@/lib/types";

const CONTENT_KEY = "portfolio:content";
const POSTS_KEY = "portfolio:posts";
const COMMENTS_KEY = "portfolio:comments";

let memoryContent = structuredClone(seedPortfolioContent);
let memoryPosts = structuredClone(seedBlogPosts);
let memoryComments: BlogComment[] = [];

function hasKv() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

function normalizeBlogPost(post: BlogPost): BlogPost {
  return {
    ...post,
    metaDescription: post.metaDescription || post.excerpt,
    suggestedUrl: post.suggestedUrl || `/blog/${post.slug}`,
    primaryKeyword: post.primaryKeyword || post.tags[0] || "",
    secondaryKeywords: post.secondaryKeywords || post.tags.slice(1),
    allowComments: post.allowComments ?? true
  };
}

function normalizeComments(comments: BlogComment[]) {
  return comments.map((comment) => ({
    ...comment,
    website: comment.website || ""
  }));
}

export function getStorageMode() {
  return hasKv() ? "vercel-kv" : "memory-demo";
}

export function isBlobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
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

export async function getBlogPosts(options?: { includeDrafts?: boolean }) {
  let posts: BlogPost[];

  if (!hasKv()) {
    posts = memoryPosts;
  } else {
    const stored = await kv.get<BlogPost[]>(POSTS_KEY);
    if (!stored) {
      await kv.set(POSTS_KEY, seedBlogPosts);
      posts = seedBlogPosts;
    } else {
      posts = stored;
    }
  }

  const normalized = posts.map(normalizeBlogPost);
  const sorted = sortPosts(normalized);
  if (options?.includeDrafts) {
    return sorted;
  }
  return sorted.filter((post) => post.status === "published");
}

export async function getBlogPost(slug: string, includeDraft = false) {
  const posts = await getBlogPosts({ includeDrafts: true });
  return posts.find((post) => post.slug === slug && (includeDraft || post.status === "published")) ?? null;
}

export async function saveBlogPost(post: BlogPost) {
  const posts = await getBlogPosts({ includeDrafts: true });
  const nextPosts = posts.filter((item) => item.slug !== post.slug).concat(normalizeBlogPost(post));
  memoryPosts = nextPosts;
  if (hasKv()) {
    await kv.set(POSTS_KEY, nextPosts);
  }
  return normalizeBlogPost(post);
}

export async function deleteBlogPost(slug: string) {
  const posts = await getBlogPosts({ includeDrafts: true });
  const nextPosts = posts.filter((post) => post.slug !== slug);
  memoryPosts = nextPosts;
  if (hasKv()) {
    await kv.set(POSTS_KEY, nextPosts);
  }
}

export async function getBlogComments(postSlug?: string, options?: { includePending?: boolean }) {
  let comments: BlogComment[];

  if (!hasKv()) {
    comments = memoryComments;
  } else {
    const stored = await kv.get<BlogComment[]>(COMMENTS_KEY);
    comments = stored ? normalizeComments(stored) : [];
  }

  const filteredByPost = postSlug ? comments.filter((comment) => comment.postSlug === postSlug) : comments;
  const visible = options?.includePending ? filteredByPost : filteredByPost.filter((comment) => comment.status === "approved");
  return [...visible].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function saveBlogComment(comment: BlogComment) {
  const comments = await getBlogComments(undefined, { includePending: true });
  const nextComments = comments.filter((item) => item.id !== comment.id).concat(comment);
  memoryComments = nextComments;
  if (hasKv()) {
    await kv.set(COMMENTS_KEY, nextComments);
  }
  return comment;
}

export async function updateBlogCommentStatus(id: string, status: BlogCommentStatus) {
  const comments = await getBlogComments(undefined, { includePending: true });
  const nextComments = comments.map((comment) => (comment.id === id ? { ...comment, status } : comment));
  memoryComments = nextComments;
  if (hasKv()) {
    await kv.set(COMMENTS_KEY, nextComments);
  }
  return nextComments.find((comment) => comment.id === id) ?? null;
}

export async function deleteBlogComment(id: string) {
  const comments = await getBlogComments(undefined, { includePending: true });
  const nextComments = comments.filter((comment) => comment.id !== id);
  memoryComments = nextComments;
  if (hasKv()) {
    await kv.set(COMMENTS_KEY, nextComments);
  }
}
