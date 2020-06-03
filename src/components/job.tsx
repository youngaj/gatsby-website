import React, { useState } from 'react'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'

import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import AddBoxIcon from '@material-ui/icons/AddBox'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   jobBox: {
      border: '2px solid rgb(23, 23, 23)',
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      textAlign: 'left',
      '& p': {
         marginTop: theme.spacing(1),
         marginBottom: theme.spacing(2),
      },
   },
   jobLayout: {
      //   border: '1px solid red',
      display: 'grid',
      gridTemplateColumns: '150px 55px 1fr',
      marginRight: theme.spacing(5),
   },
   expansionBox: {
      color: 'rgb(23, 23, 23)',
      //   border: '1px solid yellow',
      //   marginTop: theme.spacing(2),
   },
   jobTitle: {
      textTransform: 'uppercase',
   },
   responsibility: {
      marginLeft: theme.spacing(2),
   },
   yearBox: {
      backgroundColor: theme.palette.secondary.main,
      width: '120px',
      height: '40px',
      lineHeight: '40px',
      display: 'block',
      verticalAlign: 'center',
      borderRadius: '8px',
   },
}))

const Job = (props) => {
   const theme = useTheme
   const css = useStyles(theme)
   const [job, setJob] = useState(props.data)
   const start = new Date(job.start).getFullYear()
   const end = job.end ? new Date(job.end).getFullYear() : 'NOW'

   function toggleDetails(e) {
      e.preventDefault()
      job.expanded = !job.expanded
      setJob({ ...job })
   }

   return (
      <div className={css.jobLayout}>
         <div className={[css.yearBox, css.wt700].join(' ')}>
            {start} - {end}
         </div>
         <div className={css.expansionBox} onClick={toggleDetails}>
            {job.expanded ? (
               <IndeterminateCheckBoxIcon fontSize="large" color="inherit" />
            ) : (
               <AddBoxIcon fontSize="large" color="inherit" />
            )}
         </div>
         <div className={css.jobBox}>
            <p className={css.jobTitle}>
               {job.title} - {job.company}
            </p>
            {job.expanded && (
               <div className={css.mutedText}>
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
            )}
         </div>
      </div>
   )
}

export default Job
