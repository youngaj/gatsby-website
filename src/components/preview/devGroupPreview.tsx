import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles } from '../../styles/global'
import SiteSection from '../presentation/siteSection'
import SubHeading from '../presentation/subHeading'
import CenterDivider from '../presentation/centerDivider'
import StyledButton from '../styledButton'
import { Link } from 'gatsby'
import DevGroupSession from '../devGroupSession'
import { getSubset } from '../../utils/generalUtils'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
      },
   },
}))

const DevGroupPreview = ({ sessions }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const maxPreview = 12
   const [videos, setVideos] = useState(getSubset(sessions, maxPreview))
   useEffect(() => {
      const subset = getSubset(sessions, maxPreview)
      setVideos(subset)
   }, [sessions])

   return (
      <SiteSection bg="dark">
         <h2>
            <SubHeading>Dev Group Sessions</SubHeading>
         </h2>
         <p className={css.mutedText}>
            Attending developer meet ups are a great way of expanding your
            knowledge and skills. But many of us have family and other
            obligations outside of work so I created and hosted a bi-weekly NASA
            wide developer group that ran for over 8 years. Below are excerpts
            from those sessions.
         </p>
         <span>
            <CenterDivider />
         </span>
         <div className={css.container}>
            {videos.map((session, index) => (
               <DevGroupSession
                  session={session}
                  key={`session-preview-${session.id}-${index}`}
               />
            ))}
         </div>
         <div>
            <Link to="/devGroup">
               <StyledButton>See All Sessions</StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default DevGroupPreview
