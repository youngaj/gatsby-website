import React from 'react'
import sharedStyles from '../styles/global'
import StyledButton from '../components/styledButton'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import info from '../data/info'
import useWindowSize from '../utils/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   content: {
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
         textAlign: 'left',
      },
   },
   heading: {
      textTransform: 'uppercase',
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
   },
   highlight: {
      color: theme.palette.secondary.main,
   },
   buttonArea: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(16),
   },
}))

const ContactDetail = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   return (
      <div>
         <h3 className={css.heading}>Contact Details</h3>
         <div>
            <div className={css.textGray}>
               <p>
                  {info.me.firstName} {info.me.lastName}
               </p>
               <p>
                  <a href={`mailto:${info.me.email}`}>{info.me.email}</a>
               </p>
               {info.me.social.map((x, index) => (
                  <p key={`social-${index}`}>
                     {x.name}:{' '}
                     <a href={x.link} target="_blank">
                        {x.username}{' '}
                     </a>
                  </p>
               ))}
            </div>
            <div className={css.buttonArea}>
               <StyledButton>Download Resume</StyledButton>
            </div>
         </div>
      </div>
   )
}

export default ContactDetail
