import React, { useState } from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles, colors } from '../styles/global'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { PodCast } from '../models'
dayjs.extend(relativeTime)

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   podcastBlock: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: '150px 1fr',
      //border: `1px solid ${colors.muted}`,
      borderRadius: '5px',
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
         '& div': {
            textAlign: 'center',
         },
      },
   },
   title: {
      marginBottom: theme.spacing(2),
   },
   subTitle: {
      marginBottom: theme.spacing(1),
   },
}))

const shorten = (text, length) => {
   let substr = text.substring(0, length)
   const lastSpaceIndex = substr.lastIndexOf(' ')
   substr = substr.substring(0, lastSpaceIndex)
   return substr
}

interface PodcastProps {
   data: PodCast
}

interface PodcastNode extends PodCast {
   displayFullDetails?: boolean
}

const Podcast = (props: PodcastProps) => {
   const theme = useTheme()
   const css = useStyles(theme)

   const [show, setShow] = useState<PodcastNode>(props.data)
   const showDetails = (show) => {
      show.displayFullDetails = true
      setShow({ ...show })
   }

   return (
      <div className={[css.podcastBlock].join(' ')}>
         <div>
            <img
               src={`https://static.pocketcasts.com/discover/images/130/${show.uuid}.jpg`}
               alt="{show.title}"
            />
         </div>
         <div>
            <div className={[css.title, css.pt30].join(' ')}>
               <a href={show.url}>{show.title}</a>
            </div>
            <p className={[css.mutedText, css.pt20, css.subTitle].join(' ')}>
               Latest Episode: {dayjs(show.lastEpisodePublished).fromNow()}
            </p>
            <p>
               {show.displayFullDetails || show.description.length < 200 ? (
                  <span>{show.description}</span>
               ) : (
                  <div>
                     {shorten(show.description, 200)} ...{' '}
                     <a onClick={() => showDetails(show)}>show more</a>
                  </div>
               )}
            </p>
         </div>
      </div>
   )
}

export default Podcast
