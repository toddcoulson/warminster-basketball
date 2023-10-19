import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Clearances({data}) {
  let passHTML = '';
  data.allMarkdownRemark.nodes.forEach(element => {
    const testStr = element.html.split('</h1>')[0];
    if(testStr.toLowerCase().includes('clearances')) passHTML = element.html
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