import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useParams } from './useParams'

type SubmitContextType = {
  isSubmitProposal: boolean
  dialog: boolean
  setDialog: Dispatch<SetStateAction<boolean>>
  loading: boolean
  url: string
  error: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setUrl: Dispatch<SetStateAction<string>>
  setError: Dispatch<SetStateAction<boolean>>
}

const initialContext: SubmitContextType = {
  isSubmitProposal: false,
  dialog: false,
  setDialog: (): void => {
    throw new Error('setDialog must be overridden')
  },
  loading: false,
  url: '',
  error: false,
  setLoading: (): void => {
    throw new Error('setLoading must be overridden')
  },
  setUrl: (): void => {
    throw new Error('setUrl must be overridden')
  },
  setError: (): void => {
    throw new Error('setError must be overridden')
  },
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

  return (
    <SubmitContext.Provider
      value={{
        isSubmitProposal,
        dialog,
        loading,
        url,
        setDialog,
        error,
        setLoading,
        setUrl,
        setError,
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
