import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function announcements({data}) {
  console.log(data, data.allMarkdownRemark.nodes[0].html)
  return (<>
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[0].html }}
      />
    </Layout>
  </>)
}


export const query = graphql`
query announcementsPage {
  file(relativePath: {eq: "wbaLogo.jpg"}) {
    childImageSharp{
        gatsbyImageData(layout: FIXED)
    }
    id
    name
  }
  allMarkdownRemark {
    nodes {
      html
      id
    }
  }
}
`
