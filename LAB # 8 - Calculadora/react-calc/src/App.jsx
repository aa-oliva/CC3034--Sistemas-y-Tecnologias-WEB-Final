import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { DeleteButton } from "./components/DeletteButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    if(this.state.input.length <9){
      this.setState({ input: this.state.input + val });
    }
    
  };
  removeToInput = () => {
    if(this.setState.input = ""){
    }else{
      this.setState({input: this.state.input.substring(0,this.state.input.length-1)})
    }
    
    
  };

  handleEqual = () => {

    if(this.setState.input = ""){
    }else{
      var eq = math.eval(this.state.input)
    
      if (eq>999999999){
        this.setState({ input: "ERROR"});
      }
      if (eq<0){
        this.setState({ input: "ERROR"});
      } 
      else{
        if(eq.toString().length>9){
          this.setState({ input:  eq.toFixed(7)});
        }
        else{
          this.setState({ input:  eq});
        }
        
      }
    }
    
      
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <DeleteButton handleDelete={this.removeToInput}> DEL </DeleteButton>
            <ClearButton handleClear={() => this.setState({ input: "" })}> CL</ClearButton>
            <Button handleClick={this.addToInput}>%</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.addToInput}> </Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
