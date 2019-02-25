import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import coffeeflask from "../../content/assets/coffeeflask.svg"
import photographer from "../../content/assets/user.svg"
import Bio from "../components/Bio"
import Scrollable from "../components/scroll"


class BlogPostTemplate extends React.Component {
 
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

          <div className="flex flex-column animated fadeIn">


                    {/* Page Block for Headline Picture and Pagination*/}
                      <div className="w-100 cf nt6">
                        <div className="w-100 cover bg-bottom relative" style={{backgroundImage: 'url(' + post.frontmatter.img + '})'}}>

                            <div className="mw7 center">

                                  <div className="w-100 flex items-center vh-85 pt6-ns">
                                    <article>
                                        <h6  className="fw6 white tracked-mega mb0 ttu">{post.frontmatter.category}</h6>
                                        <h1 className="f2 f1-ns white fw6 mt2 mb3 text-shadow lh-solid">{post.frontmatter.title}</h1>
                                    </article>
                                  </div>

                                  <div className="absolute bottom-0 left-0 pv3 bg-black-10 w-100">
                                      <div className="flex items-center">

                                          <div className="w-50">
                                            {previous && (
                                              <Link className="f7 white tracked fl ph4 tl" to={previous.fields.slug} rel="prev">
                                                ← {previous.frontmatter.title}
                                              </Link>
                                            )}
                                          </div>

                                          <div className="w-50">
                                            {next && (
                                              <Link className="f7 white tracked fr ph4 tr" to={next.fields.slug} rel="next">
                                                {next.frontmatter.title} →
                                              </Link>
                                            )}
                                          </div>

                                      </div>
                                  </div>

                             </div>

                         </div>
                       </div>

                       <div className="w-100 cf">
                         <div id="imgCaption" className="f7 black-50 fr-ns ph4 pt3 flex flex-wrap items-center">
                            <a className="link tracked-sm black-50 pr2 pointer avenir" href={post.frontmatter.imgLink} >
                              <img className="pr1" src={photographer} alt="africa globe" width="13"/>  {post.frontmatter.imgAuthor}
                            </a> 
                         </div>
                       </div>


            <div className="w-100 pt3 ">


                  {/* Page article content*/}
                  <article>
                      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                  </article>

                  <div className="w-100 pv4 cf">
                  <div className="center tc">
                      <img src={coffeeflask} alt="All about Coffee logo" width="100"/>
                  </div>
                  </div>

                  {/* Previous and Next pagination at the bottom of the page*/}
                  <div className="w-100 cf pv3">
                    <div className="flex items-center">
                      
                          {previous && (
                            <Link className="w-50 f6 gray pointer avenir" to={previous.fields.slug} rel="prev">
                              <div className="fl pl4 tl">
                                ← {previous.frontmatter.title}
                                </div>
                            </Link>
                          )}
                     
                          {next && (
                            <Link className="w-50 f6 gray pointer avenir" to={next.fields.slug} rel="next">
                              <div className="fr pr4 tr">
                               {next.frontmatter.title} →
                              </div>
                            </Link>
                          )}

                     </div>
                    </div>


                    {/* Avitar and bio of Author*/}
                    <Bio/>


                    {/* Social Share buttons*/}
                    <Scrollable />
                  
              </div>
          </div>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        img
        imgLink
        imgAuthor
        order
      }
    }
  }
`
