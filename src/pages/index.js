import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Hello from '../components/hello'

const IndexPage = () => (
   <Layout>
      <SEO title="Home" />
      <div>
         <Hero />
      </div>
      <div>
         <Hello />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
   </Layout>
)

export default IndexPage
