import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './Nav'

import Footer from "./Footer.js"
require("prismjs/plugins/line-numbers/prism-line-numbers.css")




const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = {data => (
      <div>

        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
          <html lang="en" />
        </Helmet>

        <Nav siteTitle={data.site.siteMetadata.title} />


        <div>
          {children}
        </div>

        <Footer/>
        
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
