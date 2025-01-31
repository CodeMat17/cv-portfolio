import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Chukwu | Web Developer",
  description: "Matthew is a full stack Next.js developer.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "supabase",
    "convex",
    "Developers",
    "Developer",
    "Enugu",
    "Developers in Enugu",
       "Developers in Nigeria",
  ],
  authors: [
    { name: "Matthew - CodeMat", url: "https://matthewchukwu.com.ng" },
  ],

  twitter: {
    card: "summary",
    title: "Matthew Chukwu | Web Developer",
    description: "Matthew is a full stack Next.js developer.",
    images: [
      "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
    ],
  },
  openGraph: {
    title: "Matthew Chukwu - CodeMat | Web Developer",
    description: "Matthew is a full stack Next.js developer.",
    url: "https://matthewchukwu.com.ng",
    siteName: "Portfolio website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1689562761/Soft-lutions/Seo/dev.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    // authors: ["Matthew Chukwu"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
