import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Manifesto from '@/components/Manifesto/Manifesto'
import Features from '@/components/Features/Features'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Features />
      </main>
      <Footer />
    </>
  )
}
