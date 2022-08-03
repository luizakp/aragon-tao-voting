import { useParams } from '../../hooks/useParams'
import { useTaoVoting } from '../../hooks/useTaoVoting'
import { SubmitSumarryProps, SubmitSummary } from './Summary'

export function SubmitHero() {
  const taoVoting = useTaoVoting()
  const { supportRequired, minimumQuorum } = useParams()

  const taoOutputs: SubmitSumarryProps[] = [
    {
      title: 'Tao Voting',
      cards: [
        {
          title: 'Support Required',
          label: '%',
          value: supportRequired,
        },
        {
          title: 'Minimum Quorum',
          label: '%',
          value: minimumQuorum,
        },
        {
          title: 'Vote Duration',
          label: 'days',
          value: taoVoting.proposalProcessWithExtension?.voteDuration,
        },
        {
          title: 'Delegated Voting Period',
          label: 'days',
          value: taoVoting.delegatedVoting?.delegatedVotingPeriod,
        },
        {
          title: 'Quiet Ending Period',
          label: 'days',
          value: taoVoting.totalProposalProcess?.quietEndingPeriod,
        },
        {
          title: 'Quiet Ending Extension',
          label: 'days',
          value: taoVoting.proposalProcessWithExtension?.quietEndingExtension,
        },
        {
          title: 'Execution Delay',
          label: 'hours',
          value: 24 * taoVoting.proposalProcessWithExtension?.executionDelay,
        },
      ],
    },
    {
      title: 'Disputable Voting',
      cards: [
        {
          title: 'Proposal Deposit',
          label: 'Aragon (ANT)',
          value: taoVoting.proposalDeposit.token,
        },
        {
          title: 'Challenge Deposit',
          label: 'Aragon (ANT)',
          value: taoVoting.challengeDeposit.token,
        },
        {
          title: 'Settlement Period',
          label: 'days',
          value: taoVoting.setlementPeriod,
        },
      ],
    },
  ]
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-5xl pt-10">Configuration Summary</h1>
      <div className="pl-44 pr-72 w-full">
        {taoOutputs.map((taoOutput) => {
          return (
            <SubmitSummary
              key={taoOutput.title}
              title={taoOutput.title}
              cards={taoOutput.cards}
            />
          )
        })}
      </div>
    </div>
  )
}
