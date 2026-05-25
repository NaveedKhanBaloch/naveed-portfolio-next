import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Naveed Khan Baloch | AI Systems Architect",
  description:
    "Professional AI portfolio with case studies, research highlights, and an admin dashboard ready for VPS deployment."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
