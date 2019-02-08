import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import coffeeflask from "../../content/assets/coffeeflask.svg"
import Bio from "../components/Bio"


class BlogPostTemplate extends React.Component {
 
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

          <div className="flex flex-column">

                      <div className="w-100 cf">
                        <div className="w-100 min-vh-50 cover bg-bottom relative" style={{backgroundImage: 'url(' + post.frontmatter.img + '})'}}>

                            <div className="mw7 center">

                                  <div className="w-100 flex items-center min-vh-50 pt4-ns">
                                    <div className="w-100 flex flex-column pl4">
                                        <h6  className="fw6 white tracked-mega mb0 ttu tracked">{post.frontmatter.category} {post.frontmatter.order} </h6>
                                        <h1 className="f2 f1-ns white fw6 mt2 mb3 text-shadow">{post.frontmatter.title}</h1>
                                    </div>
                                  </div>

                                  <div className="absolute bottom-0 left-0 pv3 bg-black-10 w-100">
                                      <div className="flex items-center">

                                          <div className="w-50">
                                            {previous && (
                                              <Link className="f6 white tracked fl pl4 " to={previous.fields.slug} rel="prev">
                                                ← {previous.frontmatter.title}
                                              </Link>
                                            )}
                                          </div>

                                          <div className="w-50">
                                            {next && (
                                              <Link className="f6 white tracked fr pr4" to={next.fields.slug} rel="next">
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
                         <div id="imgCaption" className="f7 gray fr ph4 pt3">{post.frontmatter.imgPlace} →  <a className="link orange tracked pl2" href={post.frontmatter.imgLink} >{post.frontmatter.imgAuthor}</a> </div>
                       </div>


            <div className="w-100 pt3 pt5-ns">

                  <article>
                      <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                  </article>

                  <div class="w-100 pv4 cf">
                  <div class="center tc">
                      <img src={coffeeflask} alt="All about Coffee logo" width="100"/>
                  </div>
                  </div>


                  <div className="w-100 cf pv3">
                 
                    <div className="flex items-center">

                       
                          {previous && (
                            <Link className="w-50 f6 gray pointer" to={previous.fields.slug} rel="prev">
                              <div className="fl  pl4">
                                ← {previous.frontmatter.title}
                                </div>
                            </Link>
                          )}
                     

                        
                          {next && (
                            <Link className="w-50 f6 gray pointer" to={next.fields.slug} rel="next">
                              <div className="fr pr4 ">
                               {next.frontmatter.title} →
                              </div>
                            </Link>
                          )}
                        

                    </div>
                                  
                    </div>

                    <Bio/>

                  
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
        imgPlace
        order
      }
    }
  }
`
