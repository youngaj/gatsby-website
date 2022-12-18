import dayjs from 'dayjs'
import { Blog } from '../models'

export const formatBlogPosts = (input): Blog => {
   const date = dayjs(input.frontmatter.publish)

   const post: Blog = {
      date: date.toDate(),
      day: date.format('D'),
      monthYear: date.format('MMM-YYYY'),
      publish: new Date(input.frontmatter.publish),
      slug: input.frontmatter.slug,
      title: input.frontmatter.title,
      tags: input.frontmatter.tags?.split(',').map((x) => x.trim()),
      summary: input.frontmatter.summary,
      html: input.frontmatter.html,
   }
   return post
}

export const filterUnPublishedBlogPosts = (posts: Blog[]): Blog[] => {
   let subset: Blog[] = []
   if (posts) {
      const today = new Date().getTime()
      subset = posts
         .filter((x) => {
            let published = false
            if (x.publish) {
               const publishedDate = new Date(x.publish)
               if (publishedDate.getTime() <= today) {
                  published = true
               }
            }
            console.log(
               `${x.title} is published: ${x.publish} with value of ${published}`
            )
            return published
         })
         .sort((a, b) => b.publish.getTime() - a.publish.getTime())
   }
   return subset
}
