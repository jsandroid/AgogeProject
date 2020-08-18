const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const templates = {
    news: path.resolve('./src/templates/News.js'),
    article: path.resolve('./src/templates/Page.js')
  }
  const blogPostTemplate = require.resolve(`./src/templates/Page.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              doctype
            }
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
    const template = templates[node.frontmatter.doctype]
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })
}