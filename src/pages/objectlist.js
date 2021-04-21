import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import arrowback from "../images/arrowback.svg"

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

const Objectlist = ({ data }) => {
  const experm = data.allWpPost.edges
  console.log(experm)
  return (
    <div className="pagelistwrapper">
      <div className="pagelist">
        <div className="left">
          <div className="menu">
            <div className="menu-top">
              <img src={arrowback} />
            </div>
            <div className="menu-buttons">
              <StaticImage
                src="../images/homemenu.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
              <StaticImage
                src="../images/choosemenu.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
              <StaticImage
                src="../images/detailmenu.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
            </div>
          </div>
          <div className="choose">
            <div className="logowrapper">
              <StaticImage src="../images/logo.png" />
            </div>
          </div>
        </div>
        <div className="right">content</div>
      </div>
    </div>
  )
}

export default Objectlist
