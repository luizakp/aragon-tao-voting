import type { NextApiRequest, NextApiResponse } from 'next'
import { TaoVoting } from '../../models/taoVoting'
import { ITaoVoting, IDisputableVoting } from '../../types/taoVoting'

interface ITaoVotingPostData {
  taoVoting: ITaoVoting
  disputableVoting: IDisputableVoting
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const data: ITaoVotingPostData = req.body
  const taoVoting = new TaoVoting(data.taoVoting, data.disputableVoting)
  const response = await taoVoting.getData()
  res.status(200).json({ data: response })
}
