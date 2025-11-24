import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volcrest Capital",
  description: "Private Capital for High-Impact Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}

