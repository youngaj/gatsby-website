import React from 'react'
import SubHeading from './presntation/subHeading'
import SiteSection from './presntation/siteSection'
import info from '../data/info'
import Job from './job'

const WorkHistory = () => {
   return (
      <SiteSection bg="dark">
         <h2>
            <SubHeading>My resume</SubHeading>
         </h2>
         <h3>Work Experience</h3>
         <div>
            {info.me.workExperience.map((job) => (
               <Job data={job}></Job>
            ))}
         </div>
      </SiteSection>
   )
}

export default WorkHistory
