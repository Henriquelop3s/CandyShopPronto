'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import HeaderCart from './ui/cart'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary text-primary-foreground z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-bold">
              Logo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 items-center">
            <HeaderCart />
            <Link href="/" className="hover:text-secondary-foreground transition-colors">
              Home
            </Link>
            <Link href="/products" className="hover:text-secondary-foreground transition-colors">
              Products
            </Link>
            <Link href="/login" className="hover:text-secondary-foreground transition-colors">
              Login
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-primary-foreground focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}