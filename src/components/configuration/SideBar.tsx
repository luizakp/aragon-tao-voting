import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'

interface SideBarProps {
  children: React.ReactNode
  hiddenButton?: boolean
  minWidth?: boolean
  submitProposal?: boolean
}

export function SideBar({ children, minWidth, submitProposal }: SideBarProps) {
  return (
    <div
      className={classnames(
        'min-h-screen flex flex-col bg-white w-96 px-12 shadow-lg justify-between',
        {
          'min-w-2/5': minWidth,
        }
      )}
    >
      {children}
      <div className="my-8 w-full">
        <Link href="/about">
          <button
            disabled={submitProposal}
            className="bg-blue text-white hover:text-blue-300 hover:bg-blue-0 font-semibold py-3 px-10 rounded-lg drop-shadow-sm transition ease-in-out duration-500 w-full"
          >
            Review Proposal
          </button>
        </Link>
      </div>
    </div>
  )
}
