import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  handleInput(val){
    this.setState({input: val})
  }
  render(){
    return (
      <div>
        <input onChange={e => this.handleInput(e.target.value)}/>
        <p>{this.state.input}</p>
      </div>
    )
  }
}

export default App;