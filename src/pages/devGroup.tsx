import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles } from '../styles/global'
import SiteSection from '../components/presntation/siteSection'
import SubHeading from '../components/presntation/subHeading'
import CenterDivider from '../components/presntation/centerDivider'
import { getVideos, formatVideo } from '../utils/devGroupService'
import { graphql } from 'gatsby'
import DevGroupSession from '../components/devGroupSession'
import Nav from '../components/nav'
import Layout from '../components/layout'
import { Video } from '../types/video'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
      },
   },
}))

const DevGroup = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const initialState = data.sessions.nodes.map((x: Video) => formatVideo(x))
   const [videos, setVideos] = useState(initialState)
   useEffect(() => {
      getVideos().then((data) => {
         setVideos(data)
      })
   }, [])

   const links = {
      home: { title: 'Home', target: '/' },
      profile: { title: 'Profile', target: '/#profile' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/#podcastQueue' },
      devGroup: { title: 'Dev Group', target: '/#devGroup' },
      blog: { title: 'Blog', target: '/#blog' },
   }

   return (
      <Layout>
         <Nav active="devGroup" links={links} />
         <SiteSection bg="dark">
            <h2>
               <SubHeading>Dev Group Sessions</SubHeading>
            </h2>
            <p className={css.mutedText}>
               Attending developer meet ups are a great way of expanding your
               knowledge and skills. But many of us have family and other
               obligations outside of work so I created and hosted a bi-weekly
               NASA wide developer group that ran for over 8 years. Below are an
               excert from those sessions.
            </p>
            <span>
               <CenterDivider />
            </span>
            <div className={css.container}>
               {videos.map((session, index) => (
                  <DevGroupSession session={session} />
               ))}
            </div>
         </SiteSection>
      </Layout>
   )
}

export default DevGroup

export const pageQuery = graphql`
   query SessionQuery {
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
