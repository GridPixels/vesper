import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const fontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Stanton | Full-Stack Engineer",
  description: "Next.js Minimalist Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased bg-gray-100`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
