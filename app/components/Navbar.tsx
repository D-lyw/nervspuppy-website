'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <nav className="fixed w-full z-50">
      <div className="container">
        <div className="glass-card my-4 px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 transform group-hover:scale-110 transition-all duration-300">
                  <Image
                    src="/images/nervepuppy.png"
                    alt="NervePuppy Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                  {t('title')}
                </span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden border-t border-white/10 mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 