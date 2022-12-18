// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { getPodcastInfo } from '../utils/podcastService'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { colors, sharedStyles } from '../styles/global'
import Podcast from '../components/podcast'
import SiteSection from '../components/presentation/siteSection'
import { info } from '../data/info'
import SubHeading from '../components/presentation/subHeading'
import { PodcastData, Tab, TabEnum } from '../models'
import PodCastEpisode from '../components/podcastEpisode'
import PodCastAppearance from '../components/podcastAppearance'

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
   tabs: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '1rem',
      margin: '1rem',
      marginTop: '2rem',
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr 1fr',
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
}))

const PodcastPage = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const twitter = info.me.social.find((x) => x.name === 'Twitter')

   const [podcastData, setData] = useState<PodcastData>({
      queue: [],
      podcasts: [],
      starred: [],
      appearances: [],
   })
   const [tabs, setTabs] = useState<Tab[]>([])
   const [visibleTab, setVisibleTab] = useState<TabEnum>(TabEnum.Appearances)

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

   return (
      <Layout>
         <Nav active="podcasts"></Nav>
         <SiteSection bg="dark">
            <SubHeading>Podcasts</SubHeading>
            <p className={css.mutedText}>
               I subscribe to{' '}
               <a onClick={(e) => setVisibleTab(TabEnum.Subscribed)}>
                  {podcastData.podcasts.length}
               </a>{' '}
               podcasts and have appeared on{' '}
               <a onClick={(e) => setVisibleTab(TabEnum.Appearances)}>
                  {podcastData.appearances.length}
               </a>{' '}
               episodes thus far. Podcasts are a great way to keep up with the
               latest around the industry. They are also a great way avoid going
               insane during long commutes. You will also find the podcast that
               are currently in my{' '}
               <a onClick={(e) => setVisibleTab(TabEnum.Queue)}>
                  listening queue
               </a>
               . Follow along and/or send me suggestions{' '}
               <a href={twitter?.link}>{twitter?.username}</a>
            </p>
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

            {visibleTab === TabEnum.Queue && (
               <div className={css.container}>
                  {podcastData.queue.map((episode, index) => (
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
                     .sort(
                        (a, b) =>
                           b.lastEpisodePublished.getTime() -
                           a.lastEpisodePublished.getTime()
                     )
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
                  {podcastData.starred.map((episode, index) => (
                     <PodCastEpisode
                        episode={episode}
                        key={`starred-episode-${episode.title}-${index}`}
                     ></PodCastEpisode>
                  ))}
               </div>
            )}
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
         </SiteSection>
      </Layout>
   )
}

export default PodcastPage
