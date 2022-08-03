import { Header } from '../components/Header'
import { SubmitForm } from '../components/Submit/Banner'
import { Buttons } from '../components/Submit/Buttons'
import { SubmitHero } from '../components/Submit/Hero'

export default function SubmitProposal() {
  return (
    <div className="bg-gray-50 bg-config bg-no-repeat bg-top">
      <Header />
      <SubmitHero />
      <SubmitForm />
      <Buttons />
    </div>
  )
}
