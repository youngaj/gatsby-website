import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Welcome from '../components/welcome'
import Nav from '../components/nav'
import Profile from '../components/profile'
import LatestWork from '../components/LatestWork'
import Resume from '../components/resume'
import PodcastsPreview from '../components/preview/PodcastsPreview'
import DevGroupPreview from '../components/preview/devGroupPreview'
import BlogPreview from '../components/preview/blogPreview'
import { sharedStyles } from '../styles/global'
import { formatVideo } from '../utils/devGroupService'
import { graphql } from 'gatsby'
import MobileNav from '../components/mobileNav'

const useStyles = makeStyles((theme) => ({
   ...sharedStyles(theme),
}))

const IndexPage = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const sessions = data.sessions.nodes
      .slice(0, 6)
      .map((video) => formatVideo(video))
   const blogPosts = data.blogPosts.nodes
   const menuItems = {
      home: { title: 'Home', target: '#home' },
      profile: { title: 'Profile', target: '#profile' },
      resume: { title: 'Resume', target: '#resume' },
      podcasts: { title: 'Podcasts', target: '#podcastQueue' },
      devGroup: { title: 'Dev Group', target: '#devGroup' },
      blog: { title: 'Blog', target: '#blog' },
      uses: { title: 'Uses', target: '/uses' },
   }

   return (
      <Layout>
         <SEO />
         <MobileNav links={menuItems} />
         <a id="home"></a>
         <Welcome />
         <Nav links={menuItems} />
         <a id="profile" name="profile"></a>
         <Profile />
         <a id="skills"></a>
         <LatestWork />
         <a id="resume" name="resume"></a>
         <Resume />
         <a id="podcastQueue" name="podcastQueue"></a>
         <PodcastsPreview />
         <a id="devGroup" name="devGroup"></a>
         <DevGroupPreview sessions={sessions} />
         <a id="blog" name="blog"></a>
         <BlogPreview posts={blogPosts} />
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
      blogPosts: allMdx {
         nodes {
            frontmatter {
               title
               slug
               date
               publish
            }
            html
            body
         }
      }
   }
`
