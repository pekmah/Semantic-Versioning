import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const interFont = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ecomm Shop",
    absolute: "Ecomm Shop",
  },
  description: "An Ecommerce platform built with NextJs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
