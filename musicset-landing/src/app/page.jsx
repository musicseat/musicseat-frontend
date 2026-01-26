import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import TeamCarousel from '@/components/TeamCarousel/TeamCarousel'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <TeamCarousel />
      <Footer />
    </main>
  )
}
