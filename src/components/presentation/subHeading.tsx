import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   heading: {
      textTransform: 'uppercase',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
   },
}))

const SubHeading = ({ children }) => {
   const theme = useTheme()
   const css = useStyles(theme)

   return (
      <div className={[css.heading, css.pt65, css.wt100].join(' ')}>
         {children}
      </div>
   )
}

export default SubHeading
