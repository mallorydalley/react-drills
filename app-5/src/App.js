import React from 'react';
import './App.css';
import Image from './Components/Image'

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <Image url={'https://picsum.photos/200'} />
      </div>
    )
  }
}

export default App;
