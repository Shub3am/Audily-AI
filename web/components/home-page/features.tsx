import FeatureIcon from './feature-icon'
import { featuresData } from '@/data/features'

export default function Features() {
  return (
    <div
      className="flex w-full items-center justify-center bg-black py-12 md:py-20"
      id="features"
    >
      <div className="container px-4 md:px-6">
        <div className="">
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text pb-2 text-3xl font-bold tracking-tighter text-transparent sm:text-4xl xl:text-5xl/none">
                Why should you use Audily?
              </h1>
              <p className="tracking-tigher px-2 pt-6 text-lg leading-8 text-text-200 lg:px-72">
                A Developer friendly open source project to summarize your text
                with optimal time and algorithm.
              </p>
            </div>
            <div className="flex w-full max-w-full items-center justify-center space-y-4">
              <div className="mx-1 grid grid-cols-1 flex-wrap gap-8 md:mx-12 md:grid-cols-2 xl:grid-cols-3">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="flex min-h-[274px] max-w-[384px] flex-col items-start space-y-2 rounded-lg rounded-lg border border-text-200/20 p-4 pl-8 pt-6"
                  >
                    <FeatureIcon src={`${feature.src}`} />
                    <h2 className="text-lg text-xl font-extrabold text-white">
                      {feature.title}
                    </h2>
                    <p className="text-md pr-8 leading-6 text-text-200">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
