import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Naveed Khan Baloch | AI Systems Architect",
  description:
    "Professional AI portfolio with case studies, research highlights, and an admin dashboard built for Vercel deployment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
