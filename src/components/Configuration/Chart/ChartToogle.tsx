import { Switch } from '@headlessui/react'
import classnames from 'classnames'
import { useTaoVoting } from '../../../hooks/useTaoVoting'

export function ChartToogle() {
  const { isChartOpen, setIsChartOpen } = useTaoVoting()
  return (
    <div className="flex w-full justify-center mb-8">
      <p className="px-3 font-semibold">Open chart view</p>
      <Switch
        checked={isChartOpen}
        onChange={setIsChartOpen}
        className={classnames(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out',
          isChartOpen ? 'bg-blue' : 'bg-gray-200'
        )}
      >
        <span
          className={classnames(
            'inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out',
            isChartOpen ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </Switch>
    </div>
  )
}
