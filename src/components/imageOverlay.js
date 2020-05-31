import React from 'react'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'
import MissingImage from './missingImage'

//--- Base CSS
const baseContainerCss = {
   position: 'relative',
   width: '100%',
   overflow: 'hidden',
}
const baseTextCss = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   display: 'inline-table',
   verticalAlign: 'middle',
   paddingLeft: '40px',
   paddingRight: '40px',
   width: '100%',
   '& a': {
      color: 'white',
   },
}
const baseImageCss = {
   position: 'relative',
}
const baseOverlayCss = {
   position: 'absolute',
   top: 0,
   right: 0,
   bottom: 0,
   left: 0,
   //background: `linear-gradient(to bottom, rgba(29, 55, 135, 0.7), rgba(0, 0, 0, 0.7))`,
   // opacity:'0.8'
}
//--- End Base CSS

const useStyles = makeStyles((theme) => {
   const local = {
      image: (settings) => ({ ...settings.imageCss }),
      imageContainer: (settings) => ({ ...settings.containerCss }),
      text: (settings) => ({ ...settings.textCss }),
      overlay: (settings) => ({ ...settings.overlayCss }),
      centerCrop: {
         top: '50%',
         left: '50%',
         height: '100%',
         transform: 'translate(-50%, -30%)',
      },
   }
   const shared = sharedStyles(theme)
   const styles = { ...shared, ...local }
   return styles
})

const createCssSettings = (
   theme,
   containerOverrides,
   imageOverrides,
   textOverrides,
   overlayOverrides
) => {
   const settings = {
      theme: theme,
      containerCss: { ...baseContainerCss, ...containerOverrides },
      imageCss: { ...baseImageCss, ...imageOverrides },
      textCss: { ...baseTextCss, ...textOverrides },
      overlayCss: { ...baseOverlayCss, ...overlayOverrides },
   }
   return settings
}

const ImageOverlay = (props) => {
   const { image, alt, children, showCaption } = props
   const inputCss = props.css || {}
   const containerOverrides = inputCss ? inputCss.container : {}
   const imageOverrides = inputCss ? inputCss.image : {}
   const textOverrides = inputCss ? inputCss.text : {}
   const overlayOverrides = inputCss ? inputCss.overlay : {}
   const theme = useTheme()
   const settings = createCssSettings(
      theme,
      containerOverrides,
      imageOverrides,
      textOverrides,
      overlayOverrides
   )

   const css = useStyles(settings)
   return (
      <div className={css.imageContainer}>
         {image && image.childImageSharp ? (
            <Img
               fluid={image.childImageSharp.fluid}
               className={[css.image, css.crop ? css.centerCrop : ''].join(' ')}
               alt={alt}
            />
         ) : (
            <div>
               <MissingImage
                  css={settings.imageCss}
                  className={[css.image, css.crop ? css.centerCrop : ''].join(
                     ' '
                  )}
                  showCaption={showCaption}
                  alt={alt}
               />
            </div>
         )}
         <div className={css.overlay}></div>
         <span className={css.text}>{children}</span>
      </div>
   )
}

export default ImageOverlay
