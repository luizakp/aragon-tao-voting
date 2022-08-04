import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import api from '../services/api'
import { useParams } from './useParams'
import * as htmlToImage from 'html-to-image'

type SubmitContextType = {
  handleSubmitProposal: () => void
  isSubmitProposal: boolean
  dialog: boolean
  setDialog: Dispatch<SetStateAction<boolean>>
  loading: boolean
  url: string
  error: boolean
}

const initialContext: SubmitContextType = {
  handleSubmitProposal: (): void => {
    throw new Error('submitProposal must be overridden')
  },
  isSubmitProposal: false,
  dialog: false,
  setDialog: (): void => {
    throw new Error('setDialog must be overridden')
  },
  loading: false,
  url: '',
  error: false,
}

const SubmitContext = createContext<SubmitContextType>(initialContext)

interface AppSubmitContextProps {
  children: React.ReactNode
}

function SubmitProvider({ children }: AppSubmitContextProps) {
  const [isSubmitProposal, setIsSubmitProposal] = useState<boolean>(false)
  const [dialog, setDialog] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')

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
    image,
  } = useParams()

  useEffect(() => {
    const checkEmpty = [
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
    ]
    if (checkEmpty.includes('')) {
      setIsSubmitProposal(false)
    } else {
      setIsSubmitProposal(true)
    }
  }, [
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
  ])

  async function handleSubmitProposal() {
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
            image: image,
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

  return (
    <SubmitContext.Provider
      value={{
        handleSubmitProposal,
        isSubmitProposal,
        dialog,
        loading,
        url,
        setDialog,
        error,
      }}
    >
      {children}
    </SubmitContext.Provider>
  )
}

function useSubmit() {
  const context = useContext(SubmitContext)

  return context
}

export { SubmitContext, SubmitProvider, useSubmit }
