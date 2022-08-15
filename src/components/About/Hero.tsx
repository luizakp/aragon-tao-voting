import { BulletPoint } from './BulletPoint'
import { AboutCard } from './Card'
import { bulletsContent, cards, links } from './HeroContent'
import externalLink from '../../../public/images/externalLink.svg'
import Image from 'next/image'

export function AboutHero() {
  return (
    <div className="bg-gray-50 bg-about bg-no-repeat bg-cover flex flex-col h-full px-10 lg:px-40 xl:px-64">
      <h1 className="text-gray text-5xl font-semibold flex flex-col mt-10 md:mt-32 leading-[65px]">
        <span>Getting familiar with</span>
        <span>the Tao configuration</span>
      </h1>
      <p className="flex flex-col mt-10 mb-16 text-3xl text-gray-400 leading-10">
        <span>As your DAO evolves so should its configuration.</span>
        <span>Parameters within the different components will be able</span>
        <span>to be modified after they have been implemented.</span>
      </p>
      <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10 mb-20 md:mb-40">
        {cards.map((card) => {
          return (
            <AboutCard
              key={card.title}
              title={card.title}
              content={card.content}
            />
          )
        })}
      </div>
      <BulletPoint
        key={bulletsContent[0].title}
        title={bulletsContent[0].title}
        bullets={bulletsContent[0].bullets}
      />
      <div className="text-[22px] text-gray leading-7 grid gap-y-7 mt-12 mb-20">
        <p>
          Since there is only one set of voting parameters for all DAO
          components, strong thresholds for passing proposals in Tao Voting are
          critical to ensure the DAO architecture remains uncompromised.
        </p>
        <p>
          Tao Voting is an upgraded version of{' '}
          <a
            href={
              'https://documentation.aragon.org/products/aragon-client/explore-template-dao/what-are-apps/voting-app'
            }
            target="_blank"
            rel="noreferrer"
            className="hover: cursor-pointer text-blue"
          >
            Voting App
          </a>{' '}
          with familiar parameters such as Support Required, Minimum Quorum, and
          Vote Duration.
        </p>
        <p>
          Tao Voting also comes with two new concepts: Delegation and Quiet
          Ending.
        </p>
      </div>
      <BulletPoint
        key={bulletsContent[1].title}
        title={bulletsContent[1].title}
        bullets={bulletsContent[1].bullets}
      />
      <div className="mt-10 md:mt-[120px]">
        <h2 className="text-gray text-3xl font-semibold">
          If you need more information please check the links below.
        </h2>
        <div className="mt-10 grid gap-y-2 mb-20 md:mb-56">
          {links.map((link) => {
            return (
              <div key={link.url} className="flex items-center text-blue">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[22px] hover:underline cursor-pointer pr-3"
                >
                  {link.label}
                </a>
                <Image
                  src={externalLink}
                  alt="Link"
                  className="cursor-pointer"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
