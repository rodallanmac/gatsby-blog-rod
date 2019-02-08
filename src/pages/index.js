import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import coffeeflask from "../../content/assets/coffeeflaskblack.svg"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="pa4 pa5-l">
        <div className="mw8 center">

        <div className="mt0 mb4 logo-font flex-ns items-center">
           <img className="w5 h5  mr3" src={coffeeflask} alt='the coffee flask logo 1922'/> 
           <div className="f-subheadline f-headline-ns fw6" style={{ lineHeight: '1em' }}>All about<span style={{ color: 'rgb(230,60,10)' }}> Coffee</span></div>
        </div>

        <div className="measure">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div key={node.fields.slug}>

                      <h3 className="f4 mv0 pb2"><Link className="link dim black" to={node.fields.slug}><span className="gray fw1 pr2">{node.frontmatter.order}</span> {title}</Link></h3>
                      <p className="f6 lh-copy gray mv0 pb4" dangerouslySetInnerHTML={{ __html: node.excerpt }} />

                    </div>
                  )
                })}

                <Bio />
        </div>
        </div>
        </div>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            order
            img
          }
        }
      }
    }
  }
`
