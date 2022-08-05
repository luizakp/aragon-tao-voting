import React from 'react'
import { Bar } from 'react-chartjs-2'
import ChartAxisLabel from './ChartAxisLabel'
import ChartLegend from './ChartLegend'

const barChartLegend = [
  {
    name: 'non-quiet voting period',
    bgColor: 'bg-purple-100',
    tooltipText:
      'The initial portion of the Vote Duration that will NOT trigger the Quiet Ending Extension',
  },
  {
    name: 'delegated voting period',
    bgColor: 'bg-purple-600',
    tooltipText:
      'The amount of time delegates are permitted to vote on a proposal.',
  },
  {
    name: 'quiet ending period',
    bgColor: 'bg-purple-400',
    tooltipText:
      'If the voting outcome changes during this time the Quiet Ending Extension will trigger, extending the Vote Duration.',
  },
  {
    name: 'quiet ending extension',
    bgColor: 'bg-cyan-200',
    tooltipText:
      'The amount of time added to the Vote Duration resulting from the vote outcome changing during the Quiet Ending.',
  },
  {
    name: 'execution delay',
    bgColor: 'bg-cyan-300',
    tooltipText:
      'The amount of time after a vote passes before the proposed action is executed',
  },
  {
    name: 'normal vote duration',
    bgColor: 'bg-cyan-50',
    tooltipText: 'The amount of time a proposal is eligible to be voted on.',
  },
]

const options = {
  responsive: true,
  aspectRatio: 2,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    y: {
      stacked: true,
      barThickness: 0.5,
      grid: {
        display: false,
        borderColor: '#546992',
      },
      ticks: {
        color: '#1B1E2A',
        beginAtZero: true,
        textStrokeWidth: 100,
        padding: 15,
      },
    },

    xAxes: {
      stacked: true,
      barThickness: 100,
      grid: {
        display: false,
        borderColor: '#546992',
      },
      ticks: {
        font: {
          size: 10,
          family: 'Overpass',
          weight: 600,
        },
        color: '#1B1E2A',
      },
    },
  },
}

interface TaoVotingBarProps {
  nonQuietVotingPeriod: number
  quietEndingPeriod: number
  executionDelay: number
  delegatedVotingPeriod: number
  voteDuration: number
  quietEndingPeriodWithExtension: number
  executionDelayWithExtension: number
}

function TaoVotingBar({
  nonQuietVotingPeriod,
  quietEndingPeriod,
  executionDelay,
  delegatedVotingPeriod,
  voteDuration,
  quietEndingPeriodWithExtension,
  executionDelayWithExtension,
}: TaoVotingBarProps) {
  const data = {
    labels: [[], [], []],
    datasets: [
      {
        label: 'First bar',
        data: [nonQuietVotingPeriod, delegatedVotingPeriod, voteDuration],
        backgroundColor: ['#C9BEF1', '#4724D6', '#95ECFF'],
        borderWidth: 1,
        barThickness: 46,
      },
      {
        label: 'Second bar',
        data: [quietEndingPeriod, 0, quietEndingPeriodWithExtension],
        backgroundColor: ['#7D80EB', '', '#08BEE5'],
        borderWidth: 1,
        barThickness: 46,
      },
      {
        label: 'Third bar',
        data: [executionDelay, 0, executionDelayWithExtension],
        backgroundColor: ['#0792AF', '', '#0792AF'],
        borderWidth: 1,
        barThickness: 46,
      },
    ],
  }

  return (
    <div className="w-3/4 bg-gray-50" id="tao-chart">
      <div className="px-9 pb-6 flex">
        <div className="flex flex-col justify-between text-center pt-14 pb-24 w-20">
          <ChartAxisLabel label="Voting Process" />
          <ChartAxisLabel label="Delegated voting" />
          <ChartAxisLabel label="Voting Process with an Extension" />
        </div>
        <div className="w-full flex">
          <div className="w-9/12 mb-8">
            <Bar data={data} options={options} height={140} />
          </div>
          <div className="self-end mb-8 ml-3">
            <ChartAxisLabel
              label="time (days)"
              tooltipText="The amount of time allocated to each phase of the voting process."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col text-gray pl-14 pb-6">
        {barChartLegend.map((legend, index) => (
          <ChartLegend
            key={index}
            name={legend.name}
            bgColor={legend.bgColor}
            tooltipText={legend.tooltipText}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(TaoVotingBar)
