import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar({theme,setTheme}){
  const [mounted, setMounted] = useState(false)
  useEffect(()=> setMounted(true),[])

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="sticky top-0 z-30 bg-white/75 backdrop-blur-sm dark:bg-slate-900/75 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-semibold">Faisal Imam</div>
          <div className="hidden md:flex gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle dark mode" className="px-3 py-1 rounded-md border">
            {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
          </button>
          <a href="#contact" className="hidden sm:inline-block px-4 py-2 rounded-md bg-emerald-500 text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}
