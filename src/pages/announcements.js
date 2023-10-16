import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function announcements({data}) {
  let passHTML = '';
  data.allMarkdownRemark.nodes.forEach(element => {
    if(element.html.substring(0, 100).toLowerCase().includes('<h1>announcements')) passHTML = element.html
  });
  return (<>
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: passHTML }}
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
