import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import coffeeflask from "../../content/assets/coffeeflask.svg"
import Bio from "../components/Bio"
import Scrollable from "../components/scroll"
import HeroFullWidth from "../components/HeroFullWidth"
import HeroSplitWidth from "../components/HeroSplitWidth"



class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
  
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />

          <div className="flex flex-column animated fadeIn">


                   {post.frontmatter.heroStyle === 'fullwidth' ? 

                      <HeroFullWidth 
                      heroImg= {post.frontmatter.cover.childImageSharp.fluid}
                      srcset= {post.frontmatter.cover.childImageSharp.fluid.srcSet}
                      title= {post.frontmatter.title}
                      category= {post.frontmatter.category} 
                      imgLink = {post.frontmatter.imgLink}
                      imgAuthor = {post.frontmatter.imgAuthor}
                      previous = {previous}
                      next = {next}
                      />

                     :

                      <HeroSplitWidth 
                      heroImg= {post.frontmatter.cover.childImageSharp.fluid}
                      srcset= {post.frontmatter.cover.childImageSharp.fluid.srcSet}
                      title= {post.frontmatter.title}
                      category= {post.frontmatter.category} 
                      imgLink = {post.frontmatter.imgLink}
                      imgAuthor = {post.frontmatter.imgAuthor}
                      excerpt= {post.excerpt} 
                      previous = {previous}
                      next = {next}
                      />
                    }


            


            <div className="w-100 pt3 ">
            {/* Social Share buttons*/}
                   <Scrollable />
                   
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
      excerpt(pruneLength: 200)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        imgLink
        imgAuthor
        order
        cover {
                childImageSharp{
                  fluid( maxWidth: 1400, quality: 75 ) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
            }
        heroStyle
      }
    }
  }
`
