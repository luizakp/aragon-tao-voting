import mongoose from 'mongoose'
import Proposal from './proposalSchema'
import { IProposalDBSchema } from '../types/proposal'

export async function saveProposalDB(proposalSchema: IProposalDBSchema) {
  await mongoose.connect(process.env.DB_CONNECTION || '')
  const proposal = new Proposal(proposalSchema)
  try {
    proposal.save()
  } catch (err) {
    console.log(err)
  }
}
