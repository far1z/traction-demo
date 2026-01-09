'use client'

import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">Traction</span>
        <a
          href="https://calendly.com/traction-demo/30min"
          onClick={() => track('book_demo_click', { location: 'navigation' })}
          className="px-4 py-2 text-sm font-medium bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </motion.nav>
  )
}
