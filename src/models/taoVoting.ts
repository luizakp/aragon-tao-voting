import { ITaoVoting, IDisputableVoting } from '../types/taoVoting'

export class TaoVoting {
  taoVoting: ITaoVoting
  disputableVoting: IDisputableVoting
  nonQuietVotingPeriod: number

  constructor(taoVoting: ITaoVoting, disputableVoting: IDisputableVoting) {
    this.taoVoting = taoVoting
    this.disputableVoting = disputableVoting
    this.nonQuietVotingPeriod = Math.max(
      this.taoVoting.voteDuration - this.taoVoting.quietEndingPeriod,
      0
    )
  }

  public async getTokenPrice(id: string): Promise<number> {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
    )
    const tokenPrice = await response.json()
    return tokenPrice.aragon.usd
  }

  public async getData() {
    function addQuietEndingExtension(initialValue: number, times = 1): number {
      return initialValue + times * taoVotingInput.quietEndingExtension
    }

    const taoVotingInput = this.taoVoting
    const votingParams = {
      supportRequired: taoVotingInput.supportRequired,
      minimumQuorum: taoVotingInput.minimumQuorum,
    }

    const barChartItems = {
      totalProposalProcess: {
        nonQuietVotingPeriod: this.nonQuietVotingPeriod,
        quietEndingPeriod: taoVotingInput.quietEndingPeriod,
        executionDelay: taoVotingInput.executionDelay,
      },
      delegatedVoting: {
        delegatedVotingPeriod: this.taoVoting.delegatedVotingPeriod,
      },
      proposalProcessWithExtension: {
        voteDuration: taoVotingInput.voteDuration,
        quietEndingExtension: taoVotingInput.quietEndingExtension,
        executionDelay: taoVotingInput.executionDelay,
      },
    }

    const tokenPrice = await this.getTokenPrice('aragon')
    const disputableVoting = {
      proposalDeposit: {
        token: this.disputableVoting.proposalDeposit,
        valueUsd: this.disputableVoting.proposalDeposit * tokenPrice,
      },
      challengeDeposit: {
        token: this.disputableVoting.challengeDeposit,
        valueUsd: this.disputableVoting.challengeDeposit * tokenPrice,
      },
      setlementPeriod: this.disputableVoting.settlementPeriod,
    }

    const executeTime =
      taoVotingInput.voteDuration + taoVotingInput.executionDelay
    const reviewTime =
      taoVotingInput.voteDuration - taoVotingInput.delegatedVotingPeriod
    const voteTime = taoVotingInput.voteDuration

    const timelineData = {
      timeVote: {
        noExtension: voteTime,
        oneExtension: addQuietEndingExtension(voteTime),
        twoExtensions: addQuietEndingExtension(voteTime, 2),
      },
      timeReview: {
        noExtension: reviewTime,
        oneExtension: addQuietEndingExtension(reviewTime),
        twoExtensions: addQuietEndingExtension(reviewTime, 2),
      },
      timeExecute: {
        noExtension: executeTime,
        oneExtension: addQuietEndingExtension(executeTime),
        twoExtensions: addQuietEndingExtension(executeTime, 2),
      },
    }

    const outputData = {
      votingParams: votingParams,
      taoVoting: barChartItems,
      disputableVoting: disputableVoting,
      timelineData: timelineData,
    }
    return outputData
  }
}
