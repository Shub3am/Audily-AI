import Features from '@/components/home-page/features'
import Footer from '@/components/home-page/footer'
import HowItWorks from '@/components/home-page/how-it-works'
import { SectionDivider } from '@/components/home-page/section-divider'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-black">
      <SectionDivider />
      <section>
        <Features />
      </section>
      <section>
        <HowItWorks />
      </section>
      <SectionDivider />
      <section>
        <Footer />
      </section>
    </div>
  )
}
