import React from "react"
import autoBind from 'auto-bind'



class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          markd: '', 
        swop: '',
        showHideMarkdown:'',
        showHideHtml:''
      };
        autoBind(this);
        this.didSwitchParentObject = true;
      }


      componentDidMount() {
        fetch('http://localhost:8080/content/blog/introduction.md')
        .then(res => res.text())
        .then(data =>  this.setState({ markd: data }) )
      } 

      componentDidUpdate ()	{
        if (this.didSwitchParentObject)
        {
            this.didSwitchParentObject= false;
            this.refs.markd.value = this.state.markd;
        }
	    }
      
      handleMDChange(event) {
        this.setState({markd: event.target.value});
      }


      handleSubmit(event) {
        console.log('An essay was submitted: ' + this.state.markd);
        event.preventDefault();

        let content = { md: this.state.markd,  filePath: 'http://localhost:8000/content/blog/introduction.md' };

        fetch('http://localhost:8080/receive', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(content)
        })
      }



     Editor = (event) => {
      event.preventDefault();
      var markdown = require( "markdown" ).markdown;
      var md = document.getElementById("markdownbox").value;
      var x = document.getElementById("preview")
      x.innerHTML = markdown.toHTML(md);
      }

      EditorFirst = () => {
        var markdown = require( "markdown" ).markdown;
        var md = document.getElementById("markdownbox").value;
        var x = document.getElementById("preview")
        x.innerHTML = markdown.toHTML(md);
        }

    showHide=()=>{
      this.EditorFirst();
      this.setState({showHideMarkdown: !this.state.showHideMarkdown ? 'dn' : '' });
      this.setState({showHideHtml: !this.state.showHideHtml ? 'db' : '' });
    }





 render() {




        return ( 

        <div className="w-100"> 



          <div className="fl w-100">
            <form onSubmit={this.handleSubmit}>

                <div className="w-100 cf bb b--black-10 pa2">
                  <div className="button f7 b pa2 di pointer di">MARKDOWN EDITOR</div>
                  <div className="button f7 pa2 di pointer"  onClick={this.showHide}>SHOW {!this.state.showHideMarkdown ? 'HTML': 'MARKDOWN' }</div>
                  <div className="button f7 pa2 di pointer di fr" onClick={this.handleSubmit}>SAVE</div>
                </div>


              <div className="w-100 cf">
                  <div className={'mw7 center ' +  this.state.showHideMarkdown}>
                    <textarea id="markdownbox" className="fl w-100 min-vh-100 bn" ref = "markd"  rows="6" cols="60" onBlur={this.handleMDChange} onChange={this.Editor}/>
                  </div>
                </div>

            </form>
           </div>

          <div className={"mw7 center dn  pt5 pb4 " +  this.state.showHideHtml}>
            <article>
            <div id="preview"> </div>      
            </article>
          </div> 


        </div>
        )}

}

export default Crud