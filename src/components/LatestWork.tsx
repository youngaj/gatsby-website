import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'
import Divider from './presntation/divider'
import SubHeading from './presntation/subHeading'
import CenterDivider from './presntation/centerDivider'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      backgroundColor: 'rgb(23, 23, 23)',
      textAlign: 'center',
   },
}))

const LatestWork = () => {
   const theme = useTheme()
   const css = useStyles(theme)

   return (
      <div className={css.container}>
         <h2>
            <SubHeading>My Latest Work</SubHeading>
         </h2>
         <p className={css.textGray}>
            Most of my work is proprietary but I'm looking to expand my open
            source portfolio soon. Stay tuned!
         </p>
         <span>
            <CenterDivider />
         </span>
      </div>
   )
}

export default LatestWork
