/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { colors } from '../styles/global'
import './layout.css'
import { useWindowSize } from '../hooks/useWindowSize'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#ffffff',
      },
      secondary: {
         main: colors.accent,
      },
   },
})

const useStyles = makeStyles((theme: Theme) => ({
   container: {
      //maxWidth: '1440px',
      margin: 'auto',
      //border: '1px solid red',
      backgroundColor: 'black',
   },
}))

const Layout = ({ children }) => {
   const css = useStyles(theme)
   const windowSize = useWindowSize()

   return (
      <div className={css.container} style={{ height: windowSize.height }}>
         <ThemeProvider theme={theme}>
            <main>{children}</main>
         </ThemeProvider>
      </div>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
