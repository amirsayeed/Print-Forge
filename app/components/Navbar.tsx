import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/Artboard1.png";
export default function Navbar() {
  return (
    <header className="px-6">
        <nav className="flex items-center justify-between">
            <Link href='/'>
              <Image src={logo} alt="logo image"
              width={240}
              height={61} 
              priority
              />
            </Link>
            <ul className="flex gap-3">
              <li><Link href='/3d-models'>3D Models</Link></li>
              <li><Link href='/about'>About</Link></li>
            </ul>
          </nav>
    </header>
  )
}
