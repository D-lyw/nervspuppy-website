'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import {
  BeakerIcon,
  CubeTransparentIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Features() {
  const t = useTranslations()

  const features = [
    {
      name: t('features.list.ai.title'),
      description: t('features.list.ai.description'),
      icon: BeakerIcon,
    },
    {
      name: t('features.list.blockchain.title'),
      description: t('features.list.blockchain.description'),
      icon: CubeTransparentIcon,
    },
    {
      name: t('features.list.social.title'),
      description: t('features.list.social.description'),
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: t('features.list.docs.title'),
      description: t('features.list.docs.description'),
      icon: DocumentTextIcon,
    },
  ]

  return (
    <div id="features" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight glow-text sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-accent">
            {t('features.title')}
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="feature-card"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.name}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 