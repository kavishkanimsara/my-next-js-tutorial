import type { Metadata } from "next";
import { Balsamiq_Sans, Comic_Neue, DM_Sans, Geist, Geist_Mono, Lexend_Deca, Nunito, Patrick_Hand, Poppins, Schoolbell, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./demo/_components/Footer";

const nunito = Lexend_Deca({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400"],
});
const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${comicNeue.variable} ${nunito.variable} antialiased  justify-center items-center min-h-screen text-xl`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
