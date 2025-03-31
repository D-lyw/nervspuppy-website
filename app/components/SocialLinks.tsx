'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    url: 'https://twitter.com/NervePuppy_CKB',
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'Nostr',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a1 1 0 00-1 1v5H6a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V6a1 1 0 00-1-1z"/>
      </svg>
    ),
    url: 'nostr:npub1nervepuppyxxx',
    color: 'hover:text-purple-400'
  },
  {
    name: 'Discord',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    url: 'https://discord.gg/nervepuppy',
    color: 'hover:text-[#7289DA]'
  }
]

export default function SocialLinks() {
  const t = useTranslations('social')

  return (
    <section className="py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-medium mb-8 text-white/90">
            {t('title')}
          </h3>
          <div className="flex justify-center gap-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 glass-card ${link.color} transition-all duration-300 hover:scale-110`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="mt-6 text-white/70 text-sm">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  )
} 