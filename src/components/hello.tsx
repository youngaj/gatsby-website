import React from 'react'
import Img from 'gatsby-image'
import StyledButton from './styledButton'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   uppercase: {
      textTransform: 'uppercase',
   },
   container: {
      display: 'grid',
      msGridColumns: '1fr',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('md')]: {
         msGridColumns: '1fr 1fr',
         gridTemplateColumns: '1fr 1fr',
      },
   },
}))

const Hello = () => {
   const theme = useTheme()
   const css = useStyles(theme)

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
            <h2>
               <span className={css.uppercase}>Hello, My name is Andre.</span>
            </h2>
            <StyledButton>Download Resume</StyledButton>
         </div>
         <div>
            <Img
               fluid={data.profile.childImageSharp.fluid}
               alt={'Profile picture'}
            />
         </div>
      </div>
   )
}

export default Hello
