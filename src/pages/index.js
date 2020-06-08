import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Hello from '../components/hello'
import LatestWork from '../components/LatestWork'
import Resume from '../components/resume'
import PodcastQueue from '../components/podcastQueue'
import DevGroupPreview from '../components/preview/devGroup'
import { sharedStyles } from '../styles/global'

const useStyles = makeStyles((theme) => ({
   ...sharedStyles(theme),
   sticky: {
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0,
   },
}))

const IndexPage = () => {
   const theme = useTheme()
   const css = useStyles(theme)

   return (
      <Layout>
         <SEO />
         <span name="home"></span>
         <Hero />
         <div className={css.sticky}>
            <Nav />
         </div>
         <span name="profile"></span>
         <Hello />
         <span name="skills"></span>
         <LatestWork />
         <span name="resume"></span>
         <Resume />
         <span name="podcast"></span>
         <PodcastQueue />
         <span name="devGroup"></span>
         <DevGroupPreview />
      </Layout>
   )
}

export default IndexPage
