import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import toast, { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useParams } from '../../hooks/useParams'
import axios from 'axios'
import { Header } from '../../components/Header'

const success: Variants = {
  animate: {
    opacity: 1,
    transition: { ease: 'easeInOut', delay: 0.6, duration: 0.6 },
  },
  initial: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
}

const loading: Variants = {
  animate: {
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
  initial: {
    opacity: 0.75,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.6 },
  },
}

function Import() {
  const router = useRouter()
  const { setParams } = useParams()
  const [isLoading, setIsLoading] = useState<number>(400)
  const { issueNumber } = router.query

  useEffect(() => {
    if (issueNumber) {
      axios
        .get(`/api/import/${issueNumber}/`)
        .then((response) => {
          const taoVotingRaw = response.data.data.taoVoting
          const proposalInfoRaw = response.data.data.proposalInfo
          const taoVoting = {
            delegatedVotingPeriod: taoVotingRaw.delegatedVotingPeriod,
            executionDelay: taoVotingRaw.executionDelay,
            minimumQuorum: Number(taoVotingRaw.minimumQuorum) * 100,
            quietEndingExtension: taoVotingRaw.quietEndingExtension,
            quietEndingPeriod: taoVotingRaw.quietEndingPeriod,
            supportRequired: Number(taoVotingRaw.supportRequired) * 100,
            voteDuration: taoVotingRaw.voteDuration,
          }
          const proposalInfo = {
            proposalTitle: proposalInfoRaw.title,
            proposalDescription: proposalInfoRaw.strategy,
          }
          setParams({
            ...response.data.data.disputableVoting,
            ...proposalInfo,
            ...taoVoting,
          })
          setIsLoading(response.status)
        })
        .catch(() =>
          toast('Something went wrong!', {
            duration: 3000,
            position: 'bottom-center',
            style: {
              background: '#3164FA',
            },
            className: 'font-inter font-bold',
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          })
        )
    }
  }, [issueNumber, setParams])

  return (
    <>
      <div className="min-h-screen h-full bg-home bg-cover">
        <Header />
        <div className="flex flex-col justify-center items-center mt-48">
          <AnimatePresence>
            <motion.div
              key={`success-${isLoading}`}
              exit="exit"
              animate="animate"
              initial="initial"
              variants={success}
              className={classnames({ hidden: isLoading !== 200 })}
            >
              <h3 className="font-medium text-3xl text-center text-gray mt-18 px-10 md:px-96">
                The parameters we&apos;re imported successfully.{' '}
              </h3>
              <h3 className="font-medium text-3xl text-center text-gray mt-18 px-10 md:px-96">
                <Link href="/configuration">
                  <a className="font-bold text-blue underline">Click here</a>
                </Link>{' '}
                to start modifying the parameters!
              </h3>
            </motion.div>
            <motion.div
              key={`loading-${isLoading}`}
              exit="exit"
              animate="animate"
              initial="initial"
              variants={loading}
              className={classnames(
                'flex flex-col justify-center items-center',
                {
                  hidden: isLoading >= 200 && isLoading < 400,
                }
              )}
            >
              <h1 className="font-bold  text-4xl md:text-6xl text-center text-blue uppercase px-3">
                importing parameters
              </h1>
              <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue mt-12" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Toaster />
    </>
  )
}
export default Import
