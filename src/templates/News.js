import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

function getDate( date ) {
  const month = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  date = date.split('-')
  var m = date[1] - 1
  return (`${month[m]} ${date[2]}, ${date[0]}`)
}

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>      
      <div className="blog-post-container ">
        <div className="news-post content">
          <h1>{frontmatter.title}</h1>
          <h2>{getDate(frontmatter.date)}</h2>
          <div
            className="news-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
        author
        description
      }
    }
  }
`