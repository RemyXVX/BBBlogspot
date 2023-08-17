'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import DarkNext from './../../../public/darknext.png';
import DarkMenu from './../../../public/darkmenu.png';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`h-screen bg-slate-400 text-white font-semibold md:font-bold text-xs md:text-lg transition-all duration-300 ${isOpen ? 'w-56 xl:w-48' : 'w-10 md:w-14'} lg:w-20`}>
      <button className="p-2 lg:p-4" onClick={toggleNav}>
        {isOpen ? 
          <img src={(DarkNext as StaticImageData).src} alt="Logo" className="w-10 h-8 lg:w-14 lg:h-10" />
          :
          <img src={(DarkMenu as StaticImageData).src} alt="Logo" className="w-10 h-8 sm:w-8 sm:h-6  lg:w-14 lg:h-10" />}
      </button>
      <div className={`overflow-hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <Link href="/">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400">Home</span>
        </Link>
        <Link href="/news">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400">News</span>
        </Link>
        <Link href="/projects">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400">Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default SideNav;
