'use client'

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

export default function ParticleEffect() {
  useEffect(() => {
    createParticles()
  }, [])

  return null
} 