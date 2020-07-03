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

   console.log('Hello from blog template', data.mdx)

   const { frontmatter, html, body } = data.mdx
   return (
      <div className={css.container}>
         <h1 className={css.mutedText}>Hello World</h1>
         <div className={css.blogPost}>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div className={[css.blogPostContent, css.mutedText].join(' ')}>
               {html}
            </div>
         </div>
      </div>
   )
}

export const pageQuery = graphql`
   query($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
         frontmatter {
            title
            slug
            date
         }
         html
         body
      }
   }
`
