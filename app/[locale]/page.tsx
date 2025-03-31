'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import SocialLinks from '../components/SocialLinks'
import { useEffect } from 'react'

// 创建随机粒子
const createParticles = () => {
  const container = document.querySelector('.floating-particles')
  if (!container) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 5}s`
    container.appendChild(particle)
  }
}

export default function Home() {
  useEffect(() => {
    createParticles()
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景效果 */}
      <div className="grid-background" />
      <div className="glow-effect" />
      <div className="floating-particles" />
      
      {/* 内容 */}
      <Navbar />
      <Hero />
      <SocialLinks />
      <Features />
      <FAQ />
    </main>
  )
} 