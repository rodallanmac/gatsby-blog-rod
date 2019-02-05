import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1><Link  to={`/`} >{title}</Link></h1>
      )
    } else {
      header = (
        <h3><Link to={`/`}>{title}</Link></h3>
      )
    }
    return (

        <div className="w-100">
          <div className="w-100 mw6 center">
            <header>{header}</header>
            <main>{children}</main>
          </div>
          <div className="w-100 cf">
            <footer className="mw6 center">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
    
    )
  }
}

export default Layout
