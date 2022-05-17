import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import React, { Component } from 'react'

class App extends Component {
  state = {
    users:[
      {
        id:1,
        name:"Furkan Tanrıöver",
        salary:"5000",
        department:"Bilişim"
      },
      { 
        id:2,
        name:"Aleyna Tanrıöver",
        salary:"5000",
        department:"Bilişim"
      },
      {
        id:3,
        name:"Palavan Tanrıöver",
        salary:"5000",
        department:"Bilişim"
      },
      {
        id:4,
        name:"Selim Tanrıöver",
        salary:"5000",
        department:"Bilişim"
      },
      {
        id:5,
        name:"Aliş Tanrıöver",
        salary:"5000",
        department:"Bilişim"
      },
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <Users users={this.state.users}/>
          
      </div>
    );
  }
}



export default App;
