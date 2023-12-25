exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions

   const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.tsx`)
   const mdxBlogPostTemplate = require.resolve(`./src/templates/MdxBlogTemplate.tsx`)

   const result = await graphql(`
      {
         blogPosts: allMarkdownRemark {
            nodes {
               frontmatter {
                  title
                  slug
                  date
                  publish
                  summary
                  tags
               }
               html
            }
         }
      }
   `)

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
   }

   result.data.blogPosts.nodes.forEach(node => {
      console.log(`creating page: ${node.frontmatter.title}`)
      createPage({
         path: `blog/${node.frontmatter.slug}`,
         component: blogPostTemplate,
         context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
         },
      })
      createPage({
         path: `blog/mdx/${node.frontmatter.slug}`,
         component: mdxBlogPostTemplate,
         context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
         },
      })
   })
}
