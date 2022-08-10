import React from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useTaoVoting } from '../../../hooks/useTaoVoting'

interface ChartContainerProps {
  children: React.ReactNode
}

const titlesFade: Variants = {
  animate: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.6 },
  },
  initial: {
    opacity: 0.8,
    transition: { ease: 'easeIn', duration: 0.6 },
  },
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
      opacity: {
        durantion: 0.2,
      },
      height: {
        delay: 0.2,
      },
    },
  },
}

function ChartContainer({ children }: ChartContainerProps) {
  const { isChartOpen } = useTaoVoting()
  return (
    <AnimatePresence>
      {isChartOpen && (
        <motion.div {...boxAnimation}>
          <div className="flex flex-col bg-transparent  mt-4 w-full">
            <motion.div
              animate="animate"
              initial="initial"
              variants={titlesFade}
            >
              <div className="flex justify-center">
                <div className="text-gray text-[22px] font-semibold flex flex-col w-full text-center my-14 px-20">
                  <span>
                    See the relative distribution of each phase of Tao Voting,
                    based on your
                  </span>
                  <span>parameters, in the graph below.</span>
                </div>
              </div>
            </motion.div>
            <motion.div layout className="flex items-center justify-center">
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ChartContainer
