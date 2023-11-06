'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

import DarkNext from './../../../public/darknext.png';
import DarkMenu from './../../../public/darkmenu.png';

interface SideNavProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const SideNav = ({ setPage }: SideNavProps)=> {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`h-screen bg-sky-800 text-white font-semibold md:font-bold text-xs md:text-lg transition-all duration-300 ${isOpen ? 'w-56 xl:w-48' : 'w-10 md:w-14'} lg:w-20`}>
      <button className="p-2 lg:p-4" onClick={toggleNav}>
        {isOpen ? 
          <img src={(DarkNext as StaticImageData).src} alt="Logo" className="w-10 h-8 lg:w-14 lg:h-10" />
          :
          <img src={(DarkMenu as StaticImageData).src} alt="Logo" className="w-10 h-8 sm:w-8 sm:h-6  lg:w-14 lg:h-10" />}
      </button>
      <div className={`overflow-hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <Link href="/">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400" onClick={() => setPage('home')}>Home</span>
        </Link>
        <Link href="#/pages/home/news">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400" onClick={() => setPage('news')}>News</span>
        </Link>
        <Link href="#/pages/home/projects">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400" onClick={() => setPage('projects')}>Projects</span>
        </Link>
        <Link href="#/pages/home/contact">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400" onClick={() => setPage('contact')}>Contact</span>
        </Link>
        <Link href="#/pages/home/login">
          <span className="block py-2 pl-2 md:p-4 hover:bg-slate-100 hover:text-slate-400" onClick={() => setPage('login')}>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default SideNav;
