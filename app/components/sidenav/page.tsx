'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`fixed h-screen bg-slate-400 text-white font-bold ${isOpen ? 'w-24 md:w-60' : 'w-8 md:w-12'} transition-all duration-00`}>
      <button className="p-4" onClick={toggleNav}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <Link href="/">
        <span className={`block p-4 hover:bg-slate-100 hover:text-slate-400 ${isOpen ? 'transition-all duration-100' : 'hidden'}`}>Home</span>
      </Link>
      <Link href="/news">
        <span className={`block p-4 hover:bg-slate-100 hover:text-slate-400 ${isOpen ? 'transition-all duration-100' : 'hidden'}`}>News</span>
      </Link>
      <Link href="/suggestion">
        <span className={`block p-4 hover:bg-slate-100 hover:text-slate-400 ${isOpen ? 'transition-all duration-100' : 'hidden'}`}>Suggestion</span>
      </Link>
      <Link href="/contact">
        <span className={`block p-4 hover:bg-slate-100 hover:text-slate-400 ${isOpen ? 'transition-all duration-100' : 'hidden'}`}>Contact</span>
      </Link>
    </div>
  )
}

export default SideNav;