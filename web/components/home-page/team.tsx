import Image from 'next/legacy/image'
import Link from 'next/link'
import { Icons } from '../icons'
import { team } from '@/data/team'

export default function Team() {
  return (
    <section className="py-14" id='team'>
      <div className="mx-auto max-w-screen-xl px-4 text-center md:px-8">
        <div className="pb-6 text-center">
          <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text pb-2 text-3xl font-bold tracking-tighter text-transparent sm:text-4xl xl:text-5xl/none">
            Meet our team!
          </h1>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl bg-black py-10 shadow-md shadow-primary-pink"
              >
                <div className="relative mx-auto h-24 w-24 rounded-full">
                  <Image
                    alt="avatar image"
                    src={item.avatar}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-400 sm:text-xl">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <div className="mt-4 flex justify-center gap-4 text-gray-400">
                    <Link href={item.twitter} target="_blank">
                      <Icons.X className="mr-2 h-4 w-4 text-white transition-all duration-300 hover:text-violet-500" />
                    </Link>
                    <Link href={item.github} target="_blank">
                      <Icons.GitHub className="mr-2 h-4 w-4 text-white transition-all duration-300 hover:text-violet-500" />
                    </Link>
                    <Link href={item.linkedin} target="_blank">
                      <Icons.linkedin className="mr-2 h-4 w-4 text-white transition-all duration-300 hover:text-violet-500" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
