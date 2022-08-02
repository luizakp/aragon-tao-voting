import classnames from 'classnames'
import useHover from '../../../hooks/useHover'
import { Tooltip } from '../Tooltip'

interface ChartLegendProps {
  name: string
  bgColor?: string
  tooltipText?: string
}

function ChartLegend({ name, bgColor, tooltipText }: ChartLegendProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()

  return (
    <div className="flex p-2 my-2">
      <Tooltip text={tooltipText} isHovered={isHovered}>
        <div className={classnames('h-4 w-4 mr-4', bgColor)} />
        <span
          ref={hoverRef}
          className="font-over font-bold uppercase text-[10px] text-gray"
        >
          {name}
        </span>
      </Tooltip>
    </div>
  )
}

export default ChartLegend
