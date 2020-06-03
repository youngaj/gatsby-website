import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Hello from '../components/hello'
import LatestWork from '../components/LatestWork'
import Resume from '../components/resume'
import PodcastQueue from '../components/podcastQueue'

const IndexPage = () => (
   <Layout>
      <SEO title="Home" />
      <Hero />
      <Nav />
      <Hello />
      <LatestWork />
      <Resume />
      <PodcastQueue />
      <Link to="/page-2/">Go to page 2</Link>
   </Layout>
)

export default IndexPage
