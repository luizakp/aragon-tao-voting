import type { NextApiRequest, NextApiResponse } from 'next'
import { IssueGenerator } from '../../models/issueGenerator'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != 'POST') {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const data = req.body
  const issueGenerator = new IssueGenerator(
    data.proposalInfo,
    data.taoVoting,
    data.disputableVoting
  )
  const response = await issueGenerator.createIssue()
  const result = await response.json()
  res.status(200).json({ data: result })
}
