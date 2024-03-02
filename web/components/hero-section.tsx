'use client'

import landingPageGradient from '/public/assets/landing-page-gradient.png'
import { Icons } from './icons'
import Image from 'next/image'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { useToast } from '@/components/ui/use-toast'
import { MouseEvent } from 'react'

export default function HeroSection() {
  const { toast } = useToast()

  const handleButtonClick = (
    action: 'text' | 'audio',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const url = (
      document.getElementById('youtubeUrl') as HTMLInputElement
    ).value.trim()

    // Check if URL is empty
    if (url === '') {
      toast({
        title: <div className="text-white">Empty URL</div>,
        description: (
          <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
            Please enter a YouTube URL.
          </div>
        ),
      })
      return
    }

    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})$/
    if (!url.match(youtubeRegex)) {
      toast({
        title: <div className="text-white">Invalid URL</div>,
        description: (
          <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
            Please enter a valid YouTube URL.
          </div>
        ),
      })
      return
    }

    // Display msg based on button type
    switch (action) {
      case 'text':
        toast({
          title: <div className="text-white">Summarizing Text</div>,
          description: (
            <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
              Text summarization process initiated.
            </div>
          ),
        })
        break
      case 'audio':
        toast({
          title: <div className="text-white">Summarizing Audio</div>,
          description: (
            <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
              Audio summarization process initiated.
            </div>
          ),
        })
        break
      default:
        break
    }
  }

  return (
    <div className="px-6 pt-10 md:px-0">
      <Image src={landingPageGradient.src} alt="" layout="fill" />
      <div className="m-auto text-center backdrop-blur md:w-[100vw]">
        <div className="mx-auto mb-8 flex flex-col gap-3 md:w-3/5">
          <h1 className="mb-4 text-3xl font-extrabold leading-10 text-text-100 md:text-5xl">
            The video knowledge minus the hassle
          </h1>
          <p className="mx-auto text-base text-text-200 md:w-4/6 md:text-xl">
            Summarize your youtube videos into audio recap to increase
            efficiency
          </p>
        </div>
        <div className="relative mx-auto flex items-center gap-2 xs:mb-5 md:mb-0 md:w-2/5">
          <Input
            id="youtubeUrl"
            type="text"
            placeholder="Paste a YouTube url here"
            className="focus:ring-none block w-full rounded-lg border-none bg-gradient-to-r from-primary-blue to-primary-pink px-4 py-7 pl-0 text-center text-white focus:outline-none md:pl-12"
          />
          <Icons.playCircle className="absolute left-5 h-[20px] w-[20px] text-white" />
        </div>
        <div className="mx-4 my-8 flex flex-col items-center justify-center gap-3 text-sm font-semibold sm:flex-row">
          <Button
            onClick={(e) => handleButtonClick('text', e)}
            className="border-2 border-text-100 bg-text-100 px-8 py-6 text-black hover:bg-transparent hover:text-text-100"
          >
            Summarize Text
          </Button>
          <Button
            onClick={(e) => handleButtonClick('audio', e)}
            className="border-2 border-text-100 bg-black px-8 py-6 text-text-100 hover:bg-white hover:text-black "
          >
            Summarize Audio
          </Button>
        </div>
      </div>
    </div>
  )
}
