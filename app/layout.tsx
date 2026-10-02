import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { boska } from "./font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LineUp Queue",
  description: "A line management for salons",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${boska.variable} h-full antialiased`}
      // {/* className={`h-full ${velisse.variable}`} */}
    >
      {/* // suppressHydrationWarning silences React hydration errors caused by browser extensions (grammarly) injecting attributes eg: data-new-gr-c-s-check-loaded="14.1024.0" data-gr-ext-installed="" */}
      <body className="min-h-full flex flex-col font-geist-sans font-geist-mono" suppressHydrationWarning>{children}</body>
    </html>
  );
}
