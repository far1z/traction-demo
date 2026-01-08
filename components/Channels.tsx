'use client'

import { motion } from 'framer-motion'
import { Megaphone, MessageCircle, Search, Lightbulb } from 'lucide-react'

const channels = [
  {
    icon: Megaphone,
    title: 'Ads',
    description: 'Creates and runs ads on Meta, Google, LinkedIn, Reddit. Picks the right network. Optimizes daily.',
  },
  {
    icon: MessageCircle,
    title: 'Outreach',
    description: 'Finds people complaining about problems you solve on Reddit, Twitter, forums. Reaches out.',
  },
  {
    icon: Search,
    title: 'SEO/ASO',
    description: 'Audits your search presence. Suggests fixes. Writes content.',
  },
  {
    icon: Lightbulb,
    title: 'Product Intel',
    description: "Suggests product changes based on what's working in your growth data.",
  },
]

export default function Channels() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-16 text-center"
        >
          What it does
        </motion.h2>

        <div className="space-y-8">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-lg border border-border/50 bg-subtle/30"
            >
              <div className="flex-shrink-0">
                <channel.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">{channel.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{channel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
