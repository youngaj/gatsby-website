import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles, colors } from '../../styles/global'
import SiteSection from '../presntation/siteSection'
import SubHeading from '../presntation/subHeading'
import CenterDivider from '../presntation/centerDivider'
import { getVideos } from '../../utils/devGroupService'
import StyledButton from '../styledButton'
import { Link } from 'gatsby'
import ColorBox from '../presntation/colorBox'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
   },
   episode: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(2),
      padding: theme.spacing(2),
   },
   details: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gridGap: theme.spacing(2),
      border: `1px solid ${colors.muted}`,
      padding: theme.spacing(2),
   },
}))

const DevGroupPreview = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [videos, setVideos] = useState([])
   useEffect(() => {
      getVideos().then((data) => {
         const subset = data.slice(0, 12)
         setVideos(subset)
      })
   }, [])

   return (
      <SiteSection>
         <h2>
            <SubHeading>Dev Group Sessions</SubHeading>
         </h2>
         <p className={css.mutedText}>
            Attending developer meet ups are a great way of expanding your
            knowledge and skills. But many of us have family and other
            obligations outside of work so I created and hosted a bi-weekly NASA
            wide developer group that ran for over 8 years. Below are an excert
            from those sessions.
         </p>
         <span>
            <CenterDivider />
         </span>
         <div className={css.container}>
            {videos.map((episode, index) => (
               <div
                  key={`episode-${episode.id}-${index}`}
                  className={css.episode}
               >
                  <div>
                     <img
                        src={episode.thumbnails.medium.url}
                        alt="{episode.title}"
                     />
                  </div>
                  <div className={css.details}>
                     <ColorBox>
                        <div>
                           <div className={[css.pt65, css.wt700].join(' ')}>
                              {episode.day}
                           </div>
                           <div>{episode.monthYear}</div>
                        </div>
                     </ColorBox>
                     <span style={{ textAlign: 'left' }}>
                        <a
                           href={episode.link}
                           target="_blank"
                           className={css.mutedText}
                        >
                           {episode.title}
                        </a>
                     </span>
                  </div>
               </div>
            ))}
         </div>
         <div>
            <Link to="/devGroupSessions">
               <StyledButton>See All Sessions</StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default DevGroupPreview
