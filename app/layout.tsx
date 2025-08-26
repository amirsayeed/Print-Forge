import Link from "next/link";
import "./globals.css";
import {Albert_Sans, Montserrat_Alternates} from "next/font/google";
import logo from "@/public/Artboard1.png";
import Image from "next/image";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"], 
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="px-6">
          <nav className="flex items-center justify-between">
            <Image src={logo} alt="logo image"
            width={240}
            height={61} />
            <ul className="flex gap-3">
              <li><Link href='/'>3D Models</Link></li>
              <li><Link href='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}