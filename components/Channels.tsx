'use client'

import { motion } from 'framer-motion'
import { Megaphone } from 'lucide-react'

export default function Channels() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex gap-5 p-8 rounded-lg border border-border/50 bg-subtle/30"
        >
          <div className="flex-shrink-0">
            <Megaphone className="w-6 h-6 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Ads that run themselves</h3>
            <p className="text-muted leading-relaxed">
              Traction creates and runs ads on Meta, Google, LinkedIn, and Reddit.
              It picks the right network for your product, writes the copy, designs the creative,
              and optimizes spend daily. You just approve.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="text-sm text-muted/60 mt-6 text-center"
        >
          Coming soon: outreach, SEO, and more.
        </motion.p>
      </div>
    </section>
  )
}
