import React from 'react'
import SubHeading from './presntation/subHeading'
import SiteSection from './presntation/siteSection'
import { info } from '../data/info'
import Job from './job'
import CenterDivider from './presntation/centerDivider'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      marginLeft: theme.spacing(5),
   },
   h3: {
      textAlign: 'left',
      marginBottom: theme.spacing(3),
   },
}))

const Resume = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   return (
      <SiteSection bg="dark">
         <h2>
            <SubHeading>My resume</SubHeading>
         </h2>
         <p className={css.mutedText}>
            I have a strong belief that you should never stop learning. Below
            lists my formal education.
         </p>
         <CenterDivider />
         <div className={css.container}>
            <h3 className={[css.h3, css.pt35, css.wt100].join(' ')}>
               Work Experience
               <br />
               1999 - Now
            </h3>
            <div>
               {info.me.workExperience.map((job) => (
                  <Job data={job}></Job>
               ))}
            </div>
         </div>
      </SiteSection>
   )
}

export default Resume
