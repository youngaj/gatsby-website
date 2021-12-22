// Gatsby supports TypeScript natively!
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StyledButton from './styledButton'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'
import { info } from '../data/info'

import ImageOverlay from './imageOverlay'
import { useWindowSize } from '../hooks/useWindowSize'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   textSpacing: {
      marginBottom: theme.spacing(4),
   },
}))

const Welcome = () => {
   const theme = useTheme()
   const css = useStyles(theme)
   const dimensions = useWindowSize()

   //-- leave room for the menu on larger screens
   const heroHeight =
      dimensions.width > 600 ? dimensions.height - 75 : dimensions.height

   const imageCss = {
      text: {
         textAlign: 'center',
      },
      image: {
         height: `${heroHeight}px`,
      },
   }

   const data = useStaticQuery(graphql`
      query {
         file(ext: { eq: ".jpg" }, name: { eq: "texture" }) {
            childImageSharp {
               fluid {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return (
      <ImageOverlay img={data.file} css={imageCss}>
         <h1>
            <div className={[css.pt85, css.wt100].join(' ')}>
               I'm Andre Young
            </div>
            <span className={[css.pt70, css.wt700].join(' ')}>
               Sr. Software Engineering Manager
            </span>
         </h1>
         <div className={[css.pt22, css.textSpacing].join(' ')}>
            {info.me.age} years young, husband and father, code addict
         </div>
         <a href="#profile">
            <StyledButton>Know me better</StyledButton>
         </a>
      </ImageOverlay>
   )
}

export default Welcome
