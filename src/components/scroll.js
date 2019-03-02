import React from 'react';
import {throttle} from 'lodash';


export default class Scrollable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0, show: '' };
        this.handler = this.handleScroll.bind(this);
      }


  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 1000))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


handleScroll = () =>  {
    this.setState({ x: window.scrollX, y: window.scrollY});
    if ( this.state.y > 600 ) { this.setState({ show: 'db fixed-l animated fadeIn z-9999' }) } else {
        this.setState({ show: '' })
    }
}


  render() {
    return (

    
      <div className={"scrollable top-6 left-5 dn " + this.state.show }>
       
        <div className="w-100 mw3-l pa4 bg-near-white bg-transparent-ns  ">
          <a href="https://www.facebook.com/" className="link dim dib db-l mb3-l mr3 black-70" title="Impossible Labs on Facebook">
              <svg className="db square-1-5" data-icon="facebook" viewBox="0 0 32 32" fill="currentColor">
              <title >facebook icon</title>
              <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"
              ></path>
              </svg>
          </a>
          <a href="https://twitter.com/" className="link dim dib db-l mb3-l mr3 black-70">
              <svg className="db square-1-5" data-icon="twitter" viewBox="0 0 32 32"
              fill="currentColor" >
              <title >twitter icon</title>
              <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"
              ></path>
              </svg>
          </a>
      </div>

      </div>
    );
  }
}