import React from "react"
import { Link } from "gatsby"
import coffeeflask from "../../content/assets/coffeeflask.svg"
import menudot from "../../content/assets/menu_dot.svg"
import Pin from "./pin"



const Nav = ({ siteTitle }) => (
  <div>
    <Pin>
        <div> 
          <div className="w-100 bb b--black-10 shadow-5">
            <div className="ph4 pv1">
              <div className="mw9 center">
                  <nav className="flex justify-between">
                    <Link className="logo-font link dim black b f4 f3-ns dib mr3 flex items-center" to="/" >
                      <img className="w3 h3  mr3" src={coffeeflask} alt='the coffee flask logo 1922'/>
                      {siteTitle}
                    </Link>
                    <div className="dn db-ns pv2">
                      <div className="flex items-center pv2">
                        <Link className="link dim gray f6 f5-ns dib " to="/#contents" title="home"> <img className="w2 h2 " src={menudot} alt='menu'/></Link>
                      </div>
                    </div>
                  </nav>
              </div>
            </div>
          </div>
        </div>
    </Pin>
    </div>
  )
  
  export default Nav

