import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const PageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const experm = data.allWpPost.edges
  console.log(experm)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <div className="postlist">
        {experm.map(({ node }) => (
          <span>{node.title}</span>
        ))}
      </div>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
