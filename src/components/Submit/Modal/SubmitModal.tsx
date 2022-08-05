import { Dialog } from '@headlessui/react'
import { useSubmit } from '../../../hooks/useSubmit'

export function MyDialog() {
  const { dialog, setDialog, url } = useSubmit()
  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <h2 className="font-bold text-xl text-center py-6 px-4">
            Congratulations!
          </h2>
          <div className=" px-16 text-center">
            Your proposal was created successfully!
          </div>
          <a href={url} target="_blank" rel="noreferrer">
            <button className="h-14 px-6 mx-auto outline-none	hover:bg-neon-light-600 disabled:opacity-50 disabled:bg-gray-400 disabled:text-gray-300 w-full">
              <span className="font-bold text-lg uppercase cursor-pointer">
                view your proposal
              </span>
            </button>
          </a>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
