import { textStackData } from '@/data/tech-stack'
import FeatureIcon from './feature-icon'
import Image from 'next/image'

export default function TechStack() {
  return (
    <>
      <div
        className="flex w-full items-center justify-center bg-black py-12 md:py-20"
        id="tech-stack"
      >
        <div className="container px-4 md:px-6">
          <div className="">
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center">
                <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text pb-2 text-3xl font-bold tracking-tighter text-transparent sm:text-4xl xl:text-5xl/none">
                  Tech Stack
                </h1>
                <p className="tracking-tigher px-2 pt-6 text-lg leading-8 text-text-200 lg:px-72">
                  Tech Stack used to make Audily work!
                </p>
              </div>
              <div className="flex w-full max-w-full items-center justify-center space-y-4">
                <div className="mx-1 grid grid-cols-1 flex-wrap gap-8 md:mx-12 md:grid-cols-2 xl:grid-cols-4">
                  {textStackData.map((techStack, index) => (
                    <div
                      key={index}
                      className="flex max-w-[384px] flex-col items-center space-y-2 rounded-lg rounded-lg border border-text-200/20 p-4 pl-8 pt-6"
                    >
                      <div className="relative h-12 w-12 ">
                        <Image src={techStack.src} alt="icon" layout="fill" />
                      </div>
                      <h2 className="text-lg text-lg font-bold text-white">
                        {techStack.title}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
