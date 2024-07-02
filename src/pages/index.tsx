import React, { useEffect, useRef } from 'react'
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
import { Blog, PageMenu, PageMenuLinks } from '../models'
import { formatBlogPosts } from '../utils/blogPostService'

const useStyles = makeStyles((theme) => ({
   ...sharedStyles(theme),
}))

const IndexPage = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const sessions = data.sessions.nodes
      .slice(0, 6)
      .map((video) => formatVideo(video))
   const blogPosts: Blog[] = data.blogPosts.nodes.map((x) => formatBlogPosts(x))
   const menuItems: PageMenuLinks = {
      home: { title: 'Home', target: '#welcome', scrollTo: smoothScrollTo },
      profile: {
         title: 'Profile',
         target: '#profile',
         scrollTo: smoothScrollTo,
      },
      resume: { title: 'Resume', target: '#resume', scrollTo: smoothScrollTo },
      podcasts: {
         title: 'Podcasts',
         target: '#podcast',
         scrollTo: smoothScrollTo,
      },
      devGroup: {
         title: 'Dev Group',
         target: '#devGroup',
         scrollTo: smoothScrollTo,
      },
      blog: { title: 'Blog', target: '#blog' },
      uses: { title: 'Uses', target: '/uses' },
   }
   const navMenu: PageMenu = {
      links: menuItems,
   }

   const refs = {
      welcome: useRef(null),
      profile: useRef(null),
      skills: useRef(null),
      resume: useRef(null),
      podcast: useRef(null),
      devGroup: useRef(null),
      blog: useRef(null),
   }

   //-- scroll to hashtag
   useEffect(() => {
      setTimeout(() => {
         if (location.hash && document) {
            const target = location.hash.replace('#', '')
            smoothScrollTo(target)
         }
      })
   })

   function smoothScrollTo(target: string) {
      const ref = refs[target]
      if (ref) {
         window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
         })
      }
   }

   return (
      <Layout>
         <SEO title="Andre Young" />
         <MobileNav menu={navMenu} active="home" />
         <a id="welcome" ref={refs['welcome']}></a>
         <Welcome />
         <Nav menu={navMenu} active="home" />
         <a id="profile" ref={refs['profile']}></a>
         <Profile />
         <a id="work" ref={refs['work']}></a>
         <LatestWork />
         <a id="resume" ref={refs['resume']}></a>
         <Resume />
         <a id="podcast" ref={refs['podcast']}></a>
         <PodcastsPreview />
         <a id="devGroup" ref={refs['devGroup']}></a>
         <DevGroupPreview sessions={sessions} />
         <a id="blog" ref={refs['blog']}></a>
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
               summary
               tags
            }
            html
            body
         }
      }
   }
`
