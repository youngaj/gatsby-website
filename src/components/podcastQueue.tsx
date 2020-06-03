import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import sharedStyles, { colors } from '../styles/global'
import SubHeading from './presntation/subHeading'
import CenterDivider from './presntation/centerDivider'
import SiteSection from './presntation/siteSection'
import { getPodcasts } from '../utils/podcastService'
import StyledButton from './styledButton'
import info from '../data/info'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr',
   },
   episode: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gridGap: theme.spacing(2),
      border: `1px solid ${colors.muted}`,
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
   },
}))

const PodcastQueue = () => {
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
      <SiteSection>
         <h2>
            <SubHeading>What's in my podcast queue?</SubHeading>
         </h2>
         <p className={css.mutedText}>
            I subscribe to {podcastData.podcasts.length} podcasts. Podcasts are
            a great way to keep up with the latest around the industry. They are
            also a great way not to go insane duing long commutes. Below is a
            list of what's currently in my queue. Follow along and/or send me
            suggestions <a href={twitter.link}>{twitter.username}</a>
         </p>
         <span>
            <CenterDivider />
         </span>
         <div className={css.container}>
            {podcastData.queue.map((episode, index) => (
               <div
                  key={`episode-${episode.title}-${index}`}
                  className={css.episode}
               >
                  <div>
                     <img
                        src={`https://static.pocketcasts.com/discover/images/130/${episode.podcast}.jpg`}
                        alt="{episode.title}"
                     />
                  </div>
                  <div>
                     <a href={episode.url}>{episode.title}</a>
                  </div>
               </div>
            ))}
         </div>
         <div>
            <Link to="/podcasts">
               <StyledButton>See All Podcasts</StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default PodcastQueue
