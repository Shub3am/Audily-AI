import Image from 'next/image'

interface IconProps {
  src: string
}

const FeatureIcon: React.FC<IconProps> = ({ src }) => {
  return (
    <div className="rounded-full border border-text-200/20 p-2">
      <div className="rounded-full border border-text-200/40 p-4">
        <div className="relative h-5 w-5">
          <Image src={src} alt="icon" layout="fill" />
        </div>
      </div>
    </div>
  )
}

export default FeatureIcon
