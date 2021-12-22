import React from 'react'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import { sharedStyles, colors } from '../../styles/global'

type BackgroundTone = 'dark' | 'light'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),

      textAlign: 'center',
   },
}))

interface SiteSectionProps {
   bg: BackgroundTone
   children?: React.ReactNode
}

const SiteSection = (props: SiteSectionProps) => {
   const theme = useTheme()
   const css = useStyles(theme)

   const children = props.children
   const bg: BackgroundTone = props.bg

   const conditionalStyles = { backgroundColor: 'rgb(23, 23, 23)' }
   if (bg === 'dark') {
      conditionalStyles.backgroundColor = 'black'
   }

   return (
      <div className={css.container} style={conditionalStyles}>
         <div className={css.content}>{children}</div>
      </div>
   )
}

export default SiteSection
