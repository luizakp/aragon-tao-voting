import Link from 'next/link'
import { useSubmit } from '../../hooks/useSubmit'

export function Buttons() {
  const { submitProposal } = useSubmit()
  return (
    <div className="w-full flex justify-between px-44 py-9">
      <Link href="/configuration">
        <button className="w-72 bg-[#F6F9FC] text-blue hover:text-white hover:bg-blue border border-blue font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500">
          Return to Configuration
        </button>
      </Link>
      <button
        className="w-72 bg-blue text-white border border-transparent hover:text-blue hover:border-blue hover:bg-white font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500"
        onClick={submitProposal}
      >
        Review Proposal
      </button>
    </div>
  )
}
