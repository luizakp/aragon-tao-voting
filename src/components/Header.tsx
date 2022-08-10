import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import aragonLogo from '../../public/images/aragonLogo.svg'
import aragonMobile from '../../public/images/aragonMobileLogo.svg'
import settings from '../../public/images/settings.svg'

export function Header() {
  const router = useRouter()
  const [isConfig, setIsConfig] = useState(false)

  useEffect(() => {
    if (
      router.pathname === '/configuration' ||
      router.pathname === '/submit-proposal' ||
      router.pathname.includes('/import')
    ) {
      setIsConfig(true)
    }
  }, [router.pathname])
  return (
    <div className="bg-white md:bg-white/40 p-6 md:px-11 flex items-center justify-between sticky top-0 z-50">
      <Link href="/">
        <button className="flex items-center">
          <div className="flex md:hidden">
            <Image src={aragonMobile} alt={'Aragon'} />
          </div>
          <div className="md:flex hidden">
            <Image src={aragonLogo} alt={'Aragon'} />
          </div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-50 to-purple-200 ml-2 md:ml-6">
            TAO VOTING
          </h3>
        </button>
      </Link>
      <div className="flex  items-center font-semibold lg:mt-0">
        <Link href="/about">
          <button className="text-gray mr-4 md:mr-10">Learn more</button>
        </Link>
        {!isConfig && (
          <Link href="/configuration">
            <div className="flex">
              <button className="hidden md:flex bg-blue hover:bg-blue-200 text-white py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500">
                Go to Configuration
              </button>
              <button className="flex md:hidden bg-blue hover:bg-blue-200 text-white rounded-full p-2 drop-shadow-sm transition ease-in-out duration-500">
                <Image src={settings} alt={'Configuration'} />
              </button>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
