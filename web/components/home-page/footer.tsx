import Image from 'next/legacy/image'
import { Icons } from '../icons'
import Link from 'next/link'
import { footerNavs } from '@/data/footer'

export default function Footer() {
  return (
    <footer className="w-[100vw] bg-black px-4 py-5 text-gray-500 md:px-8">
      <div className="mx-auto text-center">
        <div className="relative mx-auto h-32 w-32">
          <Image src={'/assets/logo.svg'} alt="brand logo" layout="fill" />
        </div>
        <span className="from-primary-blue to-primary-pink bg-gradient-to-r bg-clip-text pb-4 text-4xl font-extrabold text-transparent">
          Audily
        </span>
        <p className="mx-0 mt-2 text-[15px] leading-relaxed md:mx-40">
          Save hundreds of hours by summarizing the video file into a simple
          audio file.
        </p>
      </div>
      <ul className="mb-2 mt-8 flex items-center justify-center space-x-4 space-y-0 space-y-5">
        {footerNavs.map((item, idx) => (
          <li
            key={idx}
            className="hover:text-primary-blue transition-all duration-300 hover:underline"
          >
            <Link href={`${item.href}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <hr className="mx-auto flex w-[30%] opacity-10" />
      <div className="mx-4 mb-8 mt-4 flex flex-col items-center justify-between sm:flex-row md:mb-0">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Audily All rights reserved.
        </div>
        <div className="mr-0 mt-6 sm:mt-0 md:mr-8">
          <ul className="flex items-center space-x-4">
            <li className="flex items-center justify-center rounded-full border p-2">
              <Icons.X className="h-4 w-4 cursor-pointer text-text-200 transition-all duration-300 hover:text-text-100" />
            </li>
            <li className="flex items-center justify-center rounded-full border p-2">
              <Icons.GitHub className="h-4 w-4 cursor-pointer text-text-200 transition-all duration-300 hover:text-text-100" />
            </li>

            <li className="flex items-center justify-center rounded-full border p-2">
              <Icons.devfolio className="h-4 w-4 cursor-pointer text-text-200 transition-all duration-300 hover:text-text-100" />
            </li>

            <li className="flex items-center justify-center rounded-full border p-2">
              <Icons.Discord className="h-4 w-4 cursor-pointer text-text-200 transition-all duration-300 hover:text-text-100" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
