import './App.css';
import Navbar from './component/Navbar';
import Users from './component/Users';
import React from 'react'
import {Helmet} from "react-helmet";
import AddUser from './component/AddUser';

 function App() {
   
   return (
    <div className="container">
        <Helmet bodyAttributes={{style: 'background-color : white'}}/>

      <Navbar title="User App"></Navbar>
      <AddUser> </AddUser>
      <Users />
        
    </div>
  );
}







export default App;
