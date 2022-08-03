import { useTaoVoting } from '../../../hooks/useTaoVoting'
import { Card, CardProps } from './Card'

export function DisputableVoating() {
  const disputable = useTaoVoting()
  const disputableOutputs: CardProps[] = [
    {
      title: 'Proposal Deposit',
      image: '/images/proposalDeposit.svg',
      width: 144,
      height: 144,
      valueType: 'currency',
      value: disputable.proposalDeposit,
    },
    {
      title: 'Challenge Deposit',
      image: '/images/challengeDeposit.svg',
      width: 180,
      height: 180,
      valueType: 'currency',
      value: disputable.challengeDeposit,
    },
    {
      title: 'Settlement Period',
      image: '/images/settlementPeriod.svg',
      width: 132,
      height: 132,
      valueType: 'date',
      date: disputable.setlementPeriod,
    },
  ]

  return (
    <div className="grid grid-cols-3 w-2/3 gap-8">
      {disputableOutputs.map((disputableOutput) => {
        return (
          <Card
            key={disputableOutput.title}
            title={disputableOutput.title}
            image={disputableOutput.image}
            width={disputableOutput.width}
            height={disputableOutput.height}
            valueType={disputableOutput.valueType}
            value={disputableOutput.value}
            date={disputableOutput.date}
          />
        )
      })}
    </div>
  )
}
