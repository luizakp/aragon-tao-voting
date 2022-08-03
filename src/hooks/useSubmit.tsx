import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import api from '../services/api'
import { useParams } from './useParams'

type SubmitContextType = {
  taoVoting: {
    supportRequired: number
    minimumQuorum: number
    voteDuration: number
    delegatedVotingPeriod: number
    quietEndingPeriod: number
    quietEndingExtension: number
    executionDelay: number
  }
  disputableVoting: {
    proposalDeposit: number
    challengeDeposit: number
    settlementPeriod: number
  }
  proposalInfo: {
    title: string
    strategy: string
  }
  imageInfo: {
    type: string
    image: string
  }
  setContext: Dispatch<SetStateAction<SubmitContextType>>
  submitProposal: () => void
}

const initialContext: SubmitContextType = {
  taoVoting: {
    supportRequired: 0,
    minimumQuorum: 0,
    voteDuration: 0,
    delegatedVotingPeriod: 0,
    quietEndingPeriod: 0,
    quietEndingExtension: 0,
    executionDelay: 0,
  },
  disputableVoting: {
    proposalDeposit: 0,
    challengeDeposit: 0,
    settlementPeriod: 0,
  },
  proposalInfo: {
    title: '',
    strategy: '',
  },
  imageInfo: {
    type: '',
    image: '',
  },
  setContext: (): void => {
    throw new Error('setContext must be overridden')
  },
  submitProposal: (): void => {
    throw new Error('submitProposal must be overridden')
  },
}

const SubmitContext = createContext<SubmitContextType>(initialContext)

interface AppSubmitContextProps {
  children: React.ReactNode
}

function SubmitProvider({ children }: AppSubmitContextProps) {
  const [params, setContext] = useState<SubmitContextType>(initialContext)
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

  function submitProposal() {
    const typeTimeOut = setTimeout(() => {
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
          const { output } = response.data
          setContext({ ...output })
        })
        .catch((e) => console.log(e))
    }, 500)
    return () => clearTimeout(typeTimeOut)
  }

  return (
    <SubmitContext.Provider value={{ ...params, submitProposal }}>
      {children}
    </SubmitContext.Provider>
  )
}

function useSubmit() {
  const context = useContext(SubmitContext)

  return context
}

export { SubmitContext, SubmitProvider, useSubmit }
