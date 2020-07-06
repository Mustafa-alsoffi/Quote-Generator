import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteBox from './Quotebox'
import './Style.scss';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: Math.floor((Math.random() * 12)),
      colors : [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857"
      ]
    }

  
  }

  handleClick(newIndex) {

    
    this.setState(
      {
        index: newIndex
      }
      
    )
   
   
  }

  render() {

    return (
      <div style={{background: this.state.colors[this.state.index]}} className='container-fluid align-items-center' id='App'>
        {/* Next trial: NO indexing, just send the whole array */}
          <QuoteBox colors={this.state.colors} handleClick={this.handleClick.bind(this)} index={this.state.index}/>
          <span className='text-center font-monospace' id='creator'>by Mustafa</span>
          {/* <LoremIpsum p={2} className='text-center'/> */}
       

      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;