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
                {
                    id:1,
                    name:"Furkan ",
                    salary:"5000",
                    department:"Bilişim"
                },
                {
                    id:2,
                    name:"Fatih",
                    salary:"5000",
                    department:"Bilişim"
                },
                {
                    id:3,
                    name:"Aleyna ",
                    salary:"5000",
                    department:"Bilişim"
                },
                {
                    id:4,
                    name:"Palavan ",
                    salary:"5000",
                    department:"Bilişim"
                },
                {
                    id:5,
                    name:"Selim ",
                    salary:"5000",
                    department:"Bilişim"
                },
                {
                    id:6,
                    name:"Aliş ",
                    salary:"5000",
                    department:"Bilişim"
                },
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




