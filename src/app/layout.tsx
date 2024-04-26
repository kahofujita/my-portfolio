import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaho Fujita",
  description: "Kaho Fujita Portfolio Website",
  icons: {
    icon: "/favicon.svg", // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
