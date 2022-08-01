import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ParamsProvider } from '../hooks/useParams'
import { TaoVotingProvider } from '../hooks/useTaoVoting'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParamsProvider>
      <TaoVotingProvider>
        <Head>
          <title>Aragon Tao Voting</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </TaoVotingProvider>
    </ParamsProvider>
  )
}

export default MyApp
