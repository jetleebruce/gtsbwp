import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const PageQuery = graphql`
  query currentPostQuery($id: String) {
    wpPost(id: { eq: $id }) {
      excerpt
      title
      id
    }
  }
`

const Posts = ({ data }) => {
  const post = data.wpPost
  console.log(post)
  return (
    <Layout>
      <div>
        <h2>Post Template</h2>
        <p>{post.title}</p>
      </div>
    </Layout>
  )
}

export default Posts
