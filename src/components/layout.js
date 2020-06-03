/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { colors } from '../styles/global'
import './layout.css'

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

const Layout = ({ children }) => {
   return (
      <>
         <div>
            <ThemeProvider theme={theme}>
               <main>{children}</main>
            </ThemeProvider>
         </div>
      </>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
