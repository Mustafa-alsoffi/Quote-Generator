import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Style.scss';
// import bootstrap from 'bootstrap';
// import { LoremIpsum } from 'react-lorem-ipsum';

class QuoteBox extends Component {
    

  constructor(props) {
    super(props);

    this.state = {
      quote: this.props.quotes,
      color: this.props.colors,
      index: this.props.index,
      trans: false
    };
    
    
  }

  handleClick() {
     
    let randomIndex = Math.floor((Math.random() * 3));
    this.props.handleClick(randomIndex)
     this.setState(
       {
       index: randomIndex,
       trans: !this.state.trans
       }
     )

    
  }

  render() {


  return ( <div className='mx-auto container model' id='quote-box'>

   
    <CSSTransition in={this.state.trans} timeout={2000} classNames="example">
 <div>
    <div className='row'>

    <p className={'text-' + this.state.color[this.state.index] + ' text-center'} id='text'><i className="fas fa-quote-left"></i> {this.state.quote[this.state.index]} <i className="fas fa-quote-right"></i></p>

    </div>

    <div className='row'>
      <p ref={this.wrapperRef} className={"wrapper text-right text-" + this.state.color[this.state.index]} id="author">This author</p>
    </div>
</div>
    </CSSTransition>
  
    <div className='row justify-content-evenly' id='buttons'>
    {/* Share buttons */}
    <div className='col mr-auto'>
      <a href="https://twitter.com/intent/tweet?text=hello world" className={'btn btn-' + this.state.color[this.state.index]} id='tweet-quote'><i className="fab fa-twitter"></i></a>
      <a href="#" className={'btn btn-' + this.state.color[this.state.index]} id='facebook'><i className="fab fa-facebook-f"></i></a>
    </div>
  {/* New quote button  */}
  <button className={'col-auto btn btn-outline-' + this.state.color[this.state.index]} id='new-quote' onClick={this.handleClick.bind(this)}>New quote</button>

  </div>
  </div>);

  }


}

class App extends Component {

  constructor(props) {
    super(props);
    // this.wrapperRef = React.createRef();
    this.state = {
      quotes: ['Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
      'The most difficult thing is the decision to act, the rest is merely tenacity',
      'Everything you’ve ever wanted is on the other side of fear.'
    ],
      colors: ['primary', 'success', 'warning'],
      index: Math.floor((Math.random() * 3))
    }

  
  }

  handleClick(newIndex) {

    
    this.setState(
      {
        index: newIndex
      }
      
    )
      // const wrapper = this.wrapperRef.current;
      // wrapper.classList.toggle()
   
  }


  render() {
  
    console.log('Look here ' + this.state.index);
    
    return (
      <div className={'bg-'+this.state.colors[this.state.index] + " container-fluid align-items-center"} id='App'>
        {/* Next trial: NO indexing, just send the whole array */}
          <QuoteBox quotes={this.state.quotes} colors={this.state.colors} handleClick={this.handleClick.bind(this)} index={this.state.index}/>
          <span className='text-center font-monospace' id='creator'>by Mustafa</span>
          {/* <LoremIpsum p={2} className='text-center'/> */}
       

      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;