import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles } from '../styles/global'
import Layout from '../components/layout'
import Nav from '../components/nav'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
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

export default function MdxBlogTemplate({ data }) {
   const theme = useTheme()
   const css = useStyles(theme)

   console.log('Hello from blog template', data)

   const { frontmatter, html } = data.markdownRemark
   return (
      <Layout>
         <Nav active="blog" links={links}></Nav>
         <div className={css.content}>
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
