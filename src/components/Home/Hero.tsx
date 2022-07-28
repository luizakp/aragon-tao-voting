import Link from 'next/link';

export function HomeHero() {
  return (
    <div className="flex flex-col justify-center items-center px-6">
      <div className="text-7xl flex-col leading-[102px]">
        <h1 className="text-center text-blue-100 font-semibold">
          The Future of Aragon
        </h1>
        <h1 className="text-center">is in your hands</h1>
      </div>
      <div className="text-3xl text-gray text-center leading-10 mx-5 2xl:mx-80 xl:mx-72 lg:mx-32 md:mx-12 mt-10">
        <p>
          The Aragon community will be working on building the safest, most
          effective DAO structure to run the Aragon network.
        </p>
        <p className="mt-11 mb-16">
          As our DAO evolves so should its configuration. You, as a member of
          the Aragon DAO, can configure each component and collaborate on the
          design of our governance.
        </p>
      </div>
      <Link href="/configuration">
        <button className="bg-white text-blue hover:text-white hover:bg-blue text-xl font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500">
          Learn More About Tao Voting
        </button>
      </Link>
    </div>
  );
}
