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
      gridTemplateColumns: '1fr 3fr',
      gridGap: theme.spacing(2),
      border: `1px solid ${colors.muted}`,
      borderRadius: '10px',
      padding: theme.spacing(2),
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
            <ColorBox>
               <div>
                  <div className={[css.pt65, css.wt700].join(' ')}>
                     {post.day}
                  </div>
                  <div>{post.monthYear}</div>
               </div>
            </ColorBox>
            <span style={{ textAlign: 'left' }}>
               <Link to={`/blog/mdx/${post.slug}`} className={css.mutedText}>
                  {post.title}
               </Link>
            </span>
         </div>
      </div>
   )
}

export default BlogPost
