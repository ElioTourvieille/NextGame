import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next GamePlatform",
  description: "My Next GamePlatform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
              <div className="flex flex-col justify-between min-h-screen">
                  <Header/>
                  <div className="flex-grow">{children}</div>
                  <Footer/>
              </div>
          </body>
        </html>
        </ClerkProvider>
  );
}
