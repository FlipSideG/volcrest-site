import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volcrest Capital",
  description:
    "Volcrest Capital builds LLM systems, infrastructure, and applied software across local and cloud environments.",
  icons: {
    icon: '/icon.svg',
  },
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

