import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"


class HeroSplitWidth extends React.Component {

  

  render() {
    const { title, heroImg, excerpt, category, previous, next } = this.props
    var str = excerpt;
    var newexcerpt = str.replace(/\..*$/i, '.');

    return (

          <div className="w-100 cf relative">

                    <div className="absolute top-0 left-0 z-999 pv3 ph4 w-100 bg-animate hover-bg-light-gray o-80">
                        <div className="mw9 center">
                            <div className="flex">
                                    <div className="w-50 pr2">
                                        {previous && (
                                            <Link className="f7 black tracked fl tl" to={previous.fields.slug} rel="prev">
                                            ← {previous.frontmatter.title}
                                            </Link>
                                        )}
                                    </div>
                                    <div className="w-50 pl2">
                                        {next && (
                                            <Link className="f7 black tracked fr tr" to={next.fields.slug} rel="next">
                                            {next.frontmatter.title} →
                                            </Link>
                                        )}
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-100 cf">

                        <div className="fl w-100 w-100-m w-50-l vh-60 vh-40-m vh-100-l flex items-center ph0 ph4-ns ">
                            <article className="">
                                <h6  className="fw6 black tracked-mega mb0 ttu">{category}</h6>
                                <h1 className="f3 f2-m f1-l black fw6 mt2 mb3 lh-solid">{title}</h1>
                                <h5  className="fw4 black tracked mb0">{newexcerpt}</h5>
                            </article>
                        </div>

                       
                        <div className="fl w-100 w-100-m w-50-l relative cf vh-60 vh-40-m vh-100-l">
                         <Img className="vh-60 vh-40-m vh-100-l" fluid={heroImg} />
                        </div>
                       

                    </div>


                    
          </div>

    )
  }
}


export default HeroSplitWidth
