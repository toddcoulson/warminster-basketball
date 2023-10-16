import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Clearances({data}) {
  let passHTML = '';
  data.allMarkdownRemark.nodes.forEach(element => {
    if(element.html.substring(0, 100).toLowerCase().includes('<h1>security clearances')) passHTML = element.html
  });
  console.log("passhtml: ", passHTML)
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