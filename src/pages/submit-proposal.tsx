import { Header } from '../components/Header'
import { SubmitForm } from '../components/Submit/Banner'
import { Buttons } from '../components/Submit/Buttons'
import { SubmitHero } from '../components/Submit/Hero'
import { MyDialog } from '../components/Submit/Modal/SubmitModal'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useSubmit } from '../hooks/useSubmit'

export default function SubmitProposal() {
  const { error } = useSubmit()
  useEffect(() => {
    if (error === true) {
      toast('Something went wrong!', {
        duration: 3000,
        position: 'bottom-center',
        style: {
          background: '#3164FA',
          color: '#ffff',
        },
        className: 'font-over font-bold',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
    }
  }, [error])

  return (
    <div className="bg-gray-50 bg-config bg-no-repeat bg-top">
      <Header />
      <MyDialog />
      <SubmitHero />
      <SubmitForm />
      <Buttons />
      <Toaster />
    </div>
  )
}
