import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import SocialLinks from '../components/SocialLinks'
import ParticleEffect from '../components/ParticleEffect'
import { locales } from '@/i18n/config'
import { unstable_setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景效果 */}
      <div className="grid-background" />
      <div className="glow-effect" />
      <div className="floating-particles" />
      <ParticleEffect />
      
      {/* 内容 */}
      <Navbar />
      <Hero />
      <SocialLinks />
      <Features />
      <FAQ />
    </main>
  )
} 