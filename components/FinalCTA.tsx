'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-8"
        >
          Ready to wake up to users?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <a
            href="https://calendly.com/traction-demo/30min"
            className="inline-flex px-6 py-3 text-base font-medium bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
          >
            Book a Demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
