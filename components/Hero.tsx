'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center dot-pattern relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
        >
          Plug in your URL.
          <br />
          Wake up to users.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Traction is your AI growth team. It finds your most important users wherever they are—ads, Reddit, email, SEO—while you focus on building products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          <a
            href="https://calendly.com/traction-demo/30min"
            className="inline-flex px-6 py-3 text-base font-medium bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Book a Call
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-border rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
