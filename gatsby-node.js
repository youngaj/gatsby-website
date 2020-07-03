exports.createPages = async ({ actions, graphql, reporter }) => {
   const { createPage } = actions

   const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.tsx`)
   const mdxBlogPostTemplate = require.resolve(
      `./src/templates/MdxBlogTemplate.tsx`
   )

   const result = await graphql(`
      {
         allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
         ) {
            edges {
               node {
                  frontmatter {
                     slug
                  }
               }
            }
         }
         blogPosts: allMdx {
            nodes {
               frontmatter {
                  title
                  slug
                  date
               }
            }
         }
      }
   `)

   // Handle errors
   if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
   }

   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
         path: `blog/${node.frontmatter.slug}`,
         component: blogPostTemplate,
         context: {
            // additional data can be passed via context
            slug: node.frontmatter.slug,
         },
      })
   })

   result.data.blogPosts.nodes.forEach(node => {
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
