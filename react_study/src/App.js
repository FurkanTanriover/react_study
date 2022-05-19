import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import React from 'react'
import {Helmet} from "react-helmet";

 function App() {
   
   return (
    <div className="container">
        <Helmet bodyAttributes={{style: 'background-color : white'}}/>

      <Navbar title="User App"></Navbar>
      <Users />
        
    </div>
  );
}







export default App;
