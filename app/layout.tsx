import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Bro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
