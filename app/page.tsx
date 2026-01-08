import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Channels from '@/components/Channels'
import MorningReport from '@/components/MorningReport'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Channels />
      <MorningReport />
      <FinalCTA />
      <Footer />
    </main>
  )
}
