import { useParams } from '../../../hooks/useParams'
import Input from './Input'

interface inputType {
  name: string
  value: number
  param: string
  link: string
  placeholder: string
  tooltipText: string
  interval?: { min?: number; max?: number }
}

interface ParamsProps {
  title: string
  inputParams: inputType[]
}

export function Params({ title, inputParams }: ParamsProps) {
  const { handleChange } = useParams()
  return (
    <div className="h-full pt-9">
      <h3 className="font-semibold text-gray mb-4 uppercase">{title}</h3>
      <div className="grid gap-y-4">
        {inputParams.map((input) => (
          <Input
            key={input.name}
            min={input.interval?.min}
            max={input.interval?.max}
            name={input.name}
            value={input.value}
            param={input.param}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(event)
            }
            placeholder={input.placeholder}
            tooltipText={input.tooltipText}
            link={input.link}
          />
        ))}
      </div>
    </div>
  )
}
