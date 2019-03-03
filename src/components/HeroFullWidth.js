import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

class HeroFullWidth extends React.Component {

   

  render() {

    const { title, heroImg, category, previous, next } = this.props

   


    return (

          <div className="w-100 cf db">
            <div className="w-100 relative cf">

                    <div className="absolute z-5 top-0 left-0 z-3 pv3 ph4 w-100 bg-animate hover-bg-light-gray o-80">
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


                  
   
                    <Img className="vh-50 vh-50-m vh-70-l" fluid={heroImg} />
                    
                    <div className="absolute z-4 top-0 left-0 z-3 pt5 pt6-m pt7-l w-100">
                        <article>
                            <h6  className="fw6 white tracked-mega mb0 ttu text-shadow">{category}</h6>
                            <h1 className="f3 f2-m f1-l white fw6 mt2 mb3 lh-solid text-shadow">{title}</h1>
                        </article>
                    </div> 
                   

       
               
            </div>
          </div>


    )
  }
}

export default HeroFullWidth
