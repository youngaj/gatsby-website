import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Hello from '../components/hello'
import LatestWork from '../components/LatestWork'
import WorkHistory from '../components/workHistory'

const IndexPage = () => (
   <Layout>
      <SEO title="Home" />
      <Hero />
      <Nav />
      <Hello />
      <LatestWork />
      <WorkHistory />
      <Link to="/page-2/">Go to page 2</Link>
   </Layout>
)

export default IndexPage
