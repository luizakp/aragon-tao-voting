import { Voting } from '../components/Configuration/Voting'
import { Header } from '../components/Header'
import { PageAnimation } from '../components/PageAnimation'

export default function Configuration() {
  return (
    <div className="bg-gray-50 bg-config bg-no-repeat bg-top">
      <Header />
      <PageAnimation>
        <Voting />
      </PageAnimation>
    </div>
  )
}
