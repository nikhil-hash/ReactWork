import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Message/>

          {/* <Greet name='Nirja' nickName='Soni'/>
          <Greet name='Gullu' nickName='Pullu'/>
          <Greet name='Nikhil' nickName='Ankur'/>
          <Welcome name='Nirja' nickName='Soni'/>
          <Welcome name='Gullu' nickName='Pullu'/>
          <Welcome name='Nikhil' nickName='Ankur'/> */}
      </div>
    );
  }
}

export default App;
