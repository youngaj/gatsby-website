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
import DevGroupPreview from '../components/preview/devGroupPreview'
import { sharedStyles } from '../styles/global'
import { formatVideo } from '../utils/devGroupService'

const useStyles = makeStyles((theme) => ({
   ...sharedStyles(theme),
}))

const IndexPage = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const sessions = data.sessions.nodes.map((video) => formatVideo(video))
   const menuItems = {
      home: { title: 'Home', target: '#home' },
      profile: { title: 'Profile', target: '#profile' },
      services: { title: 'Services', target: '#services' },
      resume: { title: 'Resume', target: '#resume' },
      podcasts: { title: 'Podcasts', target: '#podcastQueue' },
      skilss: { title: 'Skills', target: '#skills' },
      devGroup: { title: 'Dev Group', target: '#devGroup' },
      contact: { title: 'Contact', target: '#contact' },
   }

   return (
      <Layout>
         <SEO />
         <span name="home"></span>
         <Hero />
         <Nav links={menuItems} />
         <span name="profile"></span>
         <Hello />
         <span name="skills"></span>
         <LatestWork />
         <span name="resume"></span>
         <Resume />
         <span name="podcastQueue"></span>
         <PodcastQueue />
         <span name="devGroup"></span>
         <DevGroupPreview sessions={sessions} />
      </Layout>
   )
}

export default IndexPage

export const pageQuery = graphql`
   query IndexQuery {
      sessions: allDevGroupSession(sort: { order: DESC, fields: publishedAt }) {
         nodes {
            id
            link
            title
            description
            thumbnails {
               default {
                  url
               }
               high {
                  url
               }
               medium {
                  url
               }
            }
            publishedAt(formatString: "MMMM D, YYYY")
         }
      }
   }
`
