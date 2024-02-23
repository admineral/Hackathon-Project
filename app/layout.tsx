import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";


import StarsCanvas from "@/components/Star/StarBackground";

export const metadata = {
  metadataBase: new URL('https://www.kronews.at'),
  title: "Kronews",
  description: "Krone-Hackathon",
  url: "https://www.kronews.at/",
  openGraph: {
    images: '/og-image.png', 
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "min-h-screen flex flex-col justify-between")}>
        <Suspense fallback="...">
        <StarsCanvas />
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