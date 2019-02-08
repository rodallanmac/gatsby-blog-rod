import React from "react"
import { Link } from "gatsby"
import coffeeflask from "../../content/assets/coffeeflask.svg"


const Nav = ({ siteTitle }) => (

    <div> 
      <div className="w-100 bb b--black-10 shadow-5">
        <div className="ph4 pv1">
          <div className="mw8 center">
              <nav className="flex justify-between">
                <Link className="logo-font link dim black b f4 f3-ns dib mr3 flex items-center" to="/" >
                  <img className="w3 h3  mr3" src={coffeeflask} alt='the coffee flask logo 1922'/>
                  {siteTitle}
                </Link>
                <div className="dn db-ns">
                  <div className="flex items-center">
                  <Link className="link dim gray f6 f5-ns dib mr3 pv3" to="/about" title="About">About</Link>
                  <Link className="link dim gray f6 f5-ns dib mr3" to="/store" title="Store">Store</Link>
                  <Link className="link dim gray f6 f5-ns dib" to="/contact" title="Contact">Contact</Link>
                  </div>
                </div>
              </nav>
          </div>
        </div>
       </div>
    </div>
  )
  
  export default Nav

