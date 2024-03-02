import { Icons } from '@/components/icons'
import Image from 'next/legacy/image'
import { Youtube } from 'lucide-react'
import landingPageGradient from '/public/assets/landing-page-gradient.png'
import Navbar from '@/components/navbar'


export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar />

      {/* Hero section */}
      <img src={landingPageGradient.src} alt="" className='absolute mt-20 h-[330px] w-full' />
      <div
        className="m-auto md:w-4/5 text-center backdrop-blur"
        
      >
        <div className="mx-auto mb-8 flex flex-col gap-3 md:w-3/5">
          <h1 className="md:text-5xl text-3xl font-bold text-text-100">
            The video knowledge minus the hassle
          </h1>
          <p className="mx-auto md:text-xl text-base text-text-200 md:w-4/6">
            Summarize your youtube videos into audio recap to increase
            efficiency
          </p>
        </div>

        <label className="relative mx-auto block w-fit md:w-2/5 ">
          <span className="sr-only">Youtube</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Youtube />
          </span>

          <input
            type="text"
            placeholder="Paste a YouTube url here"
            className="from-primary-blue to-primary-pink focus:ring-none block w-full rounded-lg bg-gradient-to-r px-4  py-2 pl-12 text-center focus:outline-none"
          />
        </label>

        <div className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold mx-4">
          <button className="hover:bg-text-300 border-2 border-text-100 bg-text-100 px-4 py-2 text-black hover:text-text-100">
            Summarize Text
          </button>
          <button className="hover:bg-text-300 border-2 border-text-100 bg-black px-4 py-2 text-text-100">
            Summarize Audio
          </button>
        </div>
      </div>
    </div>
  )
}
