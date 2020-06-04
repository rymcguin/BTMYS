import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import Book from "../components/BOD/Book"
import Card from "@material-ui/core/Card"

const IndexPage = ({ data }) => {
  const books = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)
  const paths = data.allMarkdownRemark.edges.map(({ node }) => node.fields)
  const numBooks = books.length - 1
  const [bookId, setbookId] = useState(books[numBooks].bookID - 1)
  const slug = paths[bookId].slug
  const book = books[bookId]
  
  return (
    <Layout>
      <SEO title="Libarary" />
      <div>

      </div>
    </Layout>
  )
}
export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            bookID
            bookTitle
            date(formatString: "MMM Do, YYYY")
            bookImageUrl
            socialMediaImageUrl
            tags
            description
            amazonLink
            authors {
              name
              title
            }            
          }
          fields{
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
