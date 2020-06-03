// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps, Link } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { getPodcasts } from '../utils/podcastService'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import sharedStyles from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr',
   },
   podcastBlock: {
      gridGap: theme.spacing(2),
      border: `1px solid ${theme.palette.primary.main}`,
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
   },
}))

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
            {podcastData.podcasts.map((show, index) => (
               <div
                  key={`episode-${show.title}-${index}`}
                  className={css.podcastBlock}
               >
                  <div>
                     <img
                        src={`https://static.pocketcasts.com/discover/images/130/${show.uuid}.jpg`}
                        alt="{show.title}"
                     />
                  </div>
                  <div>
                     <a href={show.url}>{show.title}</a>
                  </div>
                  <div>{show.description}</div>
               </div>
            ))}
         </div>
      </Layout>
   )
}

export default PodcastPage
