import { Switch } from "@headlessui/react";
import { useTaoVoting } from "../../../hooks/useTaoVoting";

export function ChartToogle(){
    const { isChartOpen, setIsChartOpen } = useTaoVoting()
    return (
        <div className="flex w-full justify-center">
            <p>Open chart view</p>
            <Switch
            checked={isChartOpen}
            onChange={setIsChartOpen}
            className={`${
            isChartOpen ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable notifications</span>
            <span
            className={`${
                isChartOpen ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white`}
            />
        </Switch>
        </div>
    )
}