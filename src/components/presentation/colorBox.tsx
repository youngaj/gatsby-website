import React, { useState } from 'react'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import { sharedStyles } from '../../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   box: {
      backgroundColor: theme.palette.secondary.main,
      width: '90px',
      height: '85px',
      lineHeight: '40px',
      display: 'block',
      verticalAlign: 'center',
      borderRadius: '8px',
   },
}))

const ColorBox = ({ children }) => {
   const theme = useTheme
   const css = useStyles(theme)

   return <div className={css.box}>{children}</div>
}

export default ColorBox
