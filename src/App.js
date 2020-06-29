import React, { Component } from 'react'
import Calculator from "./component/Calculator"
import Output from "./component/Output"
import "./App.css"

class App extends Component {
  state = {
    result: ""
  }
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.Calculate();
    }
    else if(buttonName === "C"){
       this.reset();
     }
     else if(buttonName ==="CE"){
       this.backSpace();
     }else
      this.setState({
        result: this.state.result + buttonName

      })
  }
  reset = () =>{
    this.setState({
      result : ""
    })
  }
  backSpace = () =>{
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }
  Calculate = () => {
   try { this.setState({
      result: eval(this.state.result)
    });} catch(e){
      this.setState({
        result : "error"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calc-body">
        <Output result={this.state.result} />
        <Calculator buttonPressed={this.buttonPressed} />
        </div>
      </div>
    )
  } 
}
export default App







