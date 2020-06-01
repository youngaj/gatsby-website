import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'
import info from '../data/info'
import moment from 'moment'
import useWindowSize from '../utils/useWindowSize'
import ContactDetail from './contactDetails'
import Divider from './divider'

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

const Hello = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const dimensions = useWindowSize()
   const age = moment().diff(info.me.dob, 'years')
   const yearsOfExperience = moment().diff('1999-06-1', 'years')
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
      <div className={css.container}>
         <div>
            <h2 className={css.heading}>
               Hello, My name is {info.me.firstName}.
            </h2>
            <p>
               Andre Young, {age} years young, born and raised in the Washington
               D.C. metro area. Highly motivated senior software engineering
               manager and tech lead with over {yearsOfExperience} years of
               development experience.
            </p>
            <Divider />
            <p className={css.textGray}>
               As of April 2020 I started a new job with Capital One. Very
               excited to be joining an awesome team doing awesome work!
            </p>
            <p className={css.textGray}>
               Formerly I worked at NASA's Goddard Space Flight Center, where I
               spent most of my time crafting and working on cool (and sometimes
               important but not so cool) projects.
            </p>
            <p className={css.textGray}>
               I also ran a bi-weekly developer meetup at NASA, where we
               discussed various development topics ranging from code
               architecture to knowing how to say "No" to a customer and having
               them say "thank you" afterwards.
            </p>
            <p className={css.textGray}>
               I love development, love learning and sharing the things I've
               learned with anyone willing to listen. See my resume and other
               interests below.
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
   )
}

export default Hello
