import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Cats!",
  description: "Welcome to the Cat Sanctuary. Witness this elegant symphony of feline beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="image/x-icon" href="https://i.imgur.com/gw5T6OJ.png" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
