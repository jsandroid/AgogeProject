import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// data prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title} description={frontmatter.description} >
      <div className="blog-post-container ">
        <div className="blog-post content">
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
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