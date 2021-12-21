import React from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { colors, sharedStyles } from '../styles/global'

import SubHeading from './presentation/subHeading'
import CenterDivider from './presentation/centerDivider'
import SiteSection from './presentation/siteSection'
import { info } from '../data/info'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '5px',
   },
   workCard: {
      padding: '1rem',
      border: `1px solid ${colors.muted}`,
      borderRadius: '10px',
   },
   projectTitle: {
      color: 'white',
      paddingBottom: '1rem',
   },
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
         <div className={css.grid}>
            {info.me.projects.map((project) => (
               <div className={css.workCard}>
                  <h3
                     className={[css.projectTitle, css.pt30, css.wt100].join(
                        ' '
                     )}
                  >
                     {project.title}
                  </h3>
                  <div className={css.mutedText}>{project.description}</div>
                  {project.code && (
                     <a href={project.code.url}>{project.code.url}</a>
                  )}
               </div>
            ))}
         </div>
      </SiteSection>
   )
}

export default LatestWork
