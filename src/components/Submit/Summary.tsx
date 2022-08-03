import { SubmitCard, SubmitCardProps } from './Card'

export interface SubmitSumarryProps {
  title: string
  cards: SubmitCardProps[]
}

export function SubmitSummary({ title, cards }: SubmitSumarryProps) {
  return (
    <div className="w-full pt-10">
      <h3 className="uppercase font-semibold text-gray">{title}</h3>
      <div className="grid grid-cols-5 gap-10 mt-9">
        {cards.map((card) => {
          return (
            <SubmitCard
              key={card.title}
              title={card.title}
              label={card.label}
              value={card.value}
            />
          )
        })}
      </div>
    </div>
  )
}
