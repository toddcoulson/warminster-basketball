import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Information({data}) {
  let passHTML = '';
  data.allMarkdownRemark.nodes.forEach(element => {
    if(element.html.substring(0, 100).toLowerCase().includes('important information')) passHTML = element.html
  });
  return <>
  <Layout>
  <div
    dangerouslySetInnerHTML={{ __html: passHTML }}
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