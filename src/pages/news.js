import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from '../components/SEO';

function getDate( date ) {
  const month = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  date = date.split('-')
  var m = date[1] - 1
  return (`${month[m]} ${date[2]}, ${date[0]}`)
}

function MostRecent ({ newsArticle }) {
  var slug = newsArticle.node.fields.slug
  var date = getDate(newsArticle.node.frontmatter.date)
  console.log(slug)
  return(
    <div className='mostRecent inner'>
      <h1>News</h1>
      <h2>Most Recent News Article </h2>
      <h2 className='title'>{newsArticle.node.frontmatter.title}</h2>
      <div class='byline'>
        <h3 className='date'>{date}</h3> 
        <h3 className='author'>By {newsArticle.node.frontmatter.author}</h3>
      </div>
      <span>{newsArticle.node.frontmatter.excerpt}</span>
      <Link to={slug} className='roundButton'>Read More</Link>
    </div>
  )
}

function NewsArchive({ news }) {
  if (news.length < 1) {
    return (
      <div className='newsArchive'> 
        <h2>Past News</h2>
        <p>There are no news articles that pre-date the most recent article sampled above</p>
      </div>
    )       
  } else {
    return (
      <div className='newsArchive'>
        <h2>Past News</h2>
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.node.fields.slug}><h3>{article.node.frontmatter.title}</h3></a>
              <span>{article.node.frontmatter.date} - {article.node.frontmatter.author}</span>
              <span>{article.node.frontmatter.date}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
}

export default function News({ data }) {
  var mostRecent = data.allMarkdownRemark.edges[0]

  return (
    <Layout title = 'The Agoge Project News Page'
        description = 'Learn the latest about The Agoge Project here'>
      <div className='content'>
        <MostRecent newsArticle= {mostRecent} />
        <NewsArchive news={data.allMarkdownRemark.edges.slice(1)} />
      </div>
    </Layout>
    
  )
  
}

export const pageQuery = graphql`
  query  {
    allMarkdownRemark(filter: {frontmatter: {doctype: {eq: "news"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            date
            excerpt
            title
          }
        }
      }
    }
  }
  
`