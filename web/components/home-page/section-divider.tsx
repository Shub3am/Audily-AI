import Image from 'next/legacy/image'

export const SectionDivider = () => {
  return (
    <div className="w-[100vw]">
      <div className="relative  h-20 w-full">
        {/* ml-[-140px] */}
        <Image
          src="/assets/section-divider.png"
          alt=""
          layout="fill"
          objectFit="fill"
        />
      </div>
    </div>
  )
}
