import landingPageGradient from '/public/assets/landing-page-gradient.png'
import { Icons } from './icons'
import Image from 'next/image'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { useToast } from '@/components/ui/use-toast'
import { MouseEvent, useState } from 'react'

const AudioPlayer = ({ audioUrl }: { audioUrl: string }) => {
  return (
    <audio controls>
      <source src={audioUrl} />
      Your browser does not support the audio element.
    </audio>
  )
}

const TextRenderer = ({ textResponse }: { textResponse: string }) => {
  const [heading, summary] = textResponse.split('**Summary For Audiobook**')

  return (
    <div className="text-white">
      {heading && <h2 className="mb-4 text-lg">{heading}</h2>}
      {summary && <p>{summary}</p>}
    </div>
  )
}

export default function HeroSection() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState('')
  const [textResponse, setTextResponse] = useState('')

  const handleButtonClick = async (
    action: 'text' | 'audio',
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const url = (
      document.getElementById('youtubeUrl') as HTMLInputElement
    ).value.trim()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    setAudioUrl('')
    setTextResponse('')
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

    setIsLoading(true)
    if (action === 'audio') {
      try {
        const response = await fetch(`${apiUrl}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ youtube: url }),
        })
        const data = await response.json()
        console.log({ data })

        setIsLoading(false)
        toast({
          title: (
            <div className="bg-black text-white">AudioBook Generated!</div>
          ),
        })

        setAudioUrl(
          `https://storage.googleapis.com/essential-flame-416009.appspot.com/${data}`
        ) // Assuming the response contains the audio URL
        console.log({ setAudioUrl })
      } catch (error) {
        setIsLoading(false)
        console.error('Error:', error)
        toast({
          title: <div className="text-white">Oops!</div>,
          description: (
            <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
              An error occurred while processing your request.
            </div>
          ),
        })
      }
    } else if (action === 'text') {
      try {
        const response = await fetch(`${apiUrl}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ youtube: url, summarizeOnly: true }),
        })
        const data = await response.json()
        console.log({ data })

        setIsLoading(false)
        toast({
          title: <div className="text-white">Text Generated. Woohoo!</div>,
        })

        setTextResponse(data.summary) // Assuming the response contains the audio URL
        console.log({ setTextResponse })
      } catch (error) {
        setIsLoading(false)
        console.error('Error:', error)
        toast({
          title: <div className="text-white">Oops!</div>,
          description: (
            <div className="text-background mt-2 w-[340px] rounded-md bg-white p-4">
              An error occurred while processing your request.
            </div>
          ),
        })
      }
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
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader"></div>
          </div>
        ) : (
          <>
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
                Summarize Only
              </Button>
              <Button
                onClick={(e) => handleButtonClick('audio', e)}
                className="border-2 border-text-100 bg-black px-8 py-6 text-text-100 hover:bg-white hover:text-black "
              >
                Generate AudioBook
              </Button>
            </div>
          </>
        )}
        <div className="flex items-center justify-center">
          {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
        </div>
        {textResponse && (
          <div className="mx-20 flex items-center justify-center border border-2 border-white p-4 leading-8 text-white">
            <TextRenderer textResponse={textResponse} />
          </div>
        )}
      </div>
    </div>
  )
}
