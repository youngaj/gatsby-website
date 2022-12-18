import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { sharedStyles, colors } from '../styles/global'
import ColorBox from '../components/presentation/colorBox'
import { Link } from 'gatsby'
import { Blog } from '../models'

const useStyles = makeStyles((theme: Theme) => ({
   ...sharedStyles(theme),
   post: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(2),
      padding: theme.spacing(2),
   },
   details: {
      display: 'grid',
      gridTemplateColumns: '90px 3fr',
      gridGap: theme.spacing(2),
      padding: theme.spacing(2),
   },
   dateText: {
      color: 'white',
   },
}))

interface BlogProps {
   post: Blog
}

const BlogPost = (props: BlogProps) => {
   const theme = useTheme()
   const css = useStyles(theme)
   const { post } = props
   return (
      <div className={css.post}>
         <div className={css.details}>
            <Link to={`/blog/mdx/${post.slug}`} className={css.dateText}>
               <ColorBox>
                  <div>
                     <div className={[css.pt65, css.wt700].join(' ')}>
                        {post.day}
                     </div>
                     <div>{post.monthYear}</div>
                  </div>
               </ColorBox>
            </Link>
            <div style={{ textAlign: 'left' }}>
               <Link
                  to={`/blog/mdx/${post.slug}`}
                  className={[css.pt26].join(' ')}
               >
                  {post.title}
               </Link>
               <p className={[css.mutedText, css.pt22].join(' ')}>
                  {post.summary}
               </p>
            </div>
         </div>
      </div>
   )
}

export default BlogPost
