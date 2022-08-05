import classnames from 'classnames'
import { useParams } from '../../hooks/useParams'

export function SubmitForm() {
  const { handleChange, proposalTitle, proposalDescription } = useParams()
  const inputs = [
    {
      title: 'Submission Title',
      name: 'proposalTitle',
      placeholder: 'Pick a good title for your submission...',
      value: proposalTitle,
      height: 'h-10',
    },
    {
      title: 'Your strategy',
      name: 'proposalDescription',
      placeholder:
        'Explain the big picture of your Configuration.. don’t forget to mention if your proposal is a fork of another...',
      value: proposalDescription,
      height: 'h-32',
    },
  ]

  return (
    <div className="w-full bg-blue-0 bg-form bg-no-repeat bg-right pl-44 pb-20 mt-14">
      {inputs.map((input) => {
        return (
          <div className="pt-14" key={input.title}>
            <h1 className="text-gray text-[22px] font-semibold mb-6">
              {input.title}
            </h1>
            <textarea
              className={classnames(
                'font-over font-light placeholder:text-gray-200 w-[600px] px-5 py-[10px] rounded bg-white border border-gray-100 outline-none resize-none',
                input.height
              )}
              placeholder={input.placeholder}
              name={input.name}
              value={input.value}
              onChange={handleChange}
            />
          </div>
        )
      })}
    </div>
  )
}
