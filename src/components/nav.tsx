import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   sticky: {
      position: '-webkit-sticky',
      position: 'sticky',
      top: 0,
   },
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

const Nav = (props) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const links = props.links
   const defaultMenuOptions = {
      home: { title: 'Home', target: '/', active: 'true' },
      profile: { title: 'Profile', target: '/#profile' },
      services: { title: 'Services', target: '/#services' },
      resume: { title: 'Resume', target: '/#resume' },
      podcasts: { title: 'Podcasts', target: '/podcasts' },
      skilss: { title: 'Skills', target: '/#skills' },
      devGroup: { title: 'Dev Group', target: '/devGroup' },
      contact: { title: 'Contact', target: '/' },
   }
   const menuItems = links
      ? { ...defaultMenuOptions, ...links }
      : defaultMenuOptions

   return (
      <div
         className={css.sticky}
         style={{ backgroundColor: 'black', zIndex: 10 }}
      >
         <div className={css.container}>
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
