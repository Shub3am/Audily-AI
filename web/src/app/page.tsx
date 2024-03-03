'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import Features from '@/components/home-page/features'
import Footer from '@/components/home-page/footer'
import HowItWorks from '@/components/home-page/how-it-works'
import { SectionDivider } from '@/components/home-page/section-divider'
import Team from '@/components/home-page/team'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-black">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <section className="w-full">
        <Features />
      </section>
      <section className="w-full">
        <HowItWorks />
      </section>
      <SectionDivider />
      <section className="w-full">
        <Team />
      </section>
      <SectionDivider />
      <section>
        <Footer />
      </section>
    </div>
  )
}
