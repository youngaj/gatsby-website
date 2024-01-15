import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { info } from '../data/info'
import dayjs from 'dayjs'
import { useWindowSize } from '../hooks/useWindowSize'
import ContactDetail from './contactDetails'
import SubHeading from './presentation/subHeading'
import SiteSection from './presentation/siteSection'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   heading: {
      textTransform: 'uppercase',
      marginBottom: '20px',
   },
   container: {
      textAlign: 'left',
      marginLeft: '54px',
      marginRight: '54px',
      paddingLeft: '15px',
      paddingRight: '15px',
      '& p': {
         marginBottom: '10px',
         lineHeight: '1.5rem',
      },
   },
   profilePicture: {
      width: '60%',
      float: 'right',
   },
}))

const Profile = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const dimensions = useWindowSize()
   const yearsOfExperience = dayjs().diff('1999-06-01', 'years')
   const data = useStaticQuery(graphql`
      query {
         profile: file(
            relativePath: { eq: "headshot_without_background.png" }
         ) {
            childImageSharp {
               fluid {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return (
      <SiteSection bg="dark">
         <div className={css.container}>
            <div>
               <h2 className={css.heading}>
                  <SubHeading>
                     Hello, My name is {info.me.firstName}.
                  </SubHeading>
               </h2>
               {dimensions.width > theme.breakpoints.values.md && (
                  <Img
                     fluid={data.profile.childImageSharp.fluid}
                     alt={'Profile picture'}
                     className={css.profilePicture}
                  />
               )}
               <p>
                  I am a thoughtful and strategic thinker with{' '}
                  {yearsOfExperience} years of experience, capable of leading
                  teams to deliver customer focused solutions that scale and are
                  resilient over time. I am an active listener that challenges,
                  empowers and inspires the next generation of problem solving
                  leaders through hands-on mentorship, coaching and knowledge
                  sharing.
               </p>
               <p>
                  As of December 10th, 2023 I have joined the RulesLab
                  organization as a technical leader in the Design and
                  Management tower. Our goal is to create the premier
                  Decisioning platform at{' '}
                  <a
                     href="https://www.capitalone.com/tech/software-engineering/"
                     target="_blank"
                  >
                     Capital One
                  </a>{' '}
                  .
               </p>
               <p>
                  Prior to Capital One I spent 16 years at{' '}
                  <a href="https://www.nasa.gov/goddard/" target="_blank">
                     NASA's Goddard Space Flight Center (GSFC)
                  </a>{' '}
                  as the Application Development Lead for the PAAC V contract.
                  At GSFC I crafted a number of cool (and sometimes important
                  but not so cool) projects. I coached developers of all
                  seniorities, establishing industry best practices such as
                  agile, automated testing, Continuous Integration, Continuous
                  Delivery and more.
               </p>
               <p>
                  In addition I ran a bi-weekly{' '}
                  <a
                     href="https://www.youtube.com/@andreyoung4442/featured"
                     target="_blank"
                  >
                     developer meetup
                  </a>{' '}
                  at NASA, where we discussed various development topics ranging
                  from AWS lessons learned, microservice architecture, and
                  Imposter Syndrome to knowing how to say "No" to a customer and
                  having them say "thank you" afterwards.
               </p>
               <p>
                  I love growing teams, coaching, development, learning and
                  sharing the things I've learned. See my resume and other
                  interests below.
               </p>{' '}
               <ContactDetail />
            </div>
         </div>
      </SiteSection>
   )
}

export default Profile
