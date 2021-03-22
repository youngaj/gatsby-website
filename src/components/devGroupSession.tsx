import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles, colors } from '../styles/global'
import ColorBox from '../components/presntation/colorBox'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   session: {
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
      borderRadius: '10px',
      padding: theme.spacing(2),
   },
}))

const DevGroupSession = ({ session }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   return (
      <div className={css.session}>
         <div>
            <img src={session.thumbnails.medium.url} alt="{session.title}" />
         </div>
         <div className={css.details}>
            <ColorBox>
               <div>
                  <div className={[css.pt65, css.wt700].join(' ')}>
                     {session.day}
                  </div>
                  <div>{session.monthYear}</div>
               </div>
            </ColorBox>
            <span style={{ textAlign: 'left' }}>
               <a href={session.link} target="_blank" className={css.mutedText}>
                  {session.title}
               </a>
            </span>
         </div>
      </div>
   )
}

export default DevGroupSession
