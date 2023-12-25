import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { AppearanceEpisode, Episode } from '../models'
import { colors, sharedStyles } from '../styles/global'
import { useWindowSize } from '../hooks/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   episode: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr',
      gap: theme.spacing(2),
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
         marginBottom: theme.spacing(2),
      },
   },
   episodeBlock: {
      display: 'block',
      maxHeight: '200px',
      overflow: 'auto',
      paddingRight: `1rem`,
      color: colors.muted,
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
   topic: {
      marginTop: theme.spacing(2),
   },
}))

interface PodcastEpisodeProps {
   episode: AppearanceEpisode
}

const PodCastAppearance = (props: PodcastEpisodeProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const { episode } = props

   const windowSize = useWindowSize()
   const largeScreen =
      windowSize.width > theme.breakpoints.values.sm ? true : false
   const episodeContainerMaxWidth = (windowSize.height / 2) * 0.9

   return (
      <div className={css.episode}>
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
               <p className={[css.topic].join(' ')}>
                  <span className={css.mutedText}>Topic:</span> {episode.topic}
               </p>
            </h3>
            {largeScreen && (
               <div
                  className={[css.episodeBlock, css.mutedText].join(' ')}
                  style={{ maxWidth: episodeContainerMaxWidth }}
               >
                  {episode.description}
               </div>
            )}
         </div>
      </div>
   )
}

export default PodCastAppearance
