import Image from 'next/image'
import aragonLogo from '../../../public/images/aboutLogo.svg'

export function AboutBanner() {
  return (
    <div className="bg-aboutBanner bg-cover bg-no-repeat flex flex-col justify-center items-center p-10 lg:p-20 xl:pt-24 xl:pb-36 xl:px-80">
      <Image src={aragonLogo} alt="Aragon logo" />
      <h1 className="text-[75px] text-white font-semibold mt-9 mb-4 text-center">
        Aragon Tao Voting
      </h1>
      <p className="text-white text-3xl text-center leading-10">
        Tao Voting is the voting process by which the DAO can modify its
        economic and governance settings.
      </p>
    </div>
  )
}
