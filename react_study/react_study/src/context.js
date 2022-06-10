import React, { Component } from 'react'

const UserContext=React.createContext(); 

const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_USER":
            console.log(action.type);
            return {
                ...state,
                users:[...state.users,action.payload],
            }
        case "DELETE_USER":
            console.log(action.type);
            return{
                
                ...state,
                users:state.users.filter(user=>action.payload!==user.id),
            }
            default:
                return state;
        }
    }


export  class UserProvider extends Component {
        state={
            users:[
            ],

            dispatch:action =>{
                this.setState(state=>reducer(state,action))
            }
  
        }
       
 
  render() {
    return (
     <UserContext.Provider value={this.state}>
         {this.props.children}
     </UserContext.Provider> 
    )
  }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;




