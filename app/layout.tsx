import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Vedant Sheel - AI Developer & Innovator",
  description:
    "Portfolio of Vedant Sheel, a Grade 11 AI developer, machine learning researcher, and award-winning science fair innovator from Canada.",
  keywords:
    "AI developer, machine learning, science fair, innovation, Vedant Sheel, artificial intelligence, Canada",
  authors: [{ name: "Vedant Sheel", url: "https://github.com/VedantSheel08" }],
  creator: "Vedant Sheel",
  openGraph: {
    title: "Vedant Sheel - AI Developer & Innovator",
    description:
      "Innovative AI solutions tackling real-world challenges across healthcare, sustainability, and social impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sheel - AI Developer & Innovator",
    description:
      "Innovative AI solutions tackling real-world challenges across healthcare, sustainability, and social impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
