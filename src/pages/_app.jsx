import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // init theme from localStorage or OS preference
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme')
    if (saved) setTheme(saved)
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
    setMounted(true)
    // preloader: hide after 800ms
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border-4 border-sky-600 animate-spin"></div>
          <div className="text-slate-700 dark:text-slate-300">Faisal Imam</div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </>
  )
}
