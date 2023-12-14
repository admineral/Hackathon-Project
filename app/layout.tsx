import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL('https://www.kronews.at'),
  title: "Kronews",
  description: "Krone-Hackathon",
  url: "https://www.kronews.at/",
  openGraph: {
    images: '/og-image.png', // replace with your Open Graph image's relative path
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "bg-gradient-to-br from-indigo-50 via-white to-cyan-100 min-h-screen flex flex-col justify-between")}>
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex-grow w-full flex flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}