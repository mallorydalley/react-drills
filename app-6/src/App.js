import React from 'react';
import Todo from './Components/Todo'
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleInputChange(val){
    this.setState({input: val})
  }
  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  render(){
    let list = this.state.list.map((ele, idx) => {
      return <Todo key={idx} task={ele} />
    })
    return (
      <div className='App'>
        <h1>My to-do list:</h1>

        <div>
        <input 
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    )
  }
}

export default App;