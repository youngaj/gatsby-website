import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      maxWidth: '1000px',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
   },
   blogPost: {},
   blogPostContent: {},
}))

export default function MdxBlogTemplate({ data }) {
   const theme = useTheme()
   const css = useStyles(theme)

   console.log('Hello from blog template', data)

   const { frontmatter, html } = data.markdownRemark
   return (
      <div className={css.container}>
         <div className={css.mutedText}>MDX tempate</div>
         {frontmatter && (
            <div className={css.blogPost}>
               <h1>{frontmatter.title}</h1>
               <h2>{frontmatter.date}</h2>
               <div
                  className={[css.blogPostContent, css.mutedText].join(' ')}
                  dangerouslySetInnerHTML={{ __html: html }}
               ></div>
            </div>
         )}
      </div>
   )
}

export const pageQuery = graphql`
   query($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
         frontmatter {
            title
            slug
            date
         }
         html
      }
   }
`
