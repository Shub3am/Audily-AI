import Features from '@/components/home-page/features'
import Footer from '@/components/home-page/footer'
import { SectionDivider } from '@/components/home-page/section-divider'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-black">
      <SectionDivider />
      <section>
        <Features />
      </section>
      <SectionDivider />
      <section>
        <Footer />
      </section>
    </div>
  )
}
