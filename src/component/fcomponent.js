import { render } from "@testing-library/react";
import React, {Component, useState} from "react";




export default class Fcomponent extends Component {

  constructor(props){

    super(props)
    this.state = {

      number: "",
      number1: "",
      result: ""
      

    }
    this.func = this.func.bind(this)
    this.func1 = this.func1.bind(this)
    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
    this.multyply = this.multyply.bind(this)
    this.degree = this.degree.bind(this)

  }

  func = (e) => {
    this.setState(({
      number: e.target.value
    }))
    


  }
  func1 = (e) => {
    this.setState(({
      number1: e.target.value
    }))
    


  }

  plus = () => {
    this.setState(({
      result: Number(this.state.number) + Number(this.state.number1)
    }))
    


  }
  minus = () => {
    this.setState(({
      result: Number(this.state.number) - Number(this.state.number1)
    }))
    


  }

  multyply = () => {
    this.setState(({
      result: Number(this.state.number) * Number(this.state.number1)
    }))
    


  }

  degree = () => {
    this.setState(({
      result: Number(this.state.number) / Number(this.state.number1)
    }))
    


  }


  render(){

    return(


      <div>
        <div className ="blockCalc">
        <div className ="calculate">


            <h2 className ="textCalc">Write first number</h2>
          <input type="text" onInput={this.func} />
          <h5>{this.state.number}</h5>
          <h2 className ="textCalc">Write second number</h2>
          <input type="text" onInput={this.func1} />
          <h5>{this.state.number1}</h5>
          <h2 className ="textCalc">Select operation</h2>
          <div className ="btnsAll">
          <div className ="btns">
          <button onClick = {this.plus}>+</button>
          </div>
          <div className ="btns">
          <button onClick = {this.minus}>-</button>
          </div>
          <div className ="btns">
          <button onClick = {this.multyply}>*</button>
          </div>
          <div className ="btns">
          <button onClick = {this.degree}>/</button>
          </div>
          </div>
          <h2 className ="textCalc">Result</h2>
          <h5>{this.state.result}</h5>





        </div>

        </div>


      </div>




    )

        
    

  }


}