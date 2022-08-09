import Image from 'next/image'
import aragonToken from '../../../../public/images/aragonToken.png'

interface CurrencyType {
  token: number
  valueUsd: number
}

export interface CardProps {
  title: string
  image: string
  width: number
  height: number
  valueType: string
  value?: CurrencyType
  date?: number
}

export function Card({
  title,
  image,
  width,
  height,
  valueType,
  value,
  date,
}: CardProps) {
  return (
    <div className="grid items-center justify-center">
      <h3 className="font-over font-light text-gray-300 mb-7 text-center">
        {title}
      </h3>
      <div className="w-48 h-48 lg:flex justify-center hidden">
        <Image src={image} alt={title} width={width} height={height} />
      </div>
      {valueType === 'currency' && value && (
        <div className="grid gap-y-1 grid-rows-3 items-center justify-center">
          <div className="flex items-center">
            <div className='hidden lg:flex md:item-center'>
              <Image
                src={aragonToken}
                alt="Aragon Token"
                width={19}
                height={19}
              />
            </div>
            <p className="font-over text-gray-500 font-light">Aragon (ANT)</p>
          </div>
          <p className="text-[26px] text-gray-500 font-light">{value.token}</p>
          <p className="text-gray-300 font-light font-over">
            ${value.valueUsd}
          </p>
        </div>
      )}
      {valueType === 'date' && (
        <div className="grid gap-y-1 grid-rows-3 items-center ">
          <h1 className="row-span-2 font-over text-[64px] pl-3">{date}</h1>
          <p className="row-span-1 text-gray-300 font-light font-over pl-3">
            days
          </p>
        </div>
      )}
    </div>
  )
}
