import Image from 'next/image'
import bulletPoint from '../../../public/images/bulletPoint.svg'

export interface BulletPointProps {
  title: string
  bullets: BulletType[]
}

export interface BulletType {
  id: number
  content: string
}

export function BulletPoint({ title, bullets }: BulletPointProps) {
  return (
    <div>
      <h1 className="text-5xl font-semibold mr-96 mb-14 text-gray w-full">
        {title}
      </h1>
      <div className="grid gap-y-9">
        {bullets.map((bullet) => {
          return (
            <div key={bullet.id} className="flex items-center">
              <div className="h-3 flex items-center">
                <Image src={bulletPoint} alt="bullet point" layout="fixed" />
              </div>
              <p className="text-xl lg:text-3xl text-gray-400 ml-4">
                {bullet.content}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
