import React, { useState } from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles, colors } from '../styles/global'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   podcastBlock: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 2fr',
      border: `1px solid ${colors.muted}`,
      borderRadius: '10px',
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
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

const Podcast = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)

   const [show, setShow] = useState(data)
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
               Lastest Episode: {dayjs(show.lastEpisodePublished).fromNow()}
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
