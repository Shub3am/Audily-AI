import Link from 'next/link'
import { Icons } from './icons'
import logo from '@/public/assets/logo.svg'
import Image from 'next/image'

const navLinks = [
  { title: 'How it works', href: '/' },
  { title: 'Features', href: '/' },
  { title: 'Tech Stack', href: '/' },
  { title: 'Team', href: '/' },
]

export default function Navbar() {
  return (
    <nav className="flex w-[100vw] items-center justify-between p-4 px-12 py-4 pb-10">
      <div className="flex items-center">
        <div className="relative h-16 w-16">
          <Image src={logo} alt="brand logo" layout="fill" />
        </div>
      </div>
      <div className=" hidden rounded-full border border-primary-blue bg-nav-bg px-4 text-text-200 md:flex">
        <ul className={`flex list-none items-center justify-center`}>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border-b-2 border-transparent px-2 py-3 text-xs hover:border-nav-highlighted-text lg:px-6 lg:text-lg"
            >
              <Link
                href={link.href}
                className="hover:text-nav-highlighted-text"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <Icons.github className="h-6 w-6 text-white" />
        </Link>
        <Link href={'/'}>
          <Icons.devfolio className="h-6 w-6 text-white" />
        </Link>
      </div>
    </nav>
  )
}
