import Link from 'next/link'

export function AboutFooterBanner() {
  return (
    <div className="bg-aboutParameters bg-no-repeat bg-blue-100 flex flex-col justify-center py-28 bg-cover">
      <h1 className="text-gray text-7xl font-semibold text-center">
        Are you ready?
      </h1>
      <p className="text-gray text-3xl text-center mt-7 mb-14 flex flex-col">
        <span>Take part in shaping the economic and governance</span>
        <span>settings of Aragon DAO.</span>
      </p>
      <Link href="/configuration">
        <button className="bg-white text-blue hover:text-white hover:bg-blue text-xl font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500 mx-20 lg:mx-48 xl:mx-[400px]">
          I understood everything and I’m able to configure the parameters
        </button>
      </Link>
    </div>
  )
}
