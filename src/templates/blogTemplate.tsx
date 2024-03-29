import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import Layout from '../components/layout'
import Nav from '../components/nav'

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

const links = {
   home: { title: 'Home', target: '/' },
   profile: { title: 'Profile', target: '/#profile' },
   resume: { title: 'Resume', target: '/#resume' },
   podcasts: { title: 'Podcasts', target: '/#podcastQueue' },
   devGroup: { title: 'Dev Group', target: '/#devGroup' },
   blog: { title: 'Blog', target: '/#blog' },
}

export default function BlogTemplate({ data }) {
   const theme = useTheme()
   const css = useStyles(theme)

   const { markdownRemark } = data
   const { frontmatter, html } = markdownRemark
   return (
      <Layout>
         <Nav active="blog" links={links}></Nav>
         <div className={css.container}>
            <div className={css.blogPost}>
               <h1>{frontmatter.title}</h1>
               <h2>{frontmatter.date}</h2>
               <div
                  className={css.blogPostContent}
                  dangerouslySetInnerHTML={{ __html: html }}
               />
            </div>
         </div>
      </Layout>
   )
}

export const pageQuery = graphql`
   query($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
         html
         frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
         }
      }
   }
`
