import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { Episode } from '../models'
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
}))

interface PodcastEpisodeProps {
   episode: Episode
}

const PodCastEpisode = (props: PodcastEpisodeProps) => {
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
                  className={css.episodeBlock}
                  style={{
                     maxWidth: episodeContainerMaxWidth,
                  }}
                  dangerouslySetInnerHTML={{
                     __html: episode.showNotes,
                  }}
               />
            )}
         </div>
      </div>
   )
}

export default PodCastEpisode
