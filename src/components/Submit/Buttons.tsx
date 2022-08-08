import Link from 'next/link'
import { useSubmit } from '../../hooks/useSubmit'
import { Oval } from 'react-loader-spinner'

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Buttons({ onClick }: ButtonProps) {
  const { loading } = useSubmit()
  const { isSubmitProposal } = useSubmit()
  return (
    <div className="w-full flex flex-col justify-between lg:flex-row lg:px-44 py-9 items-center">
      <Link href="/configuration">
        <button className="w-72 bg-[#F6F9FC] text-blue hover:text-white hover:bg-blue border border-blue font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500 mb-9 lg:mb-0">
          Return to Configuration
        </button>
      </Link>
      {loading === false ? (
        <button
          className="bg-blue disabled:cursor-default disabled:bg-blue-50 disabled:hover:bg-blue-50 w-72 disabled:hover:text-white disabled:hover:border-transparent text-white border border-transparent hover:text-blue hover:border-blue hover:bg-white font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500"
          onClick={onClick}
          disabled={!isSubmitProposal}
        >
          Submit Proposal
        </button>
      ) : (
        <button
          className="flex bg-blue justify-center w-72 text-white border border-transparent font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500"
          disabled={!isSubmitProposal}
        >
          <Oval color="#ffff" height={16} width={16} />
        </button>
      )}
    </div>
  )
}
