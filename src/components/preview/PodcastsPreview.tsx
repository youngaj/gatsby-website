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
import { useGlobalCss } from '../../utils/useGlobalCss'
import useWindowSize from '../../utils/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gap: '.5rem',
      gridTemplateColumns: '1fr 1fr',
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
         margin: 'auto',
      },
   },
   episode: {
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      gap: theme.spacing(2),
      border: `1px solid ${colors.muted}`,
      borderRadius: '10px',
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
         marginBottom: theme.spacing(2),
      },
   },
   episodeTitle: {
      marginBottom: '2rem',
      [theme.breakpoints.down('sm')]: {
         textAlign: 'center',
      },
   },
   episodeIcon: {
      width: '100%',
      minWidth: '80px',
      [theme.breakpoints.down('sm')]: {
         width: '100%',
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

   const windowSize = useWindowSize()
   const largeScreen =
      windowSize.windowWidth > theme.breakpoints.values.sm ? true : false
   return (
      <SiteSection bg="dark">
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
                        className={css.episodeIcon}
                     />
                  </div>
                  <div style={{ marginLeft: theme.spacing(2) }}>
                     <h3 className={css.episodeTitle}>
                        <a href={episode.url}>{episode.title}</a>
                     </h3>
                     {largeScreen && (
                        <div
                           style={{
                              display: 'block',
                              maxHeight: '200px',
                              //border: '1px solid yellow',
                              //maxWidth: '450px',
                              overflowY: 'auto',
                           }}
                           dangerouslySetInnerHTML={{
                              __html: episode.showNotes,
                           }}
                        />
                     )}
                  </div>
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
