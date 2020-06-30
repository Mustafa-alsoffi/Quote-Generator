import React, { Component } from "react";
import ReactDOM from "react-dom";
import { LoremIpsum } from 'react-lorem-ipsum';;
import './Style.scss';

const QuoteBox = (props) => {
  
  return <div className='mx-auto container' id='QuoteBox'>
    <div className='row'>
    <p className='text-center' id='quote'><i class="fas fa-quote-left"></i> Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. <i class="fas fa-quote-right"></i></p>

    </div>
    <div className='row'>
      <p className="text-right">This author</p>
    </div>
    <Buttons />
  </div>;
}
const Buttons = (props) => {
  
  return <div className='row justify-content-evenly' id='buttons'>
    
    <div className='col-4 mr-auto btn-group'>
      <a href="#" className='btn btn-secondary' id='twitter'><i class="fab fa-twitter"></i></a>
      <a href="#" className='btn btn-secondary' id='facebook'><i class="fab fa-facebook-f"></i></a>
    </div>
  
  <button className='col-auto button btn btn-outline-danger' id='newQuote'>New quote</button>

  </div>;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

  
  }


  render() {
    return (
      <div className="container-fluid align-items-center" id='App'>
        
          <QuoteBox />
          <p className='text-center font-monospace' id='creator'>by Mustafa</p>
          {/* <LoremIpsum p={2} className='text-center'/> */}
       

      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;