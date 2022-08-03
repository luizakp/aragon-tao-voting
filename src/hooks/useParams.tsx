import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

type ParamsContextType = {
  supportRequired: number
  minimumQuorum: number
  voteDuration: number
  delegatedVotingPeriod: number
  quietEndingPeriod: number
  quietEndingExtension: number
  executionDelay: number
  proposalDeposit: number
  challengeDeposit: number
  settlementPeriod: number
  submitProposal: boolean
  proposalTitle: string
  proposalDescription: string
  imageType: string
  image: string
  setParams: Dispatch<SetStateAction<ParamsContextType>>
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
}

export const initialParams: ParamsContextType = {
  supportRequired: 88,
  minimumQuorum: 8,
  voteDuration: 7,
  delegatedVotingPeriod: 5,
  quietEndingPeriod: 3,
  quietEndingExtension: 2,
  executionDelay: 1,
  proposalDeposit: 200,
  challengeDeposit: 400,
  settlementPeriod: 5,
  submitProposal: false,
  proposalTitle: '',
  proposalDescription: '',
  imageType: '',
  image: '',
  setParams: (): void => {
    throw new Error('setParams must be overridden')
  },
  handleChange: (): void => {
    throw new Error('handleChange must be overridden')
  },
}

const ParamsContext = createContext<ParamsContextType>(initialParams)

interface AppParamsContextProps {
  children: React.ReactNode
}

function ParamsProvider({ children }: AppParamsContextProps) {
  const [params, setParams] = useState<ParamsContextType>(initialParams)
  const [submitProposalState, setSubmitProposal] = useState(false)

  useEffect(() => {
    const storageParams = localStorage.getItem('params')
    if (storageParams === null) {
      setParams(initialParams)
    } else {
      setParams(JSON.parse(storageParams))
    }
  }, [])

  useEffect(() => {
    if (params) {
      const { ...rest } = params
      const values = Object.keys(rest).map((key) => {
        return 'true'
      })
      if (values.every((elem) => elem !== '')) {
        setSubmitProposal(true)
      } else {
        setSubmitProposal(false)
      }
      localStorage.setItem('params', JSON.stringify(params))
    }
  }, [params])

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setParams((previousParams) => ({
      ...previousParams,
      [name]: value,
    }))
  }

  return (
    <ParamsContext.Provider
      value={{
        ...params,
        submitProposal: submitProposalState,
        setParams,
        handleChange,
      }}
    >
      {children}
    </ParamsContext.Provider>
  )
}

function useParams() {
  const context = useContext(ParamsContext)

  return context
}

export { ParamsContext, ParamsProvider, useParams }
