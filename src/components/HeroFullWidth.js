import React from 'react'
import { Link } from "gatsby"
import {throttle} from 'lodash';


class HeroFullWidth extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: '', widthLoad: '', imgSrcToUse: '' };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.imgSrc = this.imgSrc.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        this.imgSrc();
        window.addEventListener('load', this.imgSrc);
        window.addEventListener('resize', throttle(this.updateWindowDimensions, 1000));

      }
      
      componentWillUnmount() {
        window.removeEventListener('load', this.imgSrc);
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth })

        var widthCheck = this.state.width

        let array = this.props.srcset.split(',');

        if ( widthCheck < 376 ) {
         var useOne = array[1].replace("700w", "")
         var oneToUse = useOne
         console.log( oneToUse )
         this.setState({ imgSrcToUse: oneToUse });
          
         } 
         else if ( widthCheck > 376 || widthCheck < 769 ) {

             var useTwo = array[2].replace("1400w", "")
             var twoToUse = useTwo
             console.log( twoToUse )
             this.setState({ imgSrcToUse: twoToUse });
         }
         else  {

             var useThree = array[3].replace("1880w", "")
             var threeToUse = useThree
             console.log( threeToUse )
             this.setState({ imgSrcToUse: threeToUse });
         }
 
      }

  

      imgSrc = ( srcset ) => {

           this.setState({ widthLoad: window.innerWidth });
           var widthCheckLoad = this.state.widthLoad

           let array = this.props.srcset.split(',');

           if ( widthCheckLoad < 376 ) {
            var useOne = array[1].replace("700w", "")
            var oneToUse = useOne
            console.log( oneToUse )
            this.setState({ imgSrcToUse: oneToUse });
             
            } 
            else if ( widthCheckLoad > 376 || widthCheckLoad < 769 ) {

                var useTwo = array[2].replace("1400w", "")
                var twoToUse = useTwo
                console.log( twoToUse )
                this.setState({ imgSrcToUse: twoToUse });
            }
            else {

                var useThree = array[3].replace("1880w", "")
                var threeToUse = useThree
                console.log( threeToUse )
                this.setState({ imgSrcToUse: threeToUse });
            }

           
      }
    




  render() {

    const { title, srcset, category, previous, next } = this.props

   


    return (

          <div className="w-100 cf db">
            <div className="w-100 relative cf vh-60 cover bg-center" srcSet={srcset}  role='img' aria-label="Accessible Name" style={{backgroundImage: `url(${this.state.imgSrcToUse})`}}>

                    <div className="absolute top-0 left-0 z-3 pv3 ph4 w-100 bg-animate hover-bg-light-gray o-80">
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

         


                <div className="absolute top-0 left-0 bottom-0 right-0 z-2">
                    <div className="flex items-center h-100">
                            <div className="mw7 center pa4 pa5-ns">
                                <h6  className="fw6 white tracked-mega mb0 ttu">{category}</h6>
                                <h1 className="f2 f1-ns white fw6 mt2 mb3 text-shadow lh-solid">{title}</h1>
                            </div>
                    </div>
                </div>
               
            </div>
          </div>


    )
  }
}

export default HeroFullWidth
