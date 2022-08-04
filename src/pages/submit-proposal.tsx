import { Header } from '../components/Header'
import { SubmitForm } from '../components/Submit/Banner'
import { Buttons } from '../components/Submit/Buttons'
import { SubmitHero } from '../components/Submit/Hero'
import { MyDialog } from '../components/Submit/Modal/SubmitModal'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useSubmit } from '../hooks/useSubmit'
import TaoVotingBar from '../components/Configuration/Chart/TaoVotingBar'
import { useTaoVoting } from '../hooks/useTaoVoting'
import { motion } from 'framer-motion'
import * as htmlToImage from 'html-to-image'
import api from '../services/api'
import { useParams } from '../hooks/useParams'

async function getImage(id: string) {
  let image
  const node = document.getElementById(id)
  if (node) {
    await htmlToImage.toPng(node).then((dataUrl) => {
      image = dataUrl.substr(dataUrl.indexOf(',') + 1)
    })
    return image
  }
}

export default function SubmitProposal() {
  const barChart = useTaoVoting()
  const { error, setLoading, setDialog, setUrl, setError } = useSubmit()

  const {
    supportRequired,
    minimumQuorum,
    voteDuration,
    delegatedVotingPeriod,
    quietEndingPeriod,
    quietEndingExtension,
    executionDelay,
    proposalDeposit,
    challengeDeposit,
    settlementPeriod,
    proposalTitle,
    proposalDescription,
    imageType,
  } = useParams()

  async function handleSubmitProposal() {
    const taoChart = await getImage('tao-chart')
    console.log(taoChart)
    const typeTimeOut = setTimeout(() => {
      setLoading(true)
      api
        .post('/submit/', {
          taoVoting: {
            supportRequired: Number(supportRequired) / 100,
            minimumQuorum: Number(minimumQuorum) / 100,
            voteDuration: voteDuration,
            delegatedVotingPeriod: delegatedVotingPeriod,
            quietEndingPeriod: quietEndingPeriod,
            quietEndingExtension: quietEndingExtension,
            executionDelay: executionDelay,
          },
          disputableVoting: {
            proposalDeposit: proposalDeposit,
            challengeDeposit: challengeDeposit,
            settlementPeriod: settlementPeriod,
          },
          proposalInfo: {
            title: proposalTitle,
            strategy: proposalDescription,
          },
          imageInfo: {
            type: imageType,
            image: taoChart,
          },
        })

        .then((response) => {
          setDialog(true)
          setUrl(response.data.data.issueUrl)
          setError(false)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
    }, 500)
    return () => clearTimeout(typeTimeOut)
  }

  useEffect(() => {
    if (error === true) {
      toast('Something went wrong!', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#3164FA',
          color: '#ffff',
        },
        className: 'font-over font-bold',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
    }
  }, [error])

  return (
    <div className="bg-gray-50 bg-config bg-no-repeat bg-top">
      <Header />
      <MyDialog />
      <SubmitHero />
      <SubmitForm />
      <div className="flex flex-col bg-transparent ml-6 mr-8 mt-20 w-full">
        <motion.div
          layout
          className="flex flex-col items-center justify-center"
        >
          <h3 className="font-bold text-gray">Tao Voting Chart</h3>
          <TaoVotingBar
            nonQuietVotingPeriod={
              barChart.totalProposalProcess?.nonQuietVotingPeriod
            }
            quietEndingPeriod={barChart.totalProposalProcess?.quietEndingPeriod}
            executionDelay={barChart.totalProposalProcess?.executionDelay}
            delegatedVotingPeriod={
              barChart.delegatedVoting?.delegatedVotingPeriod
            }
            voteDuration={barChart.proposalProcessWithExtension?.voteDuration}
            quietEndingPeriodWithExtension={
              barChart.proposalProcessWithExtension?.quietEndingExtension
            }
            executionDelayWithExtension={
              barChart.proposalProcessWithExtension?.executionDelay
            }
          />
        </motion.div>
      </div>
      <Buttons onClick={handleSubmitProposal} />
      <Toaster />
    </div>
  )
}
