import Image from 'next/image'
import aragonToken from '../../../public/images/aragonToken.png'

export interface SubmitCardProps {
  title: string
  label: string
  value: number
}

export function SubmitCard({ title, label, value }: SubmitCardProps) {
  return (
    <div className="bg-white border border-gray-100 divide-y divide-gray-100 rounded text-gray-300 font-over font-light">
      <h3 className="text-xs my-2 ml-4">{title}</h3>
      <div className="pl-4">
        {label === 'Aragon (ANT)' ? (
          <div className="flex items-center">
            <div>
              <Image
                src={aragonToken}
                alt="Aragon Token"
                width={19}
                height={19}
              />
            </div>
            <p className="my-3 ml-2">{label}</p>
          </div>
        ) : (
          <p className="my-3">{label}</p>
        )}
        <p className="text-gray text-[26px] pb-[15px]">{value}</p>
      </div>
    </div>
  )
}
