// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { getPodcasts } from '../utils/podcastService'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import Podcast from '../components/podcast'
import SiteSection from '../components/presntation/siteSection'
import { info } from '../data/info'
import SubHeading from '../components/presntation/subHeading'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr',
      margin: theme.spacing(4),
   },
}))

const podcastSort = (a, b) => {
   return (
      Date.parse(b.lastEpisodePublished) - Date.parse(a.lastEpisodePublished)
   )
}

const PodcastPage = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const twitter = info.me.social.find((x) => x.name === 'Twitter')

   const [podcastData, setData] = useState({ queue: [], podcasts: [] })
   useEffect(() => {
      getPodcasts().then((data) => {
         setData({ ...data })
      })
   }, [])

   return (
      <Layout>
         <Nav active="podcasts"></Nav>
         <SiteSection bg="dark">
            <SubHeading>Podcasts</SubHeading>
            <p className={css.mutedText}>
               I subscribe to {podcastData.podcasts.length} podcasts. Podcasts
               are a great way to keep up with the latest around the industry.
               They are also a great way not to go insane duing long commutes.
               Below is a list of the podcasts I currently subscribe to. Follow
               along and/or send me suggestions{' '}
               <a href={twitter.link}>{twitter.username}</a>
            </p>
            <div className={css.container}>
               {podcastData.podcasts.sort(podcastSort).map((show, index) => (
                  <Podcast data={show} key={`episode-${show.title}-${index}`} />
               ))}
            </div>
         </SiteSection>
      </Layout>
   )
}

export default PodcastPage
