import Image from 'next/image';
import Link from 'next/link';
import aragonLogo from '../../public/images/aragonLogo.svg';

export function Header() {
  return (
    <div className="bg-white/40 py-6 px-11 flex flex-col items-center justify-between lg:flex-row">
      <Link href="/">
        <button className="flex items-center">
          <Image src={aragonLogo} alt={'Aragon'} />
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-50 to-purple-200 ml-6">
            TAO VOTING
          </h3>
        </button>
      </Link>
      <div className="flex flex-col items-center font-semibold md:flex-row lg:mt-0">
        <Link href="/about">
          <button className="text-gray my-6 md:mr-10">
            What is Tao Voting?
          </button>
        </Link>
        <Link href="/configuration">
          <button className="bg-blue hover:bg-blue-200 text-white py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500">
            Go to Configuration
          </button>
        </Link>
      </div>
    </div>
  );
}
