import Features from '@/components/home-page/features'
import Footer from '@/components/home-page/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-black">
      <section>
        <Features />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
