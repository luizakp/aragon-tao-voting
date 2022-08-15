import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createSwaggerSpec } from 'next-swagger-doc'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false })

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />
}

export const getStaticProps: GetStaticProps = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/pages/api',
    schemaFolders: ['src/models'],
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Aragon Tao Voting',
        description:
          'Tao Voting is the voting process by which the DAO can modify its economic and governance settings.',
        version: '1.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Local develpment server',
        },
        {
          url: 'https://aragon-tao-voting-api.vercel.app/',
          description: 'Testing server',
        },
      ],
    },
  })

  return {
    props: {
      spec,
    },
  }
}

export default ApiDoc
