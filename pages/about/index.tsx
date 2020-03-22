import Head from 'next/head'
import useSWR from 'swr';
import { fetcher } from '../../shared/fetcher';
import Nav from '../../shared/components/Nav'
import about from '../../shared/controllers/about'

export async function getServerSideProps () {
  /*
    Do not use the fetcher here.
    Loopback SSR calls aren't supported.
   */
  const data = await about()
  return { props: { data } }
}

const About = (props) => {

  const initialData = props.data
  const { data } = useSWR('/api/about', fetcher, { initialData })

  if (!data) {
    return <div>Loading</div>
  }

  return (
    <div className="container">
      <Head>
        <title>Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <h1 className="title">
          About
        </h1>

        <p className="description">
          Loaded from server: {data.about}
        </p>
      </main>
    </div>
  )
}

export default About
