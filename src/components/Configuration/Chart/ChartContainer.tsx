import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTaoVoting } from '../../../hooks/useTaoVoting'
import ChartTitle from './ChartTitle'

interface ChartContainerProps {
  children: React.ReactNode
}

const boxAnimation = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    height: 'auto',
    transition: {
      opacity: {
        delay: 0.2,
      },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      opacity: { duration: 0.2 },
      height: {
        delay: 0.2,
      },
    },
  },
}

function ChartContainer({ children }: ChartContainerProps) {
  const { isChartOpen } = useTaoVoting()
  return (
    <>
      <div className="flex md:hidden">
        <AnimatePresence>
          {isChartOpen && (
            <motion.div {...boxAnimation}>
              <div className="flex flex-col bg-transparent  mt-4 w-full">
                <ChartTitle />
                <motion.div layout className="flex items-center justify-center">
                  {children}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:flex">
        <div className="flex flex-col bg-transparent  mt-4 w-full">
          <ChartTitle />
          <motion.div layout className="flex items-center justify-center">
            {children}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ChartContainer
