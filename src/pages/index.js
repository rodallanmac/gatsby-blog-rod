
import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Bio from "../components/Bio"
import SEO from "../components/seo"
import coffeeflask from "../../content/assets/coffeeflaskblack.svg"
import autoBind from 'auto-bind'


class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    console.log('href: ' +  this.props.location.href)
    this.state = { toggle: ''};
    autoBind(this);
  }

  toggleMenu = () => { 
    this.setState( { toggle: !this.state.toggle ? "fixed top-0 left-0  z-9999 fadeInUp " : ""} ) 
  }



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

        <div className="w-100">
          
            <div className={"pointer w-100 cf bg-black "} onClick={this.toggleMenu}>
              <div className="mw6 center logo-font  animated fast slideInDown">
                <div className="flex-column flex-hv-center vh-100 nt4">
                  <img className="center w5 h5 tc" src={coffeeflask} alt='the coffee flask logo 1922'/> 
                  <div className="f1 f-subheadline-ns fw6 tc red ph4" style={{ lineHeight: '1em' }}>All About Coffee</div>
                </div>
              </div>
            </div>


   


          
            <div id="contents" className={"bg-white w-100 animated faster ph4 " + this.state.toggle} >
               <div className="measure">
                    {posts.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <div key={node.fields.slug}>
                          <h6 className="fw4 lh-copy dark-red mb1 ttu tracked">{node.frontmatter.category}</h6>
                          <h3 className="f4 mv0 pb2 pr3"><Link className="link dim black" to={node.fields.slug}>{title}</Link></h3>
                          <p className="f6 fw4 lh-copy dar-gray mv0 pb4 tracked-sm" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                        </div>
                      )
                    })}
                </div>  
            </div>

            <Bio />
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
          }
        }
      }
    }
  }
`

