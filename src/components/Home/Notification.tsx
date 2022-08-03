import Image from 'next/image'
import { useState } from 'react'
import Cross from '../../../public/images/cross.svg'
import { AnimatePresence, motion } from 'framer-motion'
export function Notification() {
  const [open, setOpen] = useState(true)

  function handleClose() {
    setOpen(false)
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute w-full"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-blue-20/40 flex items-center justify-center relative">
            <p className="py-[14px] text-center px-14">
              🎉🎉 Join our Param Parties to collaborate on the design of our
              governance. 🎉🎉
            </p>
            <button
              className="absolute right-6 flex items-center"
              onClick={handleClose}
            >
              <Image src={Cross} alt="Close" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
