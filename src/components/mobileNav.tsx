import React, { useState } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { colors, sharedStyles } from '../styles/global'

import { Button, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useWindowSize } from '../hooks/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   sticky: {
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 10,
      textAlign: 'right',
      backgroundColor: 'black',
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(3),
   },
}))

const MobileNav = (props) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [active, setActive] = useState(props.active)
   const links = props.links
   const defaultMenuOptions = {
      home: { title: 'Home', target: '/' },
      profile: { title: 'Profile', target: '/#profile' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/podcasts' },
      devGroup: { title: 'Dev Group', target: '/devGroup' },
      blog: { title: 'Blog', target: '/blogs' },
      uses: { title: 'Uses', target: '/uses' },
   }

   const windowSize = useWindowSize()
   const [anchorEl, setAnchorEl] = React.useState(null)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }
   const menuItems = links
      ? { ...defaultMenuOptions, ...links }
      : defaultMenuOptions

   if (active) {
      menuItems[active].active = 'true'
   } else {
      menuItems.home.active = 'true'
   }

   const selectLink = (key: string) => {
      setActive(key)
      if (key) {
         menuItems[key].active = 'true'
      } else {
         menuItems.home.active = 'true'
      }
   }

   return (
      <div>
         {windowSize.width < theme.breakpoints.values.md && (
            <div className={css.sticky}>
               <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color={'primary'}
               >
                  <MenuIcon style={{ fill: colors.accent }} />
               </Button>
               <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
               >
                  {Object.keys(menuItems).map((key) => {
                     const item = menuItems[key]
                     const color = item.active ? 'secondary' : 'primary'
                     return (
                        <div
                           key={`nav-${item.title}`}
                           style={{
                              textAlign: 'center',
                              opacity: '0.9',
                           }}
                        >
                           <a
                              href={`${item.target}`}
                              onClick={() => selectLink(key)}
                           >
                              <MenuItem onClick={handleClose}>
                                 {item.title}
                              </MenuItem>
                           </a>
                        </div>
                     )
                  })}{' '}
               </Menu>
            </div>
         )}
      </div>
   )
}

export default MobileNav
