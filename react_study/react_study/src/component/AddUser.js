import React,{useState} from 'react'
import posed from 'react-pose';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"
import uniqid from 'uniqid';
import UserConsumer from '../context';


const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtEnd:{
            display:"none"
        }
    } 
});

  


export default function AddUser() {

    const [visible,setVisible]=useState(true);
    // const [name,setName]=useState("");
    // const [department,setDepartment]=useState("");
    // const [salary,setSalary]=useState("");
    const [inputFields,setInputFields]=useState({
        name:"",
        department:"",
        salary:"",
    })
    
    const changeInput=(e)=>{
        setInputFields({...inputFields, [e.target.name]: e.target.value})
    }
    
    const addUser=(dispatch,e)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        const newUser={
            id:uniqid(), 
            name:inputFields.name,
            department:inputFields.department,
            salary:inputFields.salary,
        };
        dispatch({type:"ADD_USER",payload:newUser});
        console.log(newUser);
    }
     return <UserConsumer>
        {
            value=>{
                const dispatch=value;
               
                return (
          
                    <div className='col-md-8 mb-4'>
                         <div className='card-header d-flex justify-content-between'>
                                <h4>Add User</h4>
                               {visible? <i onClick={()=>setVisible(!visible)}><FontAwesomeIcon icon={faEye }></FontAwesomeIcon> </i>:<i onClick={()=>setVisible(!visible)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></i>}
                
                            </div>
                        <Animation pose={visible?"visible":"hidden"}>
                
                        <div className='card'>
                           
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'> 
                                        <label htmlFor='name'>Name</label>
                                        <input type="text" name='name' id='id' placeholder='Enter Name' className='form-control' value={inputFields.name} onChange={changeInput} >
                                        </input> 
                                    </div>
                                    <div className='form-group'> 
                                        <label htmlFor='departmen'>Department</label>
                                        <input type="text" name='department' id='department' placeholder='Enter Department' className='form-control' value={inputFields.department} onChange={changeInput}>
                                        </input>
                                    </div>
                                    <div className='form-group'> 
                                        <label htmlFor='salary'>Salary</label>
                                        <input type="text" name='salary' id='salary' placeholder='Enter Salary' className='form-control' value={inputFields.salary} onChange={changeInput}>
                                        </input>
                                    </div>
                                    <button onClick={()=>addUser(dispatch)} className='btn btn-danger btn-block ' type ='submit'> Add User</button>
                                </form>
                            </div>
                        </div>
                        </Animation>
                
                
                    </div>
                  )
            }
        }
    </UserConsumer>
   
    }
