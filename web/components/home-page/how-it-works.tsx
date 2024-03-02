import React from 'react'
import ArrowOdd from '@/public/assets/how-it-works/ArrowOdd.svg'
import ArrowEven from '@/public/assets/how-it-works/ArrowEven.svg'
import { howItWorksData } from '@/data/how-it-works'
import Image from 'next/legacy/image'

const HowItWorks: React.FC = () => {
  const lastIndex = howItWorksData.length - 1
  return (
    <div
      className="relative mb-20 mt-12 bg-black/20 bg-cover bg-center bg-no-repeat py-16 md:py-24"
      id="how-it-works"
      style={{ backgroundImage: 'url("/assets/how-it-works/patternBG.png")' }}
    >
      <div className="container mx-auto">
        <h2 className="mb-16 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl lg:text-5xl">
          How does Audily works?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.map((item, index) => {
            const isEven = index % 2 === 0
            const isLast = index === lastIndex
            return (
              <div
                className={`card relative text-white ${
                  isEven ? 'before-even' : 'before-odd'
                }`}
                key={item.id}
              >
                <div className="flex flex-row">
                  <div className="from-primary-blue to-primary-pink mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r text-lg font-semibold text-bg-300 lg:mx-0">
                    {`0${item.id}`}
                  </div>
                  <div className="arrow-container pl-8 xs:hidden xl:flex">
                    {!isLast ? (
                      isEven ? (
                        <Image
                          src={ArrowOdd}
                          alt="Arrow Even"
                          className="mt-8"
                        />
                      ) : (
                        <Image
                          src={ArrowEven}
                          alt="Arrow Even"
                          className="mt-8"
                        />
                      )
                    ) : null}
                  </div>
                </div>
                <div className="font-dm-sans mb-4 text-center lg:text-left">
                  <h2 className="text-primary-300 mb-2 mt-2 text-xl font-medium md:mb-4 md:text-xl lg:text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-md text-primary-300 tracking-wide opacity-80">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
