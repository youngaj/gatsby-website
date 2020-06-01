import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
   divider: {
      display: 'block',
      marginTop: '35px',
      marginBottom: '35px',
      backgroundColor: theme.palette.secondary.main,
      height: '2px',
      width: '150px',
   },
}))

const Divider = () => {
   const theme = useTheme()
   const css = useStyles(theme)

   return <span className={css.divider}></span>
}

export default Divider
