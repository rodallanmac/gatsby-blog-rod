
import React from 'react';
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import coffeeflask from "../../content/assets/coffeeflaskblue.svg"
import coffeeCover from "../../content/assets/coffee-cover.jpeg"
import autoBind from 'auto-bind'


class BlogIndex extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    console.log('href: ' +  this.props.location.href)
    this.state = { toggle: ''};
    autoBind(this);
  }





  render() {

    return (
      <Layout>
        <SEO
          title="All about cover and the art of the long form story"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div className="w-100 relative">
          <div className="w-100 vh-100 nt5">

              <div className={"fl pointer w-100 vh-100 cf cover bg-center "} style={{backgroundImage: `url(${coffeeCover})`}}>
                <div className="w-100 vh-100 bg-theme-75 o-90 ">
                  <div className="mw6 center logo-font animated fast slideInDown">
                    <Link className="" to="/introduction">
                      <div className="flex-column flex-hv-center vh-100">
                        <img className="center w5 h5 tc" src={coffeeflask} alt='the coffee flask logo 1922'/> 
                        <div className="f1 f-subheadline-ns fw6 tc white ph4 tracked" style={{ lineHeight: '1em' }}>All About Coffee</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
        </div>

      </Layout>
    )
  }
}

export default BlogIndex

