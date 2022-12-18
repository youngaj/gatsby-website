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
import CenterDivider from './presentation/centerDivider'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   heading: {
      textTransform: 'uppercase',
      marginBottom: '20px',
   },
   container: {
      display: 'grid',
      msGridColumns: '1fr',
      gridTemplateColumns: '1fr',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
         textAlign: 'left',
         msGridColumns: '1fr 1fr',
         gridTemplateColumns: '1fr 1fr',
      },
      marginLeft: '54px',
      marginRight: '54px',
      paddingLeft: '15px',
      paddingRight: '15px',
      '& p': {
         marginBottom: '10px',
      },
   },
}))

const Profile = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const dimensions = useWindowSize()
   const yearsOfExperience = dayjs().diff('1999-06-01', 'years')
   const data = useStaticQuery(graphql`
      query {
         profile: file(relativePath: { eq: "profile-1.jpg" }) {
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
               <p>
                  Andre Young, {info.me.age} years young, born and raised in the
                  Washington D.C. metro area. Deeply technical and product
                  focused engineering leader with over {yearsOfExperience} years
                  of hands on experience.
               </p>
               <CenterDivider />
               <p className={css.mutedText}>
                  I joined{' '}
                  <a
                     href="https://www.capitalone.com/tech/software-engineering/"
                     target="_blank"
                  >
                     Capital One
                  </a>{' '}
                  in April 2020 where I have the pleasure of leading the
                  Servicing Platforms Self Service organization. Our mission is
                  to improve and streamline the internal associate experience.
                  We are <i>the builders for the builders</i>, enabling others
                  to seamlessly and easily build innovative customer
                  experiences.
               </p>
               <p className={css.mutedText}>
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
               <p className={css.mutedText}>
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
               <p className={css.mutedText}>
                  I love growing teams, coaching, development, learning and
                  sharing the things I've learned. See my resume and other
                  interests below.
               </p>{' '}
               <ContactDetail />
            </div>
            {dimensions.width > theme.breakpoints.values.md && (
               <div>
                  <Img
                     fluid={data.profile.childImageSharp.fluid}
                     alt={'Profile picture'}
                  />
               </div>
            )}
         </div>
      </SiteSection>
   )
}

export default Profile
