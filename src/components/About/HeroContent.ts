import { BulletPointProps } from './BulletPoint'
import { CardProps } from './Card'

interface LinkType {
  label: string
  url: string
}

export const cards: CardProps[] = [
  {
    title: 'Tao Voting',
    content:
      'Tao Voting is the voting process by which the DAO can modify its economic and governance settings post-upgrade.',
  },
  {
    title: 'Delegation',
    content:
      'ANT holders can delegate their Tao Voting powers to another member who will cast votes on their behalf, these members become delegates. ',
  },
  {
    title: 'Quiet Ending',
    content:
      'In the latter portion of the Vote Duration there’s a designated Quiet Ending Period (QEP). If during this period the vote outcome is flipped the Quiet Ending Extension (QEE) will trigger.',
  },
  {
    title: 'Disputable voting',
    content:
      'Any proposal that does not follow the Aragon covenant can be disputable and you get to choose under the costs and durations of the dispute.',
  },
]

export const bulletsContent: BulletPointProps[] = [
  {
    title:
      'Powerful voting application that is capable of performing many high-impact functions',
    bullets: [
      {
        id: 1,
        content: 'Moving all Aragon treasury',
      },
      {
        id: 2,
        content: 'Install and remove Applications (Modules) in the DAO',
      },
      {
        id: 3,
        content: 'Modify the parameters of all existing Applications (Modules)',
      },
    ],
  },
  {
    title: 'You decide:',
    bullets: [
      {
        id: 1,
        content: 'Legacy Dandelion Voting settings',
      },
      {
        id: 2,
        content: 'The amount of time Delegates are allowed to vote',
      },
      {
        id: 3,
        content: 'How long to listen for a change of outcome',
      },
      {
        id: 4,
        content: 'The amount of time that can be added for votinge',
      },
      {
        id: 5,
        content: 'Disputable voting',
      },
    ],
  },
]

export const links: LinkType[] = [
  {
    label: 'Support Required',
    url: 'https://forum.aragon.org/t/tao-voting-support-required/3663',
  },
  {
    label: 'Minimum Quorum',
    url: 'https://forum.aragon.org/t/tao-voting-minimum-quorum/3664',
  },
  {
    label: 'Execution Delay',
    url: 'https://forum.aragon.org/t/tao-voting-vote-duration/3665',
  },
  {
    label: 'Delegated Voting',
    url: 'https://forum.aragon.org/t/tao-voting-delegated-voting-period/3666',
  },
  {
    label: 'Quiet Ending',
    url: 'https://forum.aragon.org/t/tao-voting-quiet-ending-period-and-quiet-ending-extension/3667',
  },
  {
    label: 'Vote Duration',
    url: 'https://forum.aragon.org/t/tao-voting-execution-delay/3668',
  },
  {
    label: 'Proposal and Challenge Deposit',
    url: 'https://forum.aragon.org/t/deposit-and-challenge-deposit/3669',
  },
  {
    label: 'Settlement Period',
    url: 'https://forum.aragon.org/t/settlement-period/3670',
  },
]
