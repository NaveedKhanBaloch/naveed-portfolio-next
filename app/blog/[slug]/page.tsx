import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/site-shell";
import { getBlogComments, getBlogPost } from "@/lib/storage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://naveed-khan.site";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found"
    };
  }

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords, ...post.tags].filter(Boolean),
    alternates: {
      canonical: url
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.coverImage]
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, comments] = await Promise.all([getBlogPost(slug), getBlogComments(slug)]);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} comments={comments} />;
}
