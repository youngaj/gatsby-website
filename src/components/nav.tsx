import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      height: '75px',
      width: '85%',
      margin: 'auto',
      display: 'grid',
      gridGap: '25px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      alignItems: 'center',
      backgroundColor: 'black',
   },
}))

const Nav = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const menuItems = [
      { title: 'Home', target: '#home', active: 'true' },
      { title: 'Profile', target: '#profile' },
      { title: 'Services', target: '#services' },
      { title: 'Resume', target: '#resume' },
      { title: 'Podcasts', target: '#podcast' },
      { title: 'Skills', target: '#skills' },
      { title: 'Dev Group', target: '#devGroup' },
      { title: 'Contact', target: '#contact' },
   ]

   return (
      <div style={{ backgroundColor: 'black' }}>
         <div className={css.container}>
            {menuItems.map((item) => {
               const color = item.active ? 'secondary' : 'primary'
               return (
                  <div
                     key={`nav-${item.title}`}
                     style={{
                        textAlign: 'center',
                        opacity: '0.9',
                     }}
                  >
                     <a href={`${item.target}`}>
                        <Button color={color}>{item.title}</Button>
                     </a>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Nav
