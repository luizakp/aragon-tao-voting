import Image from 'next/image'
import classnames from 'classnames'
import { Tooltip } from './Tooltip'
import useHover from '../../hooks/useHover'
import { useParams } from '../../hooks/useParams'

interface InputProps {
  children?: React.ReactNode
  formatNumber?: boolean
  min: number | undefined
  max: number | undefined
  name: string
  param: string
  placeholder: string
  options?: { [key: string]: string }[]
  select?: boolean
  tooltipText?: string
  link?: string
  value: string | number
  isNumber?: boolean
  changeParam?(): void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  formatNumber,
  min,
  max,
  name,
  param,
  placeholder,
  isNumber = true,
  tooltipText,
  value,
  link,
  changeParam,
  onChange,
}: InputProps) {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  const error =
    (min ? min > Number(value) : false) || (max ? max < Number(value) : false)
  const { setParams } = useParams()

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value)
    const cleanNum = num.toFixed(2)
    setParams((previousParams) => ({
      ...previousParams,
      [e.target.name]: cleanNum,
    }))
  }

  return (
    <div className="py-1">
      <div className="self-center">
        <Tooltip text={tooltipText} isHovered={isHovered}>
          <div className="flex flex-col justify-center">
            <a href={link} target="_blank" rel="noreferrer">
              <span ref={hoverRef} className="flex items-center">
                <p className="text-gray-300 cursor-pointer font-light font-over mr-2 hover:text-blue hover:underline">
                  {param}
                </p>
                <Image
                  src="/images/questionMark.svg"
                  alt="question mark"
                  height={20}
                  width={20}
                />
              </span>
            </a>
          </div>
        </Tooltip>
      </div>
      <div className="relative h-12 mt-2">
        <input
          type={isNumber ? 'number' : 'text'}
          min={min}
          max={max}
          name={name}
          value={value || ''}
          onClick={changeParam}
          onChange={onChange}
          onBlur={formatNumber ? handleBlur : undefined}
          className={classnames(
            'font-bold text-xl w-full h-full pl-3 border rounded bg-transparent outline-none',
            error ? 'border-red-500' : 'border-gray-100'
          )}
        />
        <div className="absolute right-3 top-2/4 transform -translate-y-2/4">
          <span className="font-over text-gray-200">{placeholder}</span>
        </div>
      </div>
    </div>
  )
}

export default Input
