import React from 'react'
import { withPrefix } from 'gatsby'
import { Link } from "gatsby"


class HeroFullWidth extends React.Component {

  render() {
    const heroImg = this.props.heroImg || withPrefix('/images/cover.jpg')
    const { title, category, previous, next } = this.props

    return (

          <div className="w-100 cf">
            <div className="w-100 cover bg-bottom relative" style={{backgroundImage: `url("${heroImg}")` }}>

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


                <div className="mw7 center">
                      <div className="w-100 flex items-center vh-85 ">
                        <article>
                            <h6  className="fw6 white tracked-mega mb0 ttu">{category}</h6>
                            <h1 className="f2 f1-ns white fw6 mt2 mb3 text-shadow lh-solid">{title}</h1>
                        </article>
                      </div>
                </div>
            </div>
          </div>


    )
  }
}

export default HeroFullWidth
