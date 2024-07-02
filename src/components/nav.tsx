import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { Button } from '@material-ui/core'
import { useWindowSize } from '../hooks/useWindowSize'
import { PageMenu, PageMenuItem, PageMenuLinks } from '../models'

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

interface NavProps {
   menu: PageMenu
   active: string
}

const Nav = (props: NavProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [active, setActive] = useState(props.active)
   const windowSize = useWindowSize()
   const links = props.menu?.links
   const defaultMenuOptions = {
      home: { title: 'Home', target: '/' },
      profile: { title: 'Profile', target: '/#profile' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/podcasts' },
      devGroup: { title: 'Dev Group', target: '/devGroup' },
      blog: { title: 'Blog', target: '/blog' },
      uses: { title: 'Uses', target: '/uses' },
   }
   const initialMenuItems: PageMenuLinks = links
      ? { ...defaultMenuOptions, ...links }
      : defaultMenuOptions
   if (active) {
      initialMenuItems[active].isActive = true
   }

   const [menuItems, setMenuItems] = useState(initialMenuItems)

   const selectLink = (selectedKey: string, menuItem: PageMenuItem) => {
      let selectionFound = false
      setActive(selectedKey)

      Object.keys(menuItems).map((key) => {
         if (key === selectedKey) {
            menuItems[key].isActive = true
            selectionFound = true
         } else {
            menuItems[key].isActive = false
         }
      })

      if (!selectionFound) {
         menuItems.home.isActive = true
      }
      setMenuItems({ ...menuItems })

      console.log('trying to execute smooth scroll')
      if (!!menuItem.scrollTo) {
         const target = menuItem.target.replace('#', '')
         menuItem.scrollTo(target)
      }
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
                     const color = item.isActive ? 'secondary' : 'primary'
                     return (
                        <div
                           key={`nav-${item.title}`}
                           style={{
                              textAlign: 'center',
                              opacity: '0.9',
                           }}
                        >
                           <a
                              href={!item.scrollTo ? '' : `${item.target}`}
                              onClick={() => selectLink(key, item)}
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
