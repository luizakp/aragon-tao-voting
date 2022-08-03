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

type TaoVotingContextType = {
  totalProposalProcess: {
    nonQuietVotingPeriod: number
    quietEndingPeriod: number
    executionDelay: number
  }
  delegatedVoting: {
    delegatedVotingPeriod: number
  }
  proposalProcessWithExtension: {
    voteDuration: number
    quietEndingExtension: number
    executionDelay: number
  }
  proposalDeposit: {
    token: number
    valueUsd: number
  }
  challengeDeposit: {
    token: number
    valueUsd: number
  }
  setlementPeriod: number
  table?: { [key: string]: number[] }
  setContext: Dispatch<SetStateAction<TaoVotingContextType>>
}

const initialContext: TaoVotingContextType = {
  totalProposalProcess: {
    nonQuietVotingPeriod: 0,
    quietEndingPeriod: 0,
    executionDelay: 0,
  },
  delegatedVoting: {
    delegatedVotingPeriod: 0,
  },
  proposalProcessWithExtension: {
    voteDuration: 0,
    quietEndingExtension: 0,
    executionDelay: 0,
  },
  proposalDeposit: {
    token: 0,
    valueUsd: 0,
  },
  challengeDeposit: {
    token: 0,
    valueUsd: 0,
  },
  setlementPeriod: 0,
  setContext: (): void => {
    throw new Error('setContext must be overridden')
  },
}

const TaoVotingContext = createContext<TaoVotingContextType>(initialContext)

interface AppTaoVotingContextProps {
  children: React.ReactNode
}

function TaoVotingProvider({ children }: AppTaoVotingContextProps) {
  const [params, setContext] = useState<TaoVotingContextType>(initialContext)
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
  } = useParams()

  useEffect(() => {
    const typeTimeOut = setTimeout(() => {
      api
        .post('/tao-voting/', {
          taoVoting: {
            supportRequired: Number(supportRequired) / 100,
            minimumQuorum: Number(minimumQuorum) / 100,
            voteDuration,
            delegatedVotingPeriod,
            quietEndingPeriod,
            quietEndingExtension,
            executionDelay,
          },
          disputableVoting: {
            proposalDeposit,
            challengeDeposit,
            settlementPeriod,
          },
        })
        .then((response) => {
          const output = response.data.data
          setContext({
            ...output.taoVoting,
            ...output.disputableVoting,
          })
        })
        .catch((e) => console.log(e))
    }, 500)
    return () => clearTimeout(typeTimeOut)
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
  ])

  return (
    <TaoVotingContext.Provider value={{ ...params }}>
      {children}
    </TaoVotingContext.Provider>
  )
}

function useTaoVoting() {
  const context = useContext(TaoVotingContext)

  return context
}

export { TaoVotingContext, TaoVotingProvider, useTaoVoting }
