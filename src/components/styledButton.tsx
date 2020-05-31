import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
   button: {
      letterSpacing: '1px',
      borderRadius: '5px',
   },
}))

const StyledButton = (props: any) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const { children } = props
   return (
      <>
         <Button color="secondary" variant="contained" className={css.button}>
            {children}
         </Button>
      </>
   )
}

export default StyledButton
