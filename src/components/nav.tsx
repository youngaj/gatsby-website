import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { Button } from '@material-ui/core'
import { useWindowSize } from '../hooks/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   sticky: {
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0,
   },
   container: {
      height: '75px',
      margin: 'auto',
      display: 'grid',
      gridGap: '25px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      alignItems: 'center',
      backgroundColor: 'black',
   },
}))

const Nav = (props) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [active, setActive] = useState(props.active)
   const windowSize = useWindowSize()
   const links = props.links
   const defaultMenuOptions = {
      home: { title: 'Home', target: '/' },
      profile: { title: 'Profile', target: '/#profile' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/podcasts' },
      devGroup: { title: 'Dev Group', target: '/devGroup' },
      blog: { title: 'Blog', target: '/blog' },
      uses: { title: 'Uses', target: '/uses' },
   }
   const initialMenuItems = links
      ? { ...defaultMenuOptions, ...links }
      : defaultMenuOptions
   if (active) {
      initialMenuItems[active].active = true
   }

   const [menuItems, setMenuItems] = useState(initialMenuItems)

   const selectLink = (selectedKey: string) => {
      let selectionFound = false
      setActive(selectedKey)

      Object.keys(menuItems).map((key) => {
         if (key === selectedKey) {
            menuItems[key].active = true
            selectionFound = true
         } else {
            menuItems[key].active = false
         }
      })

      if (!selectionFound) {
         menuItems.home.active = true
      }
      setMenuItems({ ...menuItems })
   }

   return (
      <div
         id="sticky"
         className={css.sticky}
         style={{
            backgroundColor: 'black',
            zIndex: 10,
         }}
      >
         {windowSize.width >= theme.breakpoints.values.md && (
            <div>
               <div className={[css.container, css.content].join(' ')}>
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
                              <Button color={color}>{item.title}</Button>
                           </a>
                        </div>
                     )
                  })}
               </div>
            </div>
         )}
      </div>
   )
}

export default Nav
