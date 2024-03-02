import { Icons } from '@/components/icons'
import Image from 'next/legacy/image'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-start justify-center bg-black pt-28 text-white">
      Hi! Thanks for visiting Audily
      <Icons.github className="h-28 w-28 text-white" />
      <div className="relative h-28 w-28">
        <Image alt="logo" src="/assets/logo.svg" layout="fill" />
      </div>
    </div>
  )
}
