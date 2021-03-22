import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import SubHeading from './presntation/subHeading'
import CenterDivider from './presntation/centerDivider'
import SiteSection from './presntation/siteSection'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
}))

const LatestWork = () => {
   const theme = useTheme()
   const css = useStyles(theme)

   return (
      <SiteSection bg="light">
         <h2>
            <SubHeading>My Latest Work</SubHeading>
         </h2>
         <p className={css.mutedText}>
            Most of my work is proprietary but I'm looking to expand my open
            source portfolio soon. Stay tuned!
         </p>
         <span>
            <CenterDivider />
         </span>
      </SiteSection>
   )
}

export default LatestWork
