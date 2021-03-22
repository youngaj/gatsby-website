import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

import { info } from '../data/info'
import dayjs from 'dayjs'
import useWindowSize from '../utils/useWindowSize'
import ContactDetail from './contactDetails'
import Divider from './presntation/divider'
import SubHeading from './presntation/subHeading'
import SiteSection from './presntation/siteSection'

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
                  Washington D.C. metro area. Highly motivated senior software
                  engineering manager and tech lead with over{' '}
                  {yearsOfExperience} years of hands on experience.
               </p>
               <Divider />
               <p className={css.mutedText}>
                  As of April 2020 I joined the Focus Organization at Capital
                  One where I have the pleasure of leading leading 2 teams as a
                  Senior Software Egineering Manager.
               </p>
               <p className={css.mutedText}>
                  Formerly I spent 16 years at NASA's Goddard Space Flight
                  Center as the Application Development Lead for the PAAC
                  contract, where I crafted a number of cool (and sometimes
                  important but not so cool) projects. I also coached developers
                  as well introduced, setup and operated engineering principles
                  and tools such as agile, automated testing, Continuous
                  Integration, Continous Delivery and more.
               </p>
               <p className={css.mutedText}>
                  In addition I ran a bi-weekly developer meetup at NASA, where
                  we discussed various development topics ranging from AWS
                  lessons learned, microservices architecture, and Imposter
                  Syndrome to knowing how to say "No" to a customer and having
                  them say "thank you" afterwards.
               </p>
               <p className={css.mutedText}>
                  I love growing teams, coaching, development, learning and
                  sharing the things I've learned with anyone willing to listen.
                  See my resume and other interests below.
               </p>{' '}
               <ContactDetail />
            </div>
            {dimensions.windowWidth > theme.breakpoints.values.md && (
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
