import React, { useState } from "react"
import { Link} from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import coffeeflask from "../../content/assets/coffeeflask.svg"
import menudot from "../../content/assets/menu_dot.svg"
import Pin from "./pin"
import Img from "gatsby-image"


export default () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            order
            cover {
                childImageSharp{
                  fluid( maxWidth: 1400, quality: 75 ) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
            }
          }
        }
      }
    }
  }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const [hidden, setState] = useState('fixed z-0 offscreenright');

  function toggle() {
    hidden ? setState('bg-white fixed z-5 w-100 vh-100 overflow-y-scroll overflow-x-hidden overflow-scroll momentum-scroll animated faster ph4 slideInRight') : setState('fixed z-0 offscreenright');
  }

  return (
    <div>

      <Pin>
          <div> 
            <div className="w-100 bb b--black-10 shadow-5">
              <div className="ph3 ph4-ns pv1">
                <div className="mw9 center">
                    <nav className="flex justify-between">
                      <Link className="logo-font f5 f4-ns link dim theme-100 b dib mr3 flex items-center" to="/" >
                        <img className="w3 h3  mr3" src={coffeeflask} alt='the coffee flask logo 1922'/>
                        {siteTitle}
                      </Link>
                      <div className="pa2" onClick={toggle}>
                        <div className="flex items-center pv2">
                          <div className="link dim gray f6 f5-ns dib " > <img className="w2 h2 " src={menudot} alt='menu'/> </div>
                        </div>
                      </div>
                    </nav>
                </div>
              </div>
            </div>
          </div>
      </Pin>

    
      <div id="contents" className={hidden} >
        <div className="w-100 pb6 cf mb6">
            <div className="w-100 mw9 center pt4 pb6 ">
               <div className="flex flex-wrap">
                    {posts.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <div className="w-100 w-50-m w-25-l pr3 pb4" key={node.fields.slug}>
                          <Link className="link dim black" to={node.fields.slug}>
                              <div className="flex flex-column">
                                  <div className="aspect-ratio aspect-ratio--16x9 mb0">
                                    <Img className="aspect-ratio aspect-ratio--16x9" fluid={node.frontmatter.cover.childImageSharp.fluid} />
                                  </div>
                                  <div className="mt0">
                                    <h6 className="fw4 lh-copy dark-red mb1 ttu tracked">{node.frontmatter.category}</h6>
                                    <h3 className="f4 mv0 pb2 pr3">{title}</h3>
                                    <p className="f6 fw4 lh-copy gray mv0 pb4 tracked-sm pr3">{node.excerpt.replace(/\..*$/i, '.')}</p>
                                  </div>
                              </div>
                          </Link>
                        </div>
                      )
                    })}
              </div>
            </div>  
          </div>
      </div>


      </div>
  )
}
