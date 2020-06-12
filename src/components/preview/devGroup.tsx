import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles } from '../../styles/global'
import SiteSection from '../presntation/siteSection'
import SubHeading from '../presntation/subHeading'
import CenterDivider from '../presntation/centerDivider'
import { getVideos } from '../../utils/devGroupService'
import StyledButton from '../styledButton'
import { Link } from 'gatsby'
import DevGroupSession from '../devGroupSession'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
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
            {videos.map((session, index) => (
               <DevGroupSession session={session} />
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
