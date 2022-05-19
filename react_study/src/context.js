import React,{useState} from 'react'

const userContext=React.createContext();
//Provider ve Consumer alıyoruz



const reducer = (state,action)=>{
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users:state.users.filter(user=>action.payload!==user.id)
            }
            default:
                return null
        }
        
    }
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
    ]);

    return (
        <userContext.Provider value={users}>
        {props.children}
    </userContext.Provider>
  )
}
// dispatch(action =>
//     state => reducer(state,action)
//     );

const UserConsumer=userContext.Consumer;

export default UserConsumer;



