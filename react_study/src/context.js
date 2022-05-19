import React,{useState} from 'react'

const userContext=React.createContext();
//Provider ve Consumer alıyoruz


export function UserProvider(props) {
    const [users]=useState([
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
    ])  
  return (
    <userContext.Provider value={users}>
        {props.children} 
    </userContext.Provider>
  )
}
const UserConsumer=userContext.Consumer;

export default UserConsumer;



