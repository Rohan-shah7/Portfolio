import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Dark mode toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-shadow bg-gray-300 dark:bg-gray-900 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
        >
          Rohan Shah
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 border rounded bg-gray-200 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {mobileOpen ? (
              <span className="text-2xl">&times;</span> // ✕
            ) : (
              <span className="text-2xl">&#9776;</span> // ☰
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="mt-2 w-full px-3 py-1 border rounded bg-gray-200 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  )
}

