import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import Layout from '../components/layout'
import Nav from '../components/nav'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   blogPost: {
      maxWidth: '1440px',
      margin: '3rem',
   },
   blogPostTitle: {
      marginBottom: '1rem',
   },
   blogPostDate: {},
   blogHeading: {
      marginBottom: '3rem',
   },
   blogPostContent: {},
}))

export default function MdxBlogTemplate({ data }) {
   const theme = useTheme()
   const css = useStyles(theme)

   const { frontmatter, html } = data.markdownRemark
   return (
      <Layout>
         <Nav active="blog"></Nav>
         <div className={css.content}>
            {frontmatter && (
               <div className={css.blogPost}>
                  <div className={css.blogHeading}>
                     <h1 className={[css.blogPostTitle, css.pt50].join(' ')}>
                        {frontmatter.title}
                     </h1>
                     <span
                        className={[
                           css.blogPostDate,
                           css.mutedText,
                           css.pt22,
                        ].join(' ')}
                     >
                        {frontmatter.date}
                     </span>
                  </div>
                  <div
                     className={[css.blogPostContent, css.mutedText].join(' ')}
                     dangerouslySetInnerHTML={{ __html: html }}
                  ></div>
               </div>
            )}
         </div>
      </Layout>
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
