import Link from 'next/link'
import { Icons } from './icons'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <div className="my-8 flex items-center justify-between px-8 ">
        <div className="md:w-1/3">
        <div className="relative h-16 w-16">
          <Image src={'/assets/logo.svg'} alt="brand logo" layout="fill" />
        </div>
        </div>
        <div className="border-primary-blue bg-nav-bg rounded-full border md:w-1/3 hidden md:block">
          <ul className="flex list-none items-center justify-center gap-4">
            <li className="hover:border-nav-highlighted-text border-b-2 border-transparent py-3">
              <Link href={'/'} className="hover:text-nav-highlighted-text ">
                How it works
              </Link>
            </li>
            <li className="hover:border-nav-highlighted-text border-b-2 border-transparent py-3">
              <Link href={'/'} className="hover:text-nav-highlighted-text ">
                Features
              </Link>
            </li>
            <li className="hover:border-nav-highlighted-text border-b-2 border-transparent py-3">
              <Link href={'/'} className="hover:text-nav-highlighted-text ">
                Tech Stack
              </Link>
            </li>
            <li className="hover:border-nav-highlighted-text border-b-2 border-transparent py-3">
              <Link href={'/'} className="hover:text-nav-highlighted-text ">
                Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end gap-4 md:w-1/3 text-text-200">
        <Link href={'/'}><Icons.github className="h-6 w-6 hover:text-nav-highlighted-text" /></Link>
        <Link href={'/'}><Icons.devfolio className="h-6 w-6 hover:text-nav-highlighted-text" /></Link>
        </div>
      </div>
    </>
  )
}
