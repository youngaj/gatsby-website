import React from 'react'
import SubHeading from './presntation/subHeading'
import SiteSection from './presntation/siteSection'
import info from '../data/info'
import Job from './job'
import CenterDivider from './presntation/centerDivider'

const Resume = () => {
   return (
      <SiteSection bg="dark">
         <h2>
            <SubHeading>My resume</SubHeading>
         </h2>
         <p>
            I have a strong belief that you should never stop learning. Below
            lists my formal education.
         </p>
         <CenterDivider />
         <h3>Work Experience</h3>
         <div>
            {info.me.workExperience.map((job) => (
               <Job data={job}></Job>
            ))}
         </div>
      </SiteSection>
   )
}

export default Resume
