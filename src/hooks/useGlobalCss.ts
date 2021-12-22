import { useState } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles, colors } from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr',
   },
   episode: {
      display: 'gr5id',
      gridTemplateColumns: '1fr 3fr',
      gridGap: theme.spacing(2),
      border: `1px solid ${colors.muted}`,
      padding: theme.spacing(2),
      '& div': {
         textAlign: 'left',
      },
   },
}))

export const useGlobalCss = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [globalCss, updateCss] = useState(css)
   return globalCss
}
