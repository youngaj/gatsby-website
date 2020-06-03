// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { getPodcasts } from '../utils/podcastService'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import Podcast from '../components/podcast'

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

   const [podcastData, setData] = useState({ queue: [], podcasts: [] })
   useEffect(() => {
      getPodcasts().then((data) => {
         setData({ ...data })
      })
   }, [])

   return (
      <Layout>
         <Nav></Nav>
         <h1>Podcasts</h1>
         <div className={css.container}>
            {podcastData.podcasts.sort(podcastSort).map((show, index) => (
               <Podcast data={show} key={`episode-${show.title}-${index}`} />
            ))}
         </div>
      </Layout>
   )
}

export default PodcastPage
