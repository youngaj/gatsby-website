// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import StyledButton from '../components/styledButton'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'
import moment from 'moment'
import ImageOverlay from './imageOverlay'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   textSpacing: {
      marginBottom: theme.spacing(4),
   },
}))

//-- helps calculate the window size
let defaultWidth
let defaultHeight
if (typeof window !== `undefined`) {
   defaultHeight = window.innerHeight
   defaultWidth = window.innerWidth
}
const useWindowSize = () => {
   const [dimensions, setDimensions] = useState({
      windowHeight: defaultHeight,
      windowWidth: defaultWidth,
   })
   useEffect(() => {
      const handler = () =>
         setDimensions({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
         })
      window.addEventListener(`resize`, handler)
      return () => window.removeEventListener(`resize`, handler)
   }, [])
   return dimensions
}

const Hero = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const age = moment().diff('1979-09', 'years')
   const viewHeight = useWindowSize().windowHeight
   const imageCss = {
      text: {
         textAlign: 'center',
      },
      image: {
         border: '1px solid pink',
         height: `${viewHeight}px`,
      },
      container: {
         border: '1px solid green',
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
            {age} years young, husband and father, code addict
         </div>
         <StyledButton>Know me better</StyledButton>
      </ImageOverlay>
   )
}

export default Hero
