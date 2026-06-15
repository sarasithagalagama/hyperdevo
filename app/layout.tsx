import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "HyperDevo | Sri Lankan Creative Digital Agency",
  description: "HyperDevo is a Sri Lankan creative digital agency offering web development, graphic design, social media management, and digital marketing services for growing brands.",
  metadataBase: new URL("https://hyperdevo.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <MobileStickyCTA />
        <Footer />
      </body>
    </html>
  );
}
