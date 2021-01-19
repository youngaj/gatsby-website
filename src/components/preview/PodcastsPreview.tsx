import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles, colors } from '../../styles/global'
import SubHeading from '../presntation/subHeading'
import CenterDivider from '../presntation/centerDivider'
import SiteSection from '../presntation/siteSection'
import { getPodcastInfo, getShoweNotes } from '../../utils/podcastService'
import StyledButton from '../styledButton'
import { info } from '../../data/info'
import { Link } from 'gatsby'
import { useGlobalCss } from "../../utils/useGlobalCss";

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

const PodcastsPreview = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const globalCss = useGlobalCss()
   const twitter = info.me.social.find((x) => x.name === 'Twitter')
   const [podcastData, setData] = useState({
      queue: [],
      podcasts: [],
      starred: [],
   })
   useEffect(() => {
      getPodcastInfo().then((data) => {
         setData({ ...data })
      })
   }, [])

   return (
      <SiteSection>
         <h2>
            <SubHeading>Podcasts</SubHeading>
         </h2>
         <p className={globalCss.mutedText}>
            I subscribe to{' '}
            <Link to="/podcasts">{podcastData.podcasts.length}</Link> podcasts
            with {podcastData.queue.length} currently in my podcasts listening
            queue. Podcasts are a great way to keep up with the latest around
            the industry. They are also a great way not to go insane duing long
            commutes. Below is a list of {podcastData.starred.length} podcasts
            episodes that I have starred over the years. Hope you enjoy. If you
            know of other podcasts you would recommend please send me your
            suggestions at <a href={twitter.link}>{twitter.username}</a>
         </p>
         <span>
            <CenterDivider />
         </span>
         <div className={css.container}>
            {podcastData.starred.map((episode, index) => (
               <div
                  key={`episode-${episode.title}-${index}`}
                  className={css.episode}
               >
                  <div>
                     <img
                        src={`https://static.pocketcasts.com/discover/images/130/${episode.podcastUuid}.jpg`}
                        alt="{episode.title}"
                     />
                  </div>
                  <div>
                     <a href={episode.url}>{episode.title}</a>
                  </div>
                  {/* <div>{episode.showNotes}</div> */}
               </div>
            ))}
         </div>
         <div style={{ margin: theme.spacing(3) }}>
            <Link to="/podcasts">
               <StyledButton>See All Podcasts</StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default PodcastsPreview
