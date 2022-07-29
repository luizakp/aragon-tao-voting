export interface ITaoVoting {
  supportRequired: number
  minimumQuorum: number
  voteDuration: number
  delegatedVotingPeriod: number
  quietEndingPeriod: number
  quietEndingExtension: number
  executionDelay: number
}

export interface IDisputableVoting {
  proposalDeposit: number
  challengeDeposit: number
  settlementPeriod: number
}
