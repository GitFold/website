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
        <p>Community driven bioinformatics</p>
        <p>
          (Currently under consturction, Launching 2022{' '}
          <a href="https://twitter.com/GitFold">stay updated via our Twitter</a>.)
        </p>
      </section>
    </Layout>
  )
}