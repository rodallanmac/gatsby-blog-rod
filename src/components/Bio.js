import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className="w-100 pv4 cf">
            <div className="mw7 center ph4">
              <section className="flex-m flex-l items-center pv3">
                <Image className="br-100 ba b--white bw1 shadow-5"
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{minWidth: '80px'}}
                />
                <p className="avenir fw3 f6 measure pl3-ns lh-copy">
                  <strong>{author}</strong> who lives and works in Africa building useful things.
                  {` `}
                  <a className="link green" href={`https://twitter.com/${social.twitter}`}>
                    You should follow him on Twitter
                  </a>
                </p>
              </section>
              </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80 ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
