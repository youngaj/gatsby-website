import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles } from '../styles/global'
import SiteSection from '../components/presntation/siteSection'
import SubHeading from '../components/presntation/subHeading'
import CenterDivider from '../components/presntation/centerDivider'
import { getVideos } from '../utils/devGroupService'
import { PageProps } from 'gatsby'
import DevGroupSession from '../components/devGroupSession'
import Nav from '../components/nav'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
   },
}))

const DevGroup = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [videos, setVideos] = useState([])
   useEffect(() => {
      getVideos().then((data) => {
         setVideos(data)
      })
   }, [])

   return (
      <>
         <Nav />
         <SiteSection bg="dark">
            <h2>
               <SubHeading>Dev Group Sessions</SubHeading>
            </h2>
            <p className={css.mutedText}>
               Attending developer meet ups are a great way of expanding your
               knowledge and skills. But many of us have family and other
               obligations outside of work so I created and hosted a bi-weekly
               NASA wide developer group that ran for over 8 years. Below are an
               excert from those sessions.
            </p>
            <span>
               <CenterDivider />
            </span>
            <div className={css.container}>
               {videos.map((session, index) => (
                  <DevGroupSession session={session} />
               ))}
            </div>
         </SiteSection>
      </>
   )
}

export default DevGroup
