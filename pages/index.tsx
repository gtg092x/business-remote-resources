import Head from 'next/head'
import useSWR from 'swr';
import { fetcher } from '../shared/fetcher';
import Nav from '../shared/components/Nav';
import index from '../shared/controllers';

export async function getServerSideProps () {
  /*
    Do not use the fetcher here.
    Loopback SSR calls aren't supported.
   */
  const data = await index()
  return { props: { data } }
}

const Home = (props) => {

  const initialData = props.data
  const { data } = useSWR('/api', fetcher, { initialData })

  if (!data) {
    return <div>Loading</div>
  }

  return (
    <div className="container">
      <Head>
        <title>Sample Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <h1 className="title">
          Index {data.name}
        </h1>

        <p className="description">
        </p>
      </main>
    </div>
  )
}

export default Home
