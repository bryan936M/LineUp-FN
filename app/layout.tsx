import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const velisse = localFont({
  src: [
    {
      path: "../app/fonts/VelisseDisplay-Bold.woff",
      style: "bold",
      weight: "700",
    },
    {
      path: "../app/fonts/VelisseDisplay-Medium.woff",
      style: "medium",
      weight: "500",
    },
    {
      path: '../app/fonts/VelisseDisplay-Italic.woff',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../app/fonts/VelisseDisplay-Regular.woff',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../app/fonts/VelisseDisplay-Light.woff',
      style: 'light',
      weight: '300',
    },
  ],
  variable: "--font-velisse",
});

export const metadata: Metadata = {
  title: "LineUp Queue",
  description: "A line management for salons",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  console.log('Velisse Font: ', velisse)
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`${velisse.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
