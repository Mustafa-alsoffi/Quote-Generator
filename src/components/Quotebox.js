import { CSSTransition } from 'react-transition-group';
import React, { Component } from "react";
import './Style.scss';

export default class QuoteBox extends Component {
    componentWillMount() {

    
      
    }

  constructor(props) {
    super(props);

    this.state = {
      quotesData: [],
      color: this.props.colors,
      index: this.props.index,
      trans: false
    };
    

    
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => this.setState({quotesData: data.quotes}));

    
  }

  handleClick() {
     
    let randomIndex = Math.floor((Math.random() * 12));
    this.props.handleClick(randomIndex)
     this.setState(
       {
       index: randomIndex,
       trans: !this.state.trans
       }
     )

    
  }



  render() {
 const { quotesData } = this.state;
 var randomeQuote, quoteAuthor;
 if (quotesData.length != 0) {
   let index = Math.floor(Math.random() * quotesData.length);
   randomeQuote = quotesData[
    index
   ].quote
   quoteAuthor = quotesData[index].author
 }

    const colorStyle = {
      
        color: this.state.color[this.state.index], 
        background: this.state.color[this.state.index]
    }

  return ( <div className='mx-auto container' id='quote-box'>

   
    <CSSTransition in={this.state.trans} timeout={3000} classNames="example">
 <div>
    <div className='row'>

    <p style={{color: colorStyle.color}} className='text-center' id='text'><i className="fas fa-quote-left"></i> {randomeQuote} <i className="fas fa-quote-right"></i></p>

    </div>

    <div className='row'>
      <p style={{color: colorStyle.color}}  className="wrapper text-right" id="author">-{quoteAuthor}</p>
    </div>
</div>
    </CSSTransition>
  
    <div className='row justify-content-evenly' id='buttons'>
    {/* Share buttons */}
    <div className='col mr-auto'>
      <a style={{background: colorStyle.background}} href={'https://twitter.com/intent/tweet?text="' + randomeQuote + '" -' + quoteAuthor} className='btn' id='tweet-quote' target='_blank'><i style={{color: 'white'}} className="fab fa-twitter"></i></a>
      <a style={{background: colorStyle.background}} href="#" className='btn'  id='facebook'><i style={{color: 'white'}} className="fab fa-facebook-f"></i></a>
    </div>
  {/* New quote button  */}
  <button style={{color: 'white', background: colorStyle.background}} className='col-auto btn' id='new-quote' onClick={this.handleClick.bind(this)}>New quote</button>

  </div>
  </div>);

  }

}