'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import Features from '@/components/home-page/features'
import Footer from '@/components/home-page/footer'
import HowItWorks from '@/components/home-page/how-it-works'
import TechStack from '@/components/home-page/tech-stack'
import { SectionDivider } from '@/components/home-page/section-divider'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-black">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <section className='w-full'>
        <Features />
      </section>
      <section className='w-full'>
        <HowItWorks />
      </section>
      <section className='w-full'>
        <TechStack />
      </section>
      <SectionDivider />
      <section>
        <Footer />
      </section>
    </div>
  )
}
