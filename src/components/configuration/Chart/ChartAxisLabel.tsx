import classnames from 'classnames'
import useHover from '../../../hooks/useHover'
import { Tooltip } from '../Tooltip'

type Position = 'top' | 'right' | 'bottom' | 'left'
interface ChartAxisLabelProps {
  label: string | React.ReactNode
  rotate?: boolean
  tooltipPosition?: Position
  tooltipText?: string
}

function ChartAxisLabel({ label, rotate, tooltipText }: ChartAxisLabelProps) {
  const [hoverRef, isHovered] = useHover<HTMLElement>()

  return (
    <Tooltip text={tooltipText} isHovered={isHovered}>
      <span
        ref={hoverRef}
        className={classnames(
          'font-bj font-bold text-xxs text-neon-light uppercase',
          rotate &&
            'block transform -rotate-90 w-56 text-center pt-2 tablet:pt-10 laptop:pt-18 desktop:pt-28'
        )}
      >
        {label}
      </span>
    </Tooltip>
  )
}

export default ChartAxisLabel
