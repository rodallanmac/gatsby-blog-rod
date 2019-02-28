import React from 'react'
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"


class HeroSplitWidth extends React.Component {

  render() {
    const heroImg = this.props.heroImg || withPrefix('/images/cover.jpg')
    const { title, category, excerpt, previous, next } = this.props

    return (

          <div className="w-100 cf relative">

                    <div className="absolute top-0 left-0 pv3 ph4 w-100 bg-animate hover-bg-light-gray o-80">
                        <div className="mw9 center">
                            <div className="flex">
                                    <div className="w-50">
                                        {previous && (
                                            <Link className="f7 black tracked fl tl" to={previous.fields.slug} rel="prev">
                                            ← {previous.frontmatter.title}
                                            </Link>
                                        )}
                                    </div>
                                    <div className="w-50">
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

                        <div className="fl w-100 w-100-m w-50-l min-vh-60 vh-100-ns  flex items-center ph4">
                            <article>
                                <h6  className="fw6 black tracked-mega mb0 ttu">{category}</h6>
                                <h1 className="f2 f1-ns black fw6 mt2 mb3 lh-solid">{title}</h1>
                                <h5  className="fw4 black tracked mb0">{excerpt}</h5>
                            </article>
                        </div>

                        <div className="fl w-100 w-100-m w-50-l min-vh-40 vh-100-ns cover bg-bottom" style={{backgroundImage: `url("${heroImg}")` }}></div>

                    </div>


                    
          </div>

    )
  }
}

export default HeroSplitWidth
