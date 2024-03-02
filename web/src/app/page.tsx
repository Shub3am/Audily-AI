import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
    </div>
  )
}
