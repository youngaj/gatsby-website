import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { sharedStyles } from '../styles/global'

const useStyles = makeStyles((theme) => ({
   ...sharedStyles(theme),
   image: (settings) => ({ ...settings.imageCss }),
}))

const createCssSettings = (theme, containerOverrides, imageOverrides) => {
   const settings = {
      theme: theme,
      containerCss: { ...containerOverrides },
      imageCss: { ...imageOverrides },
   }
   return settings
}

const MissingImage = (props) => {
   const theme = useTheme()
   const imageOverrides = props.css || {}
   const settings = createCssSettings(theme, {}, imageOverrides)
   const css = useStyles(settings)

   const data = useStaticQuery(graphql`
      query {
         file(ext: { eq: ".jpg" }, name: { eq: "texture" }) {
            childImageSharp {
               fluid(maxHeight: 960) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return (
      <figure>
         <Img
            fluid={data.file.childImageSharp.fluid}
            alt={'Missing image stand in'}
            className={css.image}
         />
      </figure>
   )
}

export default MissingImage
