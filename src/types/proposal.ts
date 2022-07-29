import { ITaoVoting, IDisputableVoting } from './taoVoting'

export interface IProposalDBSchema {
  issueNumber: string
  title: string
  strategy: string
  taoVoting: ITaoVoting
  disputableVoting: IDisputableVoting
}

export interface IProposalInfo {
  title: string
  strategy: string
}
