import { useParams } from '../../hooks/useParams'
import { useTaoVoting } from '../../hooks/useTaoVoting'
import TaoVotingBar from './Chart/TaoVotingBar'
import ChartContainer from './Chart/ChartContainer'
import { SideBar } from './SideBar'
import { Params } from './SideBar/Params'
import { DisputableVoating } from './DisputableVoating'

export function Voting() {
  const barChart = useTaoVoting()
  const {
    supportRequired,
    minimumQuorum,
    voteDuration,
    delegatedVotingPeriod,
    quietEndingPeriod,
    quietEndingExtension,
    executionDelay,
    submitProposal,
    proposalDeposit,
    challengeDeposit,
    settlementPeriod,
  } = useParams()

  const taoInputs = [
    {
      name: 'supportRequired',
      value: supportRequired,
      param: 'Support Required',
      link: 'https://forum.aragon.org/t/tao-voting-support-required/3663',
      placeholder: '%',
      tooltipText:
        'The percent of YES votes relative to NO votes needed to pass this proposal.',
      interval: { min: 50, max: 100 },
    },
    {
      name: 'minimumQuorum',
      value: minimumQuorum,
      param: 'Minimum Quorum',
      link: 'https://forum.aragon.org/t/tao-voting-minimum-quorum/3664',
      placeholder: '%',
      tooltipText:
        'The percent of all tokens that must vote YES on a proposal in order for it to be valid.',
      interval: { min: 0 },
    },
    {
      name: 'voteDuration',
      value: voteDuration,
      param: 'Vote Duration',
      link: 'https://forum.aragon.org/t/tao-voting-vote-duration/3665',
      placeholder: 'days',
      tooltipText: 'The amount of time a proposal is eligible to be voted on.',
    },
    {
      name: 'delegatedVotingPeriod',
      value: delegatedVotingPeriod,
      param: 'Delegated Voting Period',
      link: 'https: //forum.aragon.org/t/tao-voting-delegated-voting-period/3666',
      placeholder: 'days',
      tooltipText:
        'The amount of time within the Vote Duration that delegates are permitted to vote on a proposal.',
    },
    {
      name: 'quietEndingPeriod',
      value: quietEndingPeriod,
      param: 'Quiet Ending Period',
      link: 'https: //forum.aragon.org/t/tao-voting-quiet-ending-period-and-quiet-ending-extension/3667',
      placeholder: 'days',
      tooltipText:
        'If the voting outcome changes during this time the Quiet Ending Extension will trigger, extending the Vote Duration.',
    },
    {
      name: 'quietEndingExtension',
      value: quietEndingExtension,
      param: 'Quiet Ending Extension',
      link: 'https://forum.tecommons.org/t/tao-voting-quiet-ending-period-and-quiet-ending-extension/488',
      placeholder: 'days',
      tooltipText:
        'The amount of time added to the Vote Duration resulting from the vote outcome changing during the Quiet Ending.',
    },
    {
      name: 'executionDelay',
      value: executionDelay,
      param: 'Execution Delay',
      link: 'https: //forum.aragon.org/t/tao-voting-execution-delay/3668',
      placeholder: 'days',
      tooltipText:
        'The amount of time after a vote passes before the proposed action is executed',
    },
  ]

  const disputableInputs = [
    {
      name: 'proposalDeposit',
      value: proposalDeposit,
      param: 'Proposal Deposit',
      link: 'https://forum.aragon.org/t/deposit-and-challenge-deposit/3669',
      placeholder: 'ANT',
      tooltipText:
        'The percent of YES votes relative to NO votes needed to pass this proposal.',
    },
    {
      name: 'challengeDeposit',
      value: challengeDeposit,
      param: 'Challenge Deposit',
      link: 'https://forum.aragon.org/t/deposit-and-challenge-deposit/3669',
      placeholder: 'ANT',
      tooltipText:
        'The percent of YES votes relative to NO votes needed to pass this proposal.',
    },
    {
      name: 'settlementPeriod',
      value: settlementPeriod,
      param: 'Settlement Period',
      link: 'https://forum.aragon.org/t/settlement-period/3670',
      placeholder: 'days',
      tooltipText:
        'The percent of YES votes relative to NO votes needed to pass this proposal.',
    },
  ]

  return (
    <>
      <div className="min-h-screen h-full bg-dash">
        <div className="flex">
          <SideBar submitProposal={!submitProposal}>
            <Params title="Tao Voting" inputParams={taoInputs} />
            <Params title="Disputable Voting" inputParams={disputableInputs} />
          </SideBar>
          <div className="w-full divide-y divide-gray-100">
            <ChartContainer>
              <TaoVotingBar
                nonQuietVotingPeriod={
                  barChart.totalProposalProcess?.nonQuietVotingPeriod
                }
                quietEndingPeriod={
                  barChart.totalProposalProcess?.quietEndingPeriod
                }
                executionDelay={barChart.totalProposalProcess?.executionDelay}
                delegatedVotingPeriod={
                  barChart.delegatedVoting?.delegatedVotingPeriod
                }
                voteDuration={
                  barChart.proposalProcessWithExtension?.voteDuration
                }
                quietEndingPeriodWithExtension={
                  barChart.proposalProcessWithExtension?.quietEndingExtension
                }
                executionDelayWithExtension={
                  barChart.proposalProcessWithExtension?.executionDelay
                }
              />
            </ChartContainer>
            <div className="flex justify-center pt-16">
              <DisputableVoating />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
