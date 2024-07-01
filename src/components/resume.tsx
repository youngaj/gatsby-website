import React from 'react'
import SubHeading from './presentation/subHeading'
import SiteSection from './presentation/siteSection'
import { info } from '../data/info'
import Job from './job'
import CenterDivider from './presentation/centerDivider'
import { useTheme, makeStyles, Theme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import StyledButton from './styledButton'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import dayjs from 'dayjs'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      marginLeft: theme.spacing(5),
   },
   h3: {
      textAlign: 'left',
      marginBottom: theme.spacing(3),
   },
   buttonArea: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
   },
}))

const Resume = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const yearsOfExperience = dayjs().diff('1999-06-01', 'years')
   return (
      <SiteSection bg="dark">
         <h2>
            <SubHeading>My resume</SubHeading>
         </h2>
         <p className={css.mutedText}>
            I have learned quite a bit over my {yearsOfExperience} years of work
            experience. Below is an excerpt of the roles I've held over my
            career.
         </p>
         <div className={css.buttonArea}>
            <a href="/Andre_Young_Resume.pdf" download="Andre Young Resume.pdf">
               <StyledButton>
                  <CloudDownloadIcon />
                  &nbsp; Download Resume
               </StyledButton>
            </a>
         </div>
         <CenterDivider />
         <div className={css.container}>
            <h3 className={[css.h3, css.pt35, css.wt100].join(' ')}>
               Work Experience
               <br />
               1999 - Now
            </h3>
            <div>
               {info.me.workExperience.map((job, index) => (
                  <Job jobInfo={job} key={`job_${index}`}></Job>
               ))}
            </div>
         </div>
      </SiteSection>
   )
}

export default Resume
