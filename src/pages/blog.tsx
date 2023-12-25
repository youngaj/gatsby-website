import Layout from '../components/layout'
import Nav from '../components/nav'

import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { colors, sharedStyles } from '../styles/global'
import React from 'react'
import { graphql } from 'gatsby'
import SiteSection from '../components/presentation/siteSection'
import SubHeading from '../components/presentation/subHeading'
import CenterDivider from '../components/presentation/centerDivider'
import { Blog } from '../models'
import BlogPost from '../components/BlogPost'
import {
   filterUnPublishedBlogPosts,
   formatBlogPosts,
} from '../utils/blogPostService'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gap: '.5rem',
      gridTemplateColumns: '1fr 1fr',
      [theme.breakpoints.down('sm')]: {
         gridTemplateColumns: '1fr',
         margin: 'auto',
      },
   },
}))

const BlogListPage = ({ data }) => {
   const theme = useTheme()
   const css = useStyles(theme)

   const allPosts: Blog[] = data.allMarkdownRemark.nodes.map((x) =>
      formatBlogPosts(x)
   )
   const posts = filterUnPublishedBlogPosts(allPosts)

   return (
      <Layout>
         <Nav active="blog"></Nav>
         <SiteSection bg="dark">
            <h2>
               <SubHeading>Blog Posts</SubHeading>
            </h2>
            <p className={css.mutedText}>
               I started a management training course recently and there are a
               number of papers that are due throughout the course. This process
               has been helping me to improve my writing skills and more
               importantly to feel more comfortable creating and publishing
               smaller bits of useful information. Below are a sample of some of
               those recent assignments and other inspirations that have been
               unleashed.
            </p>
            <span>
               <CenterDivider />
            </span>
            <div className={css.container}>
               {posts.map((session, index) => (
                  <div>
                     <BlogPost post={session} />
                  </div>
               ))}
            </div>
         </SiteSection>{' '}
      </Layout>
   )
}

export default BlogListPage

export const pageQuery = graphql`
   query MyQuery {
      allMarkdownRemark {
         nodes {
            frontmatter {
               date
               publish
               slug
               tags
               title
               summary
            }
         }
      }
   }
`
