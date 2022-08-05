import React from 'react'
import classnames from 'classnames'

interface TooltipProps {
  children: React.ReactNode
  isHovered: boolean
  text: string | React.ReactNode
}

export function Tooltip({ children, isHovered, text }: TooltipProps) {
  return (
    <>
      {text ? (
        <div className="relative flex">
          {children}
          <div
            className={classnames(
              'text-gray-300 text-center absolute bg-gray-50 rounded shadow-xl z-50 bottom-12 p-5',
              {
                hidden: !isHovered,
              }
            )}
          >
            {text}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  )
}
