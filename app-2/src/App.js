import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
 constructor(){
   super()
   this.state = {
     foods: ['spaghetti', 'pizza', 'beer', 'ice cream']
   }
 }
 render(){
   let foodsToDisplay = this.state.foods.map((ele, i) => {return <h2 key={i}>{ele}</h2>})
   return <div className="App">{foodsToDisplay}</div>
 }
}

export default App;