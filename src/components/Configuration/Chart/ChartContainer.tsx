import React from 'react'
import { motion, Variants } from 'framer-motion'

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

function ChartContainer({ children }: ChartContainerProps) {
  return (
    <div className="flex flex-col bg-transparent ml-6 mr-8 mt-4 w-full">
      <motion.div animate="animate" initial="initial" variants={titlesFade}>
        <div className="flex justify-center">
          <div className="text-gray text-[22px] font-semibold flex flex-col w-full text-center my-14">
            <span>
              See the relative distribution of each phase of Tao Voting, based
              on your
            </span>
            <span>parameters, in the graph below.</span>
          </div>
        </div>
      </motion.div>
      <motion.div layout className="flex items-center justify-center">
        {children}
      </motion.div>
    </div>
  )
}

export default ChartContainer
