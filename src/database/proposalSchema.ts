import { model, models, Schema } from 'mongoose'

const proposalSchema: Schema = new Schema({
  issueNumber: Number,
  title: String,
  strategy: String,
  taoVoting: {
    supportRequired: Number,
    minimumQuorum: Number,
    voteDuration: Number,
    delegatedVotingPeriod: Number,
    quietEndingPeriod: Number,
    quietEndingExtension: Number,
    executionDelay: Number,
  },
  disputableVoting: {
    proposalDeposit: Number,
    challengeDeposit: Number,
    settlementPeriod: Number,
  },
})

const Proposal = models.Proposal || model('Proposal', proposalSchema)

export default Proposal
