// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/layout'
import Nav from '../components/nav'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles, colors } from '../styles/global'
import { getVideos } from '../utils/devGroupService'
import DevGroupSession from '../components/devGroupSession'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
   },
}))

const DevGroupPage = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [videos, setVideos] = useState([])
   useEffect(() => {
      getVideos().then((data) => {
         setVideos(data)
      })
   }, [])

   return (
      <Layout>
         <Nav></Nav>
         <h1>Dev Group Sessions</h1>
         <div className={css.container}>
            {videos.map((session, index) => (
               <DevGroupSession
                  session={session}
                  key={`session-${session.id}-${index}`}
               />
            ))}
         </div>{' '}
      </Layout>
   )
}

export default DevGroupPage
