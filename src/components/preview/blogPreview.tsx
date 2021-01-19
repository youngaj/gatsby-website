import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'

import { sharedStyles } from '../../styles/global'
import SiteSection from '../presntation/siteSection'
import SubHeading from '../presntation/subHeading'
import { Link } from 'gatsby'
import StyledButton from '../styledButton'
import CenterDivider from '../presntation/centerDivider'
import BlogPost from '../BlogPost'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
   },
}))

const getSubset = (posts) => {
   let subset = []
   if (posts) {
      const today = new Date().getTime()
      subset = posts
         .filter((x) => {
            let published = false
            if (x.frontmatter.publish) {
               const publishedDate = new Date(x.frontmatter.publish)
               if (publishedDate.getTime() <= today) {
                  published = true
               }
            }
            console.log('Blog post:', published, x)
            return published
         })
         .slice(0, 12)
   }
   return subset
}

const BlogPreview = ({ posts }) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const [blogPosts, setBlogPosts] = useState([])

   useEffect(() => {
      setBlogPosts(getSubset(posts))
   }, [posts])

   return (
      <SiteSection>
         <h2>
            <SubHeading>Recent Blog Posts</SubHeading>
         </h2>
         <p className={css.mutedText}>
            I don't often write blog posts but here are a few from my latest
            collection.
         </p>
         <span>
            <CenterDivider />
         </span>
         <div className={css.container}>
            {blogPosts.map((post, index) => (
               <BlogPost
                  post={post}
                  key={`blog-preview-${post.slug}-${index}`}
               />
            ))}
         </div>
         <div>
            <Link to="/blog">
               <StyledButton>See All Blog Posts </StyledButton>
            </Link>
         </div>
      </SiteSection>
   )
}

export default BlogPreview
