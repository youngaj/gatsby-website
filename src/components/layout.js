/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './layout.css'

const theme = createMuiTheme({
   palette: {
      secondary: {
         main: '#c80a48',
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
            <footer>
               © {new Date().getFullYear()}, Built with
               {` `}
               <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
         </div>
      </>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout
