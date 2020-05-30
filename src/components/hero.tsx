// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import StyledButton from '../components/styledButton'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import sharedStyles from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   textSpacing: {
      marginBottom: theme.spacing(4),
   },
}))

const Hero = (props: PageProps) => {
   const theme = useTheme()
   const css = useStyles(theme)

   const data = useStaticQuery(graphql`
      query {
         file(ext: { eq: ".jpg" }, name: { eq: "texture" }) {
            id
            name
            publicURL
            childImageSharp {
               fluid(maxHeight: 960) {
                  ...GatsbyImageSharpFluid
               }
            }
         }
      }
   `)

   return (
      <header
         style={{
            height: 'calc(100% - 65px)',
            position: 'absolute',
            display: 'table',
            zIndex: 5,
            backgroundPositionX: '50%',
            width: '100%',
         }}
      >
         <div
            style={{
               width: '100%',
               height: '100%',
               zIndex: 5,
               display: 'table-cell',
               position: 'relative',
               backgroundImage: `url(${data.file.publicURL})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'repeat',
            }}
         ></div>
         <div
            style={{
               zIndex: 15,
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               position: 'absolute',
               verticalAlign: 'middle',
               textAlign: 'center',
            }}
         >
            <h1 className={css.center}>
               <div className={[css.pt80].join(' ')}>I'm Andre Young</div>
               <span className={css.pt85}>
                  Senior Software Engineering Manager
               </span>
            </h1>
            <div className={[css.pt30, css.textSpacing].join(' ')}>
               40 years young, husband and father, code addict
            </div>
            <StyledButton text="Know me better"></StyledButton>
         </div>
      </header>
   )
}

export default Hero
