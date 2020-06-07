import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Hello from '../components/hello'
import LatestWork from '../components/LatestWork'
import Resume from '../components/resume'
import PodcastQueue from '../components/podcastQueue'
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
         <a name="home"></a>
         <Hero name="hero" />

         <div className={css.sticky}>
            <Nav />
         </div>
         <a name="profile"></a>
         <Hello />
         <a name="skills"></a>
         <LatestWork />
         <a name="resume"></a>
         <Resume />
         <a name="podcast"></a>
         <PodcastQueue name="queue" />
      </Layout>
   )
}

export default IndexPage
