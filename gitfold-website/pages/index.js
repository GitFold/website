import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headingLg}>Community driven bioinformatics</p>
        <p>
          Launching 2022
        </p>
        <p>
          stay updated via our <a href="https://twitter.com/GitFold">Twitter</a>.
        </p>
      </section>
    </Layout>
  )
}