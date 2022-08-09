import { AboutBanner } from '../components/About/Banner'
import { AboutFooterBanner } from '../components/About/FooterBanner'
import { AboutHero } from '../components/About/Hero'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PageAnimation } from '../components/PageAnimation'

export default function About() {
  return (
    <>
      <Header />
      <PageAnimation>
        <AboutBanner />
        <AboutHero />
        <AboutFooterBanner />
        <div className="lg:h-44 bg-gray-50 flex">
          <Footer />
        </div>
      </PageAnimation>
    </>
  )
}
