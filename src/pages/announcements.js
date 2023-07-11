import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

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
  allMarkdownRemark {
    nodes {
      html
      id
    }
  }
}
`
