import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles, colors } from '../../styles/global'
import SubHeading from '../presentation/subHeading'
import SiteSection from '../presentation/siteSection'
import {
   getPodcastInfo,
   _getListeningStartDate,
   _getListeningTimeInHours,
} from '../../utils/podcastService'
import StyledButton from '../styledButton'
import { info } from '../../data/info'
import { Link } from 'gatsby'
import { useGlobalCss } from '../../hooks/useGlobalCss'
import { PodcastData, Tab, TabEnum } from '../../models'
import Podcast from '../podcast'
import PodCastEpisode from '../podcastEpisode'
import PodCastAppearance from '../podcastAppearance'
import dayjs from 'dayjs'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr));',
      [theme.breakpoints.down('xs')]: {
         gridTemplateColumns: '1fr',
         margin: 'auto',
      },
   },
   tabs: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '2rem',
      margin: '1rem',
      marginTop: '2rem',
      [theme.breakpoints.down('xs')]: {
         gridTemplateColumns: '1fr',
      },
   },
   tabHeader: {
      fontSize: '1.5rem',
      [theme.breakpoints.down('sm')]: {
         fontSize: '1.0rem',
      },
   },
   divider: {
      display: 'block',
      marginTop: '1rem',
      marginBottom: '15px',
      backgroundColor: theme.palette.secondary.main,
      height: '2px',
      width: '150px',
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.down('sm')]: {
         width: '100px',
      },
   },
   count: {
      fontSize: '1.2rem',
      color: colors.muted,
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   },
   podcastNumber: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      fontStyle: 'italics',
   },
   podcastText: {
      textAlign: 'left',
      color: colors.muted,
      margin: 'auto',
      maxWidth: '80%',
      '& p': {
         marginBottom: '1rem',
      },
   },
}))

const PodcastsPreview = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const globalCss = useGlobalCss()
   const twitter = info.me.social.find((x) => x.name === 'Twitter')
   const displayCount = 6
   const [tabs, setTabs] = useState<Tab[]>([])
   const [visibleTab, setVisibleTab] = useState<TabEnum>(TabEnum.Starred)
   const [podcastData, setData] = useState<PodcastData>({
      queue: [],
      podcasts: [],
      starred: [],
      appearances: [],
   })

   useEffect(() => {
      getPodcastInfo().then((data) => {
         setData({ ...data })
         setTabs([
            {
               title: `Appearances`,
               count: data.appearances?.length,
               value: TabEnum.Appearances,
            },
            {
               title: `Stared`,
               count: data.starred?.length,
               value: TabEnum.Starred,
            },
            {
               title: `In Queue`,
               count: data.queue?.length,
               value: TabEnum.Queue,
            },
            {
               title: `Subscribed`,
               count: data.podcasts?.length,
               value: TabEnum.Subscribed,
            },
         ])
      })
   }, [])

   const podcastStartDate = _getListeningStartDate(
      podcastData.stats?.timesStartedAt
   )
   const listeningTime = _getListeningTimeInHours(
      podcastData.stats?.timeListened
   )
   return (
      <SiteSection bg="light">
         <h2>
            <SubHeading>Podcasts</SubHeading>
         </h2>
         <div className={css.podcastText}>
            <p>
               I subscribe to{' '}
               <Link to="/podcasts" className={css.podcastNumber}>
                  {podcastData.podcasts.length}
               </Link>{' '}
               podcasts with{' '}
               <span className={css.podcastNumber}>
                  {podcastData.queue.length}
               </span>{' '}
               currently in my podcasts listening queue.{' '}
               {podcastData.stats && (
                  <>
                     Since {podcastStartDate}, I have listened to over{' '}
                     <span className={css.podcastNumber}> {listeningTime}</span>{' '}
                     hours of podcasts.{' '}
                  </>
               )}
            </p>
            <p>
               I started my podcast journey to make better use of my time during
               long commutes to the office. I love listening to podcasts! They
               are a great way to keep up with the latest around the industry.
               Below is a list of{' '}
               <span className={css.podcastNumber}>
                  {podcastData.starred.length}
               </span>{' '}
               podcasts episodes that I have starred over the years. You can
               also find the{' '}
               <span className={css.podcastNumber}>
                  {podcastData.appearances.length}
               </span>{' '}
               episodes on which I was a guest.
            </p>
            <p>
               I hope you enjoy as much as I have. If you know of other podcasts
               you would recommend please send me your suggestions at{' '}
               <a href={twitter!.link}>{twitter!.username}</a>
            </p>
         </div>
         <div className={css.tabs}>
            {tabs.map((tab) => {
               const isActive = tab.value === visibleTab
               const headerCss = isActive
                  ? css.tabHeader
                  : [css.tabHeader, css.mutedText].join(' ')
               return (
                  <span
                     className={headerCss}
                     onClick={(e) => setVisibleTab(tab.value)}
                  >
                     {tab.title}
                     <span className={css.count}> ({tab.count})</span>
                     {isActive && <span className={css.divider}></span>}
                  </span>
               )
            })}
         </div>

         {visibleTab === TabEnum.Appearances && (
            <div className={css.container}>
               {podcastData.appearances.map((episode, index) => (
                  <PodCastAppearance
                     episode={episode}
                     key={`appearance-episode-${episode.title}-${index}`}
                  ></PodCastAppearance>
               ))}
            </div>
         )}

         {visibleTab === TabEnum.Queue && (
            <div className={css.container}>
               {podcastData.queue
                  .slice(0, displayCount)
                  .map((episode, index) => (
                     <PodCastEpisode
                        episode={episode}
                        key={`episode-${episode.title}-${index}`}
                     ></PodCastEpisode>
                  ))}
            </div>
         )}
         {visibleTab === TabEnum.Subscribed && (
            <div className={css.container}>
               {podcastData.podcasts
                  .slice(0, displayCount)
                  .map((show, index) => (
                     <Podcast
                        data={show}
                        key={`episode-${show.title}-${index}`}
                     />
                  ))}
            </div>
         )}
         {visibleTab === TabEnum.Starred && (
            <div className={css.container}>
               {podcastData.starred
                  .slice(0, displayCount)
                  .map((episode, index) => (
                     <PodCastEpisode
                        episode={episode}
                        key={`starred-episode-${episode.title}-${index}`}
                     ></PodCastEpisode>
                  ))}
            </div>
         )}
         <div style={{ margin: theme.spacing(3) }}>
            <Link to="/podcasts">
               <StyledButton>See All Podcasts</StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default PodcastsPreview
