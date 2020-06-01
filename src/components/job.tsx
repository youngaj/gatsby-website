import React from 'react'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import sharedStyles from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   jobBox: {
      border: '1px solid',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
      textAlign: 'left',
      '& p': {
         marginTop: theme.spacing(2),
         marginBottom: theme.spacing(2),
      },
   },
   jobTitle: {
      textTransform: 'uppercase',
   },
   responsibility: {
      marginLeft: theme.spacing(2),
   },
}))

const Job = (props) => {
   const theme = useTheme
   const css = useStyles(theme)
   const job = props.data

   return (
      <div className={css.jobBox}>
         <p className={css.jobTitle}>
            {job.title} - {job.company}
         </p>
         <div className={css.textGray}>
            Responsibilities: <br />
            <ul>
               {job.responsibilities.map((duty, index) => (
                  <li
                     className={css.responsibility}
                     key={`${job.title}-duty-${index}`}
                  >
                     {duty}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Job
