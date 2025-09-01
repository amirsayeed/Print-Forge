"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/public/Artboard1.png";
import mobileLogo from "@/public/printforge-logo mobile.png"
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="px-6">
        <nav className="flex items-center justify-between">
            <Link href='/'>
              <div className='relative'>
                <Image src={logo} alt="logo image"
                width={240}
                height={61} 
                priority
                className='hidden md:block'
                />
                <Image src={mobileLogo} alt="logo image"
                width={39}
                height={39} 
                priority
                className='block md:hidden'
                />

              </div>
            </Link>
            <ul className="flex gap-3">
              <NavLink href='/3d-models' isActive = {pathname.startsWith('/3d-models')}>3D Models</NavLink>
              <NavLink href='/about' isActive = {pathname === '/about'}>About</NavLink>
            </ul>
          </nav>
    </header>
  )
}
