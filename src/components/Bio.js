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
          <div className="w-100 pa4 bg-theme-75" >
            <div className="mw8 center ph4-ns">
              <div className="flex-m flex-l items-center pv3">
                <Image className="br-100  shadow-5 mr4"
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{minWidth: '80px'}}
                />
                <p className="avenir theme-0-30 w-70 fw3 f6  pl3-ns lh-copy tracked-sm">
                  <strong>{author}</strong> lives and works at Swallows Rest, in the hills outside the sea-side city of Durban, South Africa on the east coast of Africa. Rod likes to build usefull things.
                  {` `}
                  <a className="link theme-25" href={`https://twitter.com/${social.twitter}`}>
                    You should follow him on Twitter
                  </a>
                </p>
              </div>
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
