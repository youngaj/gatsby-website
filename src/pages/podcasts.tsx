// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { getPodcastInfo } from '../utils/podcastService'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { colors, sharedStyles } from '../styles/global'
import Podcast from '../components/podcast'
import SiteSection from '../components/presntation/siteSection'
import { info } from '../data/info'
import SubHeading from '../components/presntation/subHeading'
import { Tab, TabEnum } from '../types'
import { useWindowSize } from '../hooks/useWindowSize'

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

   tabs: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem',
      margin: '1rem',
      marginTop: '2rem',
   },
   tabHeader: {
      fontSize: '1.5rem',
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
   },
   count: {
      fontSize: '1.2rem',
      color: colors.muted,
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

   const [podcastData, setData] = useState({
      queue: [],
      podcasts: [],
      starred: [],
   })
   const [tabs, setTabs] = useState<Tab[]>([])
   const [visibleTab, setVisibleTab] = useState<TabEnum>(TabEnum.Starred)
   const windowSize = useWindowSize()
   const largeScreen =
      windowSize.width > theme.breakpoints.values.sm ? true : false

   useEffect(() => {
      getPodcastInfo().then((data) => {
         setData({ ...data })
         setTabs([
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
         <Nav active="podcasts" links={links}></Nav>
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
                     <div
                        key={`episode-${episode.title}-${index}`}
                        className={css.episode}
                     >
                        <div>
                           <img
                              src={`https://static.pocketcasts.com/discover/images/130/${episode.podcast}.jpg`}
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
            )}
            {visibleTab === TabEnum.Subscribed && (
               <div className={css.container}>
                  {podcastData.podcasts.map((show, index) => (
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
            )}
         </SiteSection>
      </Layout>
   )
}

export default PodcastPage
