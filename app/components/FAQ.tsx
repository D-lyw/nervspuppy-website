'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

// FAQ 数据
const faqs = [
  {
    question: '什么是神经二狗？',
    answer: '神经二狗是一个基于 AI 的智能体集合，为 CKB 社区带来生态智能体集合。我们利用 AI 的能力，借助 meme 生态 IP 属性，设计并构建了这个神经二狗的 IP 形象，赋予它趣味性和实用性。'
  },
  {
    question: '神经二狗能做什么？',
    answer: '神经二狗可以帮助社区成员更好地了解和参与 CKB 生态。它可以回答问题、提供指导、分享信息，并通过有趣的方式促进社区互动。'
  },
  {
    question: '如何使用神经二狗？',
    answer: '你可以通过我们的平台直接与神经二狗互动。无论是询问 CKB 相关问题，还是参与社区活动，神经二狗都会以专业且友好的方式为你服务。'
  },
  {
    question: '神经二狗是如何工作的？',
    answer: '神经二狗采用先进的 AI 技术，结合 CKB 生态特点，能够理解并回应用户的各种需求。它通过持续学习和更新，不断提升服务质量。'
  },
  {
    question: '为什么选择二狗作为形象？',
    answer: '二狗形象既亲切又有趣，能够很好地体现 meme 文化特点。同时，它也象征着忠诚和友好，这与我们服务社区的理念非常契合。'
  }
]

const FAQItem = ({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <div className="glass-card mb-4 transition-all duration-300 hover:bg-white/10">
      <button
        className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl opacity-70"
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4"
          >
            <p className="text-white/80 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations('faq')

  const faqs = [
    {
      question: t('list.what.question'),
      answer: t('list.what.answer')
    },
    {
      question: t('list.capabilities.question'),
      answer: t('list.capabilities.answer')
    },
    {
      question: t('list.how.question'),
      answer: t('list.how.answer')
    },
    {
      question: t('list.tech.question'),
      answer: t('list.tech.answer')
    },
    {
      question: t('list.why.question'),
      answer: t('list.why.answer')
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 glow-text">
          {t('title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 