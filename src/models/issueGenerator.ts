import { TaoVoting } from './taoVoting'
import { saveProposalDB } from '../database/utils'
import { IProposalInfo, IProposalDBSchema } from '../types/proposal'
import { ITaoVoting, IDisputableVoting } from '../types/taoVoting'

export class IssueGenerator {
  proposalInfo: IProposalInfo
  taoVoting: ITaoVoting
  disputableVoting: IDisputableVoting
  constructor(
    proposalInfo: IProposalInfo,
    taoVoting: ITaoVoting,
    disputableVoting: IDisputableVoting
  ) {
    this.proposalInfo = proposalInfo
    this.taoVoting = taoVoting
    this.disputableVoting = disputableVoting
  }

  private async saveProposal(issueNumber: string) {
    const proposalSchema: IProposalDBSchema = {
      issueNumber: issueNumber,
      title: this.proposalInfo.title,
      strategy: this.proposalInfo.strategy,
      taoVoting: this.taoVoting,
      disputableVoting: this.disputableVoting,
    }
    saveProposalDB(proposalSchema)
  }

  public async formatOutputIssue(issueNumber: string) {
    const taoVoting = new TaoVoting(this.taoVoting, this.disputableVoting)
    const taoVotingOutput = await taoVoting.getData()
    const taoVotingInput = taoVoting.taoVoting
    const disputableVotingInput = taoVoting.disputableVoting

    const { timeVote, timeReview, timeExecute } = taoVotingOutput.timelineData
    const { proposalDeposit, challengeDeposit, setlementPeriod } =
      taoVotingOutput.disputableVoting
    const outputIssue = `
# ${this.proposalInfo.title}
${this.proposalInfo.strategy}

##  Tao Voting
| Parameter               | Value                                          |
| ----------------------- | ---------------------------------------------- |
| Support Required        | ${100 * taoVotingInput.supportRequired}%       |
| Minimum Quorum          | ${100 * taoVotingInput.minimumQuorum}%         |
| Vote Duration           | ${taoVotingInput.voteDuration}                 |
| Delegated Voting Period | ${taoVotingInput.delegatedVotingPeriod} day(s) |
| Quiet Ending Period     | ${taoVotingInput.quietEndingPeriod}  day(s)    |
| Quiet Ending Extension  | ${taoVotingInput.quietEndingExtension}  day(s) |
| Execution Delay         | ${taoVotingInput.executionDelay}  day(s)       |

### Tao Voting Timeline From Proposal To Execution
![](https://i.imgur.com/K751bhd.png)
>This shows how the timeline stacks up for yes/no time based votes that can change the configuration after launch.

### Timeline Data
|# of Quiet Ending Extensions        | No Extensions                     | With 1 Extension                   | With 2 Extensions                   |
| ---------------------------------- | --------------------------------- | ---------------------------------- | ----------------------------------- |
| Time to Vote on Proposals          | ${timeVote.noExtension} day(s)    | ${
      timeVote.oneExtension
    } day(s)    | ${timeVote.twoExtensions} day(s)    |
| Time to Review a Delegates Vote    | ${timeReview.noExtension} day(s)  | ${
      timeReview.oneExtension
    } day(s)  | ${timeReview.twoExtensions} day(s)  |
| Time to Execute a Passing Proposal | ${timeExecute.noExtension} day(s) | ${
      timeExecute.oneExtension
    } day(s) | ${timeExecute.twoExtensions} day(s) |

##  Disputable Voting
| Parameter         | Value                                                                         |
| ----------------- | ----------------------------------------------------------------------------- |
| Proposal Deposit  | ${disputableVotingInput.proposalDeposit} ANT ($${
      proposalDeposit.valueUsd
    })   |
| Challenge Deposit | ${disputableVotingInput.challengeDeposit} ANT ($${
      challengeDeposit.valueUsd
    }) |
| Settlement Period | ${
      disputableVotingInput.settlementPeriod
    } day(s)           |

### [FORK THIS PROPOSAL](http://config.tecommons.org/config/import/${issueNumber}) (link)
`
    return outputIssue
  }

  public async createIssue() {
    const response = await fetch(
      'https://api.github.com/search/issues?q=repo:GeneralMagicio/aragon-tao-voting'
    )
    const repoIssues = await response.json()
    const issueNumber = (repoIssues.total_count + 1).toString()
    await this.saveProposal(issueNumber)
    const reponse = await fetch(
      'https://api.github.com/repos/GeneralMagicio/aragon-tao-voting/issues',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.GITHUB_AUTH || '',
        },
        body: JSON.stringify({
          title: 'test title',
          body: (await this.formatOutputIssue(issueNumber)).toString(),
        }),
      }
    )
    return reponse
  }
}
