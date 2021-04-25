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
          id
          slug
          content
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
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
                alt="Home menu"
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
              <StaticImage
                src="../images/choosemenu.png"
                alt="Choose menu"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
              <StaticImage
                src="../images/detailmenu.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Detail menu"
                style={{ margin: `40px 0`, width: `60px`, height: `60px` }}
              />
            </div>
          </div>
          <div className="choose">
            <div className="logowrapper">
              <StaticImage src="../images/logo.png" />
            </div>
            <div className="choose-menu">
              <ul>
                <li>Einfamilienhaus</li>
                <li>Mehrfamilienhaus</li>
                <li>Büro</li>
                <li>Lagerhalle</li>
                <li>Gewerbe</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="list-wrapper">
            {data.allWpPost.edges.map(({ node }) => (
              <div className="card" key={node.id}>
                <div className="card-image">
                  {/* <StaticImage
                    src={node.featuredImage.node.sourceUrl}
                    alt="Card image"
                  /> */}
                  <img src={node.featuredImage.node.sourceUrl} />
                </div>
                <div className="card-descr">
                  <h2>{node.title}</h2>
                </div>
                <div className="card-icon">icon back</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Objectlist
