import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Information({data}) {
  return <>
  <Layout>
  <div
    dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.nodes[1].html }}
/>
</Layout>
  </>
}
export const query = graphql`
query announcementsPage {
  allMarkdownRemark {
    nodes {
      html
      id
    }
  }
}
`