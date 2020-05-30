import React from 'react'
import { PageProps } from 'gatsby'
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'

const useStyles = makeStyles((theme) => ({
   button: {
      fontFamily: 'Raleway',
      backgroundColor: theme.palette.secondary.main,
      letterSpacing: '1px',
      borderRadius: '3px',
      color: 'white',
      paddingRight: '1.5 rem',
   },
}))

const StyledButton = (props: any) => {
   const theme = useTheme()
   const localCss = useStyles(theme)
   const shared = { ...sharedStyles(theme) }
   const css = { ...localCss, ...shared }

   const text = props.text
   return (
      <>
         <Button className={css.button}>{text}</Button>
      </>
   )
}

export default StyledButton
