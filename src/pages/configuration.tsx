import { Voting } from '../components/configuration/Voting'
import { Header } from '../components/Header'
import { PageAnimation } from '../components/PageAnimation'

export default function Configuration() {
  return (
    <div className="bg-gray-50 bg-config bg-no-repeat bg-cover">
      <Header />
      <PageAnimation>
        <Voting />
      </PageAnimation>
    </div>
  )
}
