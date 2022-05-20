import React,{useState} from 'react'
import posed from 'react-pose';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons"

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
                        <input type="text" name='name' id='id' placeholder='Enter Name' className='form-control' >
                        </input>
                    </div>
                    <div className='form-group'> 
                        <label htmlFor='departmen'>Department</label>
                        <input type="text" name='department' id='departmen' placeholder='Enter Department' className='form-control' >
                        </input>
                    </div>
                    <div className='form-group'> 
                        <label htmlFor='salary'>Salary</label>
                        <input type="text" name='salary' id='salary' placeholder='Enter Salary' className='form-control' >
                        </input>
                    </div>
                    <button className='btn btn-danger btn-block ' type='submit'> Add User</button>
                </form>
            </div>
        </div>
        </Animation>


    </div>
  )
}
