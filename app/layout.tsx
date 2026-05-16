import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradingAgent AI",
  description: "AI-powered trading research dashboard concept.",
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