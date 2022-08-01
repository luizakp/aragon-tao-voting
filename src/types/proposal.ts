import { ITaoVoting, IDisputableVoting } from './taoVoting'

export interface IProposalDBSchema {
  issueNumber: string
  proposalInfo: IProposalInfo
  taoVoting: ITaoVoting
  disputableVoting: IDisputableVoting
}

export interface IProposalInfo {
  title: string
  strategy: string
}

export interface IImageInfo {
  image: string
  type: string
}
