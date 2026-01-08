'use client'

import { motion } from 'framer-motion'

export default function MorningReport() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12 text-center"
        >
          This is what tomorrow morning looks like.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />

          {/* Email/Dashboard card */}
          <div className="relative bg-subtle border border-border rounded-lg overflow-hidden">
            {/* Browser-like header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
              <div className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>

            {/* Email content */}
            <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed">
              <p className="text-foreground mb-6">Good morning.</p>

              <div className="mb-6">
                <p className="text-muted mb-3">Yesterday Traction:</p>
                <ul className="space-y-1.5 text-foreground/90">
                  <li className="flex items-start">
                    <span className="text-muted mr-2">-</span>
                    Launched 3 new ad variants on Meta
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted mr-2">-</span>
                    Paused 2 underperforming creatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted mr-2">-</span>
                    Spent $47.23 → 12 signups{' '}
                    <span className="text-accent">($3.94 CAC)</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-muted mb-3">Today's plan:</p>
                <ul className="space-y-1.5 text-foreground/90">
                  <li className="flex items-start">
                    <span className="text-muted mr-2">-</span>
                    Testing new headline variants
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted mr-2">-</span>
                    Scaling budget on top performer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
